# Changelog

Notable changes to this collection. Versions follow [semantic versioning](https://semver.org/):

- **Major**: a skill is removed or renamed, a rule moves from one skill to another, or a reference file a skill linked to disappears.
- **Minor**: a new skill, or a new section in an existing one.
- **Patch**: wording, examples, fixed links, eval cases.

The version in `.claude-plugin/plugin.json` must be bumped in the same commit as any change under `skills/`. `claude plugin update` compares that number and nothing else, so an unbumped change reports "already at the latest version" and never reaches anyone.

## 2.0.0

Renamed from UX Field Kit to **Principal Product Designer**. The plugin is now `principal-designer`, so skills invoke as `/principal-designer:<skill>` instead of `/ux-field-kit:<skill>`, and the repository is `uxasim-rgb/principal-designer`. The lead agent is now `principal-designer` (it was `design-engineer`). No skill was renamed and no rule moved.

## 1.2.0

Closes the remaining gaps against focused interface collections and removes every em and en dash from the collection.

**New skills** - `native-platforms` (Surfaces) and `high-stakes-domains` (Inclusive)

**New references** - `motion-and-interaction/recipes.md` (press, enter and exit, stagger, icon swap, expand, toasts, loading), `design-engineering/tailwind-and-shadcn.md`, `native-platforms/updates.md`, `accessibility/standards-and-law.md`, `high-stakes-domains/domain-packs.md` (58 industries), `full-review/small-checks.md` (120 checks)

**Sharper rules** - light weights need size and `text-box` trim (`typography`), the 15 degree hue distance (`color-and-theming`), three secondary actions and edge peeking (`layout-and-composition`), roving tabindex (`accessibility`), cheapest fix first (`full-review`), git base, blame, follow limits and read-only rendering (`review-the-change`)

**Copy** - em and en dashes replaced throughout with colons, commas, parentheses and "to" for ranges

## 1.1.0

Eleven new skills, two agents and a CSS recipes reference.

**Make** (new band, hands-on work in the codebase) - `state-gallery`, `stress-test`, `explore-directions`, `design-to-code`, `how-its-built`, `improvement-shift`

**Surfaces** (new band) - `ai-and-agents`, `data-visualization`, `marketing-pages`

**Inclusive** - `deceptive-patterns` added

**Validate** - `launch-and-retirement` added

**Agents** - `principal-designer`, a lead that frames, builds, checks and explains, and `fresh-eyes`, an independent reviewer

**References** - `design-engineering/css-recipes.md`, `global-and-inclusive/urdu-and-arabic.md`, `full-review/generic-ai-tells.md`

## 1.0.0

First release. 35 skills across nine bands.

**Route**: `field-guide`, `full-review`

**Research**: `research-planning`, `user-interviews`, `usability-testing`, `surveys-and-measurement`, `research-synthesis`, `heuristic-evaluation`

**Define**: `problem-framing`, `audience-and-journeys`, `prioritization`, `success-metrics`

**Structure**: `information-architecture`, `user-flows`, `forms-and-input`, `content-design`

**Craft**: `layout-and-composition`, `typography`, `color-and-theming`, `components-and-states`, `motion-and-interaction`, `icons-and-imagery`

**Inclusive**: `accessibility`, `global-and-inclusive`

**Build**: `design-systems`, `design-handoff`, `design-engineering`, `prototyping`

**Validate**: `review-the-change`, `design-critique`, `experimentation-and-analytics`

**Practice**: `design-docs`, `stakeholder-communication`, `design-ops`, `case-studies`

Also in this release:

- 13 reference files carrying depth beyond the principle statements.
- 46 eval cases: 35 trigger, 8 routing, 3 negative. Statically validated; not yet executed against live models.
- `agents/openai.yaml` per skill for Codex, with `allow_implicit_invocation: false` on the four user-invoked skills.
- `scripts/validate.sh`: structure checks, run identically by CI and locally.
- `scripts/check-evals.js`: free static validation of the eval suite.
- `scripts/new-skill.sh`: scaffolds a skill to the house shape.
