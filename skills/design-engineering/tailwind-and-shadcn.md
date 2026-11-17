# Tailwind and shadcn/ui

How the rules in this collection map onto Tailwind CSS (v4) and shadcn/ui, the stack most often used when building with AI tools. Rules still belong to their owners; this file only says which class or file does the job. Class names change between major versions, so check the project's Tailwind version in `package.json` before applying anything here.

## Tailwind: the recipes as classes

| Rule | Class |
| --- | --- |
| Balanced headings | `text-balance` |
| Paragraphs without a lonely last word | `text-pretty` |
| Long words and URLs wrap | `wrap-anywhere` (v4.1 and later), or `break-words` |
| Numbers that line up | `tabular-nums` |
| Underlines that sit well | `underline-offset-4 decoration-from-font` |
| Flex child with long text | `min-w-0` |
| Grid track that can shrink | `grid-cols-[minmax(0,1fr)_auto]` and similar |
| Visible mobile height | `h-dvh` or `min-h-svh` |
| Anchors below a sticky header | `scroll-pt-16` on the scroll container, matching the header height |
| Dialog scroll stays inside | `overscroll-contain` |
| No double-tap zoom on controls | `touch-manipulation` |
| Stable scrollbar space | `[scrollbar-gutter:stable]` |
| Native controls follow the theme | `scheme-light-dark` on the root (or set `color-scheme` in CSS) |
| Native control color | `accent-primary` or another theme color |
| Focus ring only for keyboard | `focus-visible:outline-2 focus-visible:outline-offset-2` |
| Respect reduced motion | `motion-safe:` for movement, `motion-reduce:` for the calmer version |
| Forced colors | `forced-colors:` variant |
| Entry animation before-state | `starting:` variant |
| Name the transitioned properties | `transition-[opacity,transform]` rather than `transition-all` |
| Press feedback | `active:scale-[0.97] transition-transform duration-100` |
| Background frozen behind a panel | `inert` attribute, styled with the `inert:` variant if needed |

In v4, `hover:` already applies only on devices that can hover, so sticky hover on phones is handled. In v3 and earlier it is not; wrap hover styles in a custom variant or accept the risk on touch.

Tailwind v4's default palette is defined in OKLCH. When adding brand colors, define them as theme variables in OKLCH in the `@theme` block, then use them through semantic names (below) rather than raw `bg-[#...]` values.

## Tokens: semantic names, not palette steps

Components should reference roles (`bg-background`, `text-muted-foreground`, `border-input`, `bg-primary`), not palette steps (`bg-zinc-100`, `text-blue-600`). A component written with palette steps cannot be themed and will drift. `color-and-theming` and `design-systems` own the naming.

Check the contrast of the muted text role against every surface it sits on, in both themes. It is the pair most often below 4.5:1. `accessibility` owns the threshold.

## shadcn/ui: what to know before changing it

shadcn/ui copies component source into the project (usually `components/ui/`). That changes how you work with it:

- **Edit the source, do not wrap it.** The project owns these files. A wrapper that overrides classes from outside fights the component; a change in the source is the intended path.
- **Variants live in the component**, defined with `cva`. Add a variant there rather than passing one-off class strings at every call site.
- **Theme variables live in the global CSS file** (`--background`, `--foreground`, `--primary`, `--muted-foreground`, `--radius` and others). Change the system there, once, not per component.
- **`cn()` merges classes** so later ones win. Passing `className` is for layout (margins, width), not for restyling a component's identity.
- **Interactive components are built on accessible primitives** (Radix UI or Base UI, depending on the version), which handle focus trapping, Escape, roles and keyboard patterns. Do not replace them with custom markup to change a look; restyle them.
- **Forms** wire labels, descriptions and `aria-invalid` through the form components. Keep using them so errors stay announced.
- **Toasts** (Sonner) auto-dismiss by default. Raise the duration for long messages and never put an action the person must take only in a toast. `motion-and-interaction` has the timing.

## The generic look

Default shadcn/ui with the default palette is recognizable, and many AI-built products look identical because of it. Change at least the type, the radius, the neutral ramp and the accent so the product looks like itself. `full-review` lists the generic tells to remove.
