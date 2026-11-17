# Principal Product Designer

The most senior product designer on your team, as agent skills for Claude Code. It researches, designs, builds in your code and checks its own work before you see it.

Principal is the top of the hands-on design ladder (senior, staff, principal): the designer who still does the work and is trusted with the hardest problems. This collection is built to work at that level, for designers, developers, researchers and anyone shipping a product.

Most interface skill collections start at the point where a designer is already in a code editor adjusting a border radius. That is the last twenty percent of the work. This one covers the whole arc: the research that decides what to build, the framing that turns observations into a decision, the structure that carries the content, the craft that finishes it, the systems that keep it consistent, and the habits that keep a team functioning.

One folder. Forty-eight skills and two agents. Nothing to remember except where you are in the work.

## Who this is for

| If you are a… | Start at |
| --- | --- |
| UX researcher | `research-planning`, `user-interviews`, `usability-testing`, `research-synthesis` |
| Product designer | `problem-framing`, `prioritization`, `success-metrics`, `design-docs` |
| UX designer | `information-architecture`, `user-flows`, `forms-and-input`, `content-design` |
| UI designer | `layout-and-composition`, `typography`, `color-and-theming`, `components-and-states` |
| UX/UI designer | `field-guide`: it spans both |
| Design engineer | `design-engineering`, `design-systems`, `design-handoff`, `review-the-change` |
| Content designer | `content-design`, `global-and-inclusive` |
| Design ops | `design-ops`, `design-critique`, `research-synthesis` |
| Job hunting | `case-studies`, `stakeholder-communication` |

Not sure? Run `field-guide`. It asks four questions and routes you.

## The map

**Route**: where to start
`field-guide` · `full-review`

**Research**: turn assumptions into observations
`research-planning` · `user-interviews` · `usability-testing` · `surveys-and-measurement` · `research-synthesis` · `heuristic-evaluation`

**Define**: turn observations into a decision
`problem-framing` · `audience-and-journeys` · `prioritization` · `success-metrics`

**Structure**: turn the decision into organization
`information-architecture` · `user-flows` · `forms-and-input` · `content-design`

**Craft**: turn structure into a considered surface
`layout-and-composition` · `typography` · `color-and-theming` · `components-and-states` · `motion-and-interaction` · `icons-and-imagery`

**Inclusive**: runs alongside everything, never after
`accessibility` · `global-and-inclusive` · `deceptive-patterns` · `high-stakes-domains`

**Build**: make it exist and keep existing
`design-systems` · `design-handoff` · `design-engineering` · `prototyping`

**Validate**: check what was built against what was meant
`review-the-change` · `design-critique` · `experimentation-and-analytics` · `launch-and-retirement`

**Practice**: the work around the work
`design-docs` · `stakeholder-communication` · `design-ops` · `case-studies`

**Surfaces** - the product types with rules of their own
`ai-and-agents` · `data-visualization` · `marketing-pages` · `native-platforms`

**Make** - hands-on work inside your codebase, run when you ask
`state-gallery` · `stress-test` · `explore-directions` · `design-to-code` · `how-its-built` · `improvement-shift`

## The principal designer

Two agents sit on top of the skills. `principal-designer` works like the most senior product designer you could hire: it questions the brief, reads your project, designs the failure states first, builds in your stack and tokens, checks the result in a browser, and asks `fresh-eyes`, an independent reviewer, to look at the work cold before it reaches you. Ask for it by name, or let Claude hand design work to it.

| Make skill | What it does |
| --- | --- |
| `state-gallery` | Renders every state of one component on a temporary page with a switcher, and lists the states the code cannot produce |
| `stress-test` | Pushes one component through hostile content, sizes, networks and input, and ranks what broke by who it hurts |
| `explore-directions` | Builds three directions that differ in what they bet on, in the real product, and recommends one |
| `design-to-code` | Builds from Figma or a screenshot with your tokens, designs the missing states, and compares the result side by side |
| `how-its-built` | Explains how a site or effect works, labeling every claim as measured, from source or guessed |
| `improvement-shift` | Improves the product while you are away, on a branch, rejecting its own weak changes, and leaves a report |

## What makes these different

**Every skill opens with a `Start here` table.** Forty-eight skills only work as one folder if each one catches people who landed in the wrong place and redirects them. Ask `usability-testing` a question about why people behave a certain way and it sends you to `user-interviews` before you read a rule that does not apply.

**Every skill carries an `Evidence bar`.** A collection of rules without a statement of how hard to press produces reviews that block on taste. Each skill says what must be measured rather than estimated, how many observations make a pattern, and when the correct output is nothing at all.

**Every skill has a `Role lens` where roles differ.** A researcher and a design engineer take different things from `usability-testing`. The skill says which.

**Findings carry their evidence inline.** Counts, not percentages, from qualitative work. Margins of error on every survey number. Hypotheses marked as hypotheses. The discipline is enforced in the skills, not left to the reader.

## Testable, not just written

A 48-skill collection fails quietly. The risk is not that a skill never fires: it is that two compete and the wrong one wins, and nobody notices because the answer that came back was plausible.

So the triggering is measurable:

```bash
claude plugin eval .
```

59 cases run with the plugin loaded and again without it, reporting what the plugin actually contributed. 48 check that each skill fires on natural phrasing. 8 check that neighbouring skills do not steal each other's requests: that "why do users keep exporting to spreadsheets" reaches `user-interviews` and not `usability-testing`, and "is #767676 on white good enough" reaches `accessibility` and not `color-and-theming`. 3 check that unrelated requests invoke nothing at all.

**Status: written and statically validated, not yet executed.** The frontmatter parses, the grader regexes were checked against real Skill-call payloads in both bare and namespaced form, every skill has a case, and no prompt names its own skill. It has not been run against live models. Expect some trigger failures on a first run: that is what the suite is for, and the fix is nearly always a skill's `when_to_use` rather than its body.

CI runs the structure checks on every push with no API key needed, and the eval suite on pull requests when `ANTHROPIC_API_KEY` is configured. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Install

### Skills CLI

```bash
npx skills add uxasim-rgb/principal-designer
```

### Claude Code plugin

```text
/plugin marketplace add uxasim-rgb/principal-designer
/plugin install principal-designer@principal-designer
```

Skills then invoke as `/principal-designer:usability-testing`, or Claude reaches them on its own when a request matches.

## Repository layout

```
principal-designer/
├── .claude-plugin/
│   ├── plugin.json          # the plugin manifest: must live here, not at the root
│   └── marketplace.json
├── agents/                  # principal-designer and fresh-eyes subagents
├── skills/                  # 48 skills, one directory each
│   └── <skill-name>/
│       ├── SKILL.md         # the skill
│       ├── agents/
│       │   └── openai.yaml  # Codex display name + invocation policy
│       └── *.md             # reference files, where depth exceeds a principle
├── evals/                   # 59 cases: 48 trigger, 8 routing, 3 negative
│   ├── <skill-name>/
│   │   ├── prompt.md
│   │   └── graders/
│   ├── routing/             # neighbouring skills must not steal each other's requests
│   └── negative/            # unrelated requests must invoke nothing
├── scripts/
│   ├── validate.sh          # structure checks; CI runs this exact file
│   ├── check-evals.js       # free static validation of the eval suite
│   └── new-skill.sh         # scaffolds a skill to the house shape
├── .github/workflows/
│   └── validate.yml
├── AGENTS.md                # how a skill is written, and who owns which rule
├── CLAUDE.md                # imports AGENTS.md
├── CONTRIBUTING.md
├── CHANGELOG.md
└── package.json             # npm run validate / check:evals / eval / new-skill
```

## Working on it

```bash
git clone https://github.com/uxasim-rgb/principal-designer.git
cd principal-designer
npm run validate
```

No dependencies to install: `validate` is bash and node only, needs no API key, and costs nothing.

| Command | What it does |
| --- | --- |
| `npm run validate` | Every structure check. The same script CI runs |
| `npm run check:evals` | Static validation of the eval suite: free |
| `npm run new-skill <slug> "<Name>" "<desc>"` | Scaffolds a skill and its eval case |
| `npm run eval` | Full eval suite, capped at $30 |
| `npm run eval:smoke` | One case, one run: about a dollar |

`npm run eval` needs the [Claude Code CLI](https://code.claude.com/docs/en/plugins) installed and authenticated, and bills real usage. The other three do not.

## How I use it

1. Any new project starts with `field-guide` to name which band the work is actually in: usually earlier than the request implies.
2. Research runs through `research-planning` before anyone books a session, so the study has a decision waiting on it.
3. Build work runs against `design-systems` and `accessibility` from the first component, not as a retrofit.
4. Before pushing, `review-the-change` on the diff. Before shipping, `full-review` on the whole surface.
5. Whatever the work taught goes back into the skill that should have known it.

The skills are the institution. The conversations are disposable.

---

## Acknowledgements

The architecture here, domain skills with an orchestrator, reference files beside each `SKILL.md`, and a rule-ownership table so each rule has exactly one home, follows the pattern set by [jakubkrehel/skills](https://github.com/jakubkrehel/skills). The content, the band structure and the scope are my own, and this collection covers research, strategy and practice that his does not, but the shape is his and it is a good shape.

Standards cited throughout: [WCAG 2.2](https://www.w3.org/TR/WCAG22/), the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/), and the published norms for SUS, UMUX-Lite and SEQ.

---

Built by Asim Sharif · [uxasim.com](https://uxasim.com/) · MIT
