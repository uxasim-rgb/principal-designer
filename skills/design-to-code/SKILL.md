---
name: design-to-code
description: Builds interface from a Figma file, screenshot or sketch in the project's own stack, tokens and components, designs the states the file left out, and compares the result against the design before calling it done.
when_to_use: Use when someone shares a Figma link, frame, screenshot, mockup or sketch and asks to build it, implement it, code it, turn it into a component or page, or make the app match the design.
---

# Design to code

This skill turns a design into working interface inside an existing project. It sits in the Make band and is model-invoked, because a design plus a request to build it is already a direct instruction.

The governing idea: the design shows one moment; the product has to survive all of them. Match what the design shows exactly, use what the project already has, and fill in what the design did not draw.

**Works with:** `design-handoff` owns what a good spec contains · `design-systems` owns the tokens and components you map to · `components-and-states` owns the state set · `design-engineering` owns the implementation choices · `review-the-change` reviews the result.

## Start here

| The situation | Go to |
| --- | --- |
| A Figma link or frame to build | **1. Read the design at its source** below, then run the steps |
| Only a screenshot or sketch | **1. Read the design at its source**, the image section |
| The design conflicts with the design system | **3. Map every value to what exists** below |
| The design shows only the happy path | **4. Design what the file left out** below |
| You want to explore alternatives before building | `explore-directions` |
| The design needs a spec before anyone builds it | `design-handoff` |

## 1. Read the design at its source

**From Figma.** Use the connected Figma tools to read the frame: layout, spacing, type, color variables, components and their properties. Values read from the file are exact. If no Figma tool is connected, or the tool asks for sign-in, say so and ask the person to connect it or share an export. Do not guess from the link.

**From an image.** Every value is an estimate. State the scale you assumed (for example "the frame is 390px wide, so 1 image pixel is 1 CSS pixel at 1x") and treat spacing within 2px and colors within a few percent as uncertain.

**From a sketch.** Read structure and intent only. Every value comes from the project's system.

Note the frames that exist (widths, themes, states) and which ones do not.

## 2. Read the project before writing code

Find the stack, the styling approach, the token files, the component library and two or three existing screens that resemble this one. Read the project's own guidance files if present: `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, design-system docs, Storybook.

The new screen should look like it was built by the same team as its neighbors. Match their file layout, naming and patterns.

## 3. Map every value to what exists

For every color, size, space, radius, shadow, font and component in the design, find the project's equivalent:

| The design value | Do |
| --- | --- |
| Matches a token or component exactly | Use it |
| Within 2px of a spacing or size token, or the same color step | Use the token, and list the rounding in the report |
| More than 2px off, or a different color step | Stop and ask. It may be a deliberate change or a mistake in the file |
| A component the library does not have | Build it from existing primitives and list it as new |
| A one-off value with no token | Ask whether it should become a token. Never add a token or a variant just to hit a number |

Never hard-code a raw value where a token exists. A design matched with raw values looks right today and drifts the first time the theme changes.

## 4. Design what the file left out

Designs usually show the happy path at one or two widths. Before building, list what the design did not show and what you will do for each:

- **States**: loading, empty, error, partial, disabled with a reason, long content. Use the project's existing patterns for each.
- **Widths**: anything between and beyond the frames given, including 320px.
- **Interaction**: hover, focus, pressed, keyboard order, what happens after the main action.
- **Content**: real lengths, missing optional fields, other languages if the product has them.

Build these in the project's existing style and mark them as **Proposed** in the report. The person, or the designer who made the file, decides whether to keep them. Silently leaving them out ships a broken product; silently inventing them overrides a designer.

## 5. Build, then compare

Build the frames shown and the proposed states. Data that has no backend yet comes in as props or mock data, listed as **Not wired**.

Then open the running result next to the design at each frame's width and compare element by element: position, size, spacing, type, color, icon, radius. Fix your own mismatches. Where a mismatch comes from the system (the rounding you listed) leave it and report it.

Check the result at 320px, at 200% zoom, with the keyboard, and in the other theme if the product has one.

## Evidence bar

Values from a Figma file are exact; values from an image are estimates and say so. A match is claimed only for elements you compared in a running browser.

Every departure from the design is listed with its reason: a token rounding, a system conflict you asked about, or an accessibility requirement the design missed. A departure without a reason reads as a mistake.

If you could not run the result, say the build was not compared and list it as unverified. Never report "matches the design" from reading the code.

## Before you ship

| Symptom | What it means | Fix |
| --- | --- | --- |
| Raw hex and pixel values in the new code | Drift from the system starts now | Map to tokens |
| A new token or variant was added to hit a number | The system grows to fit one screen | Ask first |
| Only the frames in the file were built | Loading, empty and error will ship blank | List and build the missing states as Proposed |
| Proposed states are not marked | The designer cannot tell what was invented | Mark them in the report |
| "Matches the design" without a side-by-side | A claim from code reading | Compare in the browser at each width |
| Values from a screenshot treated as exact | False precision | Label estimates and the assumed scale |
| The screen looks unlike its neighbors | Project patterns were not read | Match existing screens |

## Reporting

**Format:**
1. **Built**: files changed, and how to view the result.
2. **Comparison**: a table of Element, Design, Built, Status (Match, Rounded to token, Asked, Mismatch).
3. **Proposed**: states and behaviors the design did not show, as built.
4. **Not wired**: data and actions that use mocks.
5. **Questions**: values that were more than 2px off or conflicted with the system.
6. **Not checked**: devices, screen readers, real data.

**Done when:** every shown frame is built from project tokens and components, compared in a browser at its width, every missing state is built and marked Proposed, and every departure has a reason.
