---
name: state-gallery
description: Renders every state of one component or screen side by side on a temporary page in the real codebase, with a switcher, so the states can be seen, polished and handed off. User-invoked.
when_to_use: Use when someone wants to see all the states of a component or screen at once, polish loading, empty, error and long-content states, check which states exist in code, build a states page for handoff or QA, or asks "what does this look like when it fails".
disable-model-invocation: true
---

# State gallery

This skill renders every state of one component or screen on a temporary page inside the project, using the real component and mock data, so a designer can look at all of them instead of imagining them. It sits in the Make band and is user-invoked, because it writes files into the project.

The governing idea: a state nobody has seen is a state nobody designed. The gallery turns the state list into something on screen, and the states the code cannot produce become the design gaps to fix.

**Works with:** `components-and-states` owns the state set and what each state must contain · `content-design` owns the words in each state · `stress-test` pushes one state to its limits; this skill shows the normal range · `design-handoff` can use the finished gallery as a living spec.

## Start here

| The situation | Go to |
| --- | --- |
| You want to see and polish the states of one component | **1. Pick one subject** below, then run the steps in order |
| You want to know which states exist before designing | **2. Find the states in the code** below, and stop after the list |
| You want to see whether a component survives extreme content | `stress-test` |
| There is no code yet, only a design file | `components-and-states` to define the state set first |
| You want to compare different designs of one piece | `explore-directions` |

## 1. Pick one subject

One component or one screen per gallery. A gallery of a whole app is a storybook nobody maintains, and it hides the one subject you came to fix.

Name the subject by the file that defines it and the product name people use for it. "The invoice table in `src/billing/InvoiceTable.tsx`" is a subject. "Billing" is not.

## 2. Find the states in the code

Read the component and the code that feeds it. States come from five places, and each is a question to ask of the code:

| Source | Ask | Typical states |
| --- | --- | --- |
| **Data** | What can the data be? | loading, empty on first use, empty after a filter, one item, a typical amount, many items, partial data, stale data refreshing |
| **Outcome** | What can a request do? | success, failure with retry, timeout with unknown result, partial success, offline |
| **Person** | Who is looking? | each role and permission level, each plan tier, signed out, first visit versus returning |
| **Product** | What switches are on? | feature flags, trial and expired trial, locked or archived records, maintenance |
| **Interaction** | What is the person doing? | default, hover, focus, pressed, selected, disabled with a reason, editing, saving |

Write the list in product words a designer would use, not in variable names. "Trial ended, admin" beats `isTrialExpired && role === 'admin'`.

Then compare the list with the state set in `components-and-states`. A state the product needs but the code cannot produce is a finding, not something to fake. List it under **Missing states** in the report and do not add a code path to show it. Inventing a branch inside the component to display a state the product never reaches makes the gallery lie.

## 3. Build the temporary page

Make a page at a route that cannot collide with real ones, such as `/__states/<subject>`. Follow the project's routing and file conventions so it runs with the normal dev server.

- **Import the real component unchanged.** The gallery is useless if it renders a copy.
- **Feed states at the data boundary.** Pass props, seed the app's query cache, use the project's existing mock layer, or wrap the component in the providers it already reads. Never edit the component to accept a fake state.
- **Use realistic content in realistic amounts.** Real-looking names of varied length, prices with real precision, a list long enough to scroll. Three items named "Item 1" hide every layout problem the gallery exists to find.
- **Freeze time-based states.** Loading stays loading until you switch away. A spinner that resolves after a second cannot be inspected.
- **Add a switcher.** A grouped list of the states by source, setting a search parameter such as `?__state=trial-ended-admin`. The double underscore keeps it clear of the app's own parameters. Show one state at a time at full size; thumbnails distort spacing.
- **Keep everything removable.** All gallery files in one folder, named so a search finds them.

## 4. Look at every state

Open the page in a browser and look at each state at a phone width and a desktop width. Note anything broken next to the state name: clipped text, missing recovery, a layout jump, a state that looks identical to another.

Do not fix the component unless asked. The gallery is the deliverable; fixes are a separate decision.

## 5. Hand over and clean up later

Give the person the URL, the list of states with their parameter keys, and the findings. Leave the page running for them to work against.

Remove the gallery only when they say so. Then search the project for the folder name and the `__state` parameter, so nothing is left behind.

## Evidence bar

Every state in the list traces to a line of code or a product rule the person confirmed. A state you think should exist but cannot find in the code goes under **Missing states**, never into the gallery.

Report what you saw in the browser, not what the code suggests should appear. If you could not open a browser, say the states were built but not looked at, and list them as unverified.

A gallery where every state looks fine is a valid result. Say so in one line.

## Before you ship

| Symptom | What it means | Fix |
| --- | --- | --- |
| The component file changed | The gallery bent the subject to fit | Revert it; feed states at the data boundary |
| Every list has three items called "Item 1" | Layout problems are hidden | Use realistic content and amounts |
| Loading flashes and disappears | The state cannot be inspected | Hold pending requests until switched |
| A state appears in the gallery that the product never reaches | The gallery is fiction | Remove it; list it as missing or impossible |
| The switcher uses variable names | Designers cannot navigate it | Product words, grouped by source |
| Gallery files are spread across the project | Cleanup will miss some | One folder, searchable names |
| The page was deleted without asking | The person lost their workbench | Remove only on their word |

## Reporting

**Format:**
1. **URL** of the gallery and how to start it if the dev server is not running.
2. **States**, grouped by source, each with its parameter key and the code it came from.
3. **Missing states**, the ones the product needs and the code cannot produce, each with the owner skill.
4. **What looked wrong**, per state, with the width where it showed.
5. **Not checked**, such as real devices, screen readers or themes you did not open.

**Done when:** every state the code can produce renders from real code at full size, missing states are listed rather than faked, and the person knows how to remove the gallery.
