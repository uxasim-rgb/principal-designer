#!/usr/bin/env node
// Parses every skill and agent frontmatter the way a strict YAML loader would
// for the subset this repo uses, so a header that breaks `npx skills` fails here.
const fs = require('fs');
const path = require('path');

const errors = [];
const skills = fs.readdirSync('skills').filter(d => fs.existsSync(path.join('skills', d, 'SKILL.md')));
const files = skills.map(d => path.join('skills', d, 'SKILL.md'))
  .concat(fs.existsSync('agents') ? fs.readdirSync('agents').filter(f => f.endsWith('.md')).map(f => path.join('agents', f)) : []);

function parse(file) {
  const text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  if (!text.startsWith('---\n')) { errors.push(`${file}: does not open with ---`); return null; }
  const end = text.indexOf('\n---', 4);
  if (end < 0) { errors.push(`${file}: frontmatter is not closed`); return null; }
  const lines = text.slice(4, end).split('\n');
  const out = {};
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    const m = line.match(/^([A-Za-z_-]+):(?: (.*))?$/);
    if (!m) { errors.push(`${file}: cannot parse frontmatter line ${i + 2}: ${line}`); continue; }
    const [, key, raw = ''] = m;
    if (raw === '>-' || raw === '>' || raw === '|' || raw === '|-') {
      const body = [];
      while (i + 1 < lines.length && /^\s+\S/.test(lines[i + 1])) body.push(lines[++i].trim());
      out[key] = raw.startsWith('>') ? body.join(' ') : body.join('\n');
    } else if (/^".*"$/.test(raw) || /^'.*'$/.test(raw)) {
      out[key] = raw.slice(1, -1);
    } else {
      if (/: /.test(raw) || / #/.test(raw) || /^[\[{&*!|>%@`"']/.test(raw))
        errors.push(`${file}: '${key}' is a plain YAML value containing ': ', ' #' or a leading special character. Strict loaders reject it. Use '${key}: >-' and indent the text on the next line`);
      out[key] = raw;
    }
  }
  return out;
}

for (const file of files) {
  const fm = parse(file);
  if (!fm) continue;
  if (!fm.name) errors.push(`${file}: missing name`);
  if (!fm.description) errors.push(`${file}: missing description`);
  if (file.startsWith('skills')) {
    const slug = path.basename(path.dirname(file));
    if (fm.name !== slug) errors.push(`${file}: name '${fm.name}' does not match directory '${slug}'`);
    const n = (fm.description || '').length + (fm.when_to_use || '').length;
    if (n > 1536) errors.push(`${file}: description + when_to_use is ${n} chars, budget is 1536`);
    // every skill named in the Works with line must exist
    const text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
    const works = text.split('\n').find(l => l.startsWith('**Works with:**')) || '';
    for (const [, ref] of works.matchAll(/`([a-z0-9-]+)`/g))
      if (!skills.includes(ref)) errors.push(`${file}: Works with names \`${ref}\`, which is not a skill`);
  }
}

if (errors.length) { errors.forEach(e => console.error('  ✗ ' + e)); process.exit(1); }
console.log(`  ✓ ${files.length} frontmatter blocks parse; names, budgets and Works with references are valid`);
