---
name: stress-test
description: Pushes one real component through hostile content, data, environments, input methods and timing on a temporary page, then reports what broke, ranked by who it hurts. User-invoked.
when_to_use: Use when someone wants to break a component on purpose, check it survives long names, huge numbers, other languages, large text, small screens, slow networks, double clicks or keyboard only, harden UI before launch, or asks "what could go wrong with this".
disable-model-invocation: true
---

# Stress test

This skill renders one real component under the conditions most likely to break it, looks at each one, and reports what failed and who would be hurt. It sits in the Make band and is user-invoked, because it writes a temporary page into the project.

The governing idea: real users are the stress test you did not run. Long names, slow phones, translated text and impatient double clicks are not edge cases; they are a normal Tuesday for someone.

**Works with:** `state-gallery` shows the normal range of states; this skill pushes past it · `components-and-states` owns the state set · `accessibility`, `global-and-inclusive`, `layout-and-composition` and `typography` own the rules a failure breaks · `design-engineering` owns the fixes in code.

## Start here

| The situation | Go to |
| --- | --- |
| You want to find what breaks one component | **1. Choose the conditions that apply** below, then run the steps |
| You want to see every normal state first | `state-gallery` |
| You already know what broke and want the fix | The owner skill named for that failure, then `design-engineering` |
| You want a review of a whole screen | `full-review` |
| You want to know if a change introduced the break | `review-the-change` |

## 1. Choose the conditions that apply

Pick from six axes and keep only the conditions this component can actually meet. A text field never sees 10,000 rows; a table never sees an empty string as its only content. Say which axes you dropped and why, in one line each.

| Axis | Conditions |
| --- | --- |
| **Content** | longest realistic string, shortest, empty optional fields, a single unbroken word or URL, emoji, mixed scripts, right-to-left text, German or Finnish length (about 30 to 40 percent longer than English), numbers with many digits, negative and zero amounts |
| **Data volume** | zero, one, exactly a page, one more than a page, thousands, items arriving while the person scrolls |
| **Environment** | 320px wide, a wide desktop, 200% zoom, the largest system text size, dark theme, forced colors, reduced motion, a touch screen |
| **Network and time** | slow response (several seconds), timeout, failure, offline, a response that arrives after the person has moved on, two responses arriving out of order |
| **Input** | keyboard only, screen reader names and announcements, touch, a double click or double tap on every action, rapid repeat presses, paste instead of typing, browser autofill |
| **Person** | no permission, read-only, a role that sees more columns, a record someone else is editing |

## 2. Build the temporary page

Make a page at a route that cannot collide with real ones, such as `/__stress/<component>`. Import the real component unchanged and add only labels and containers around it.

- **Static conditions** (content, volume, widths, themes) render side by side in labeled frames, so one look covers many.
- **Timing conditions** (slow, timeout, out-of-order) need a mock at the data boundary with controllable delays. Use the project's mock layer if it has one.
- **Input conditions** need a person or a scripted browser. If you can drive a browser, script the double click, the keyboard path and the rapid repeat, and record what happened. If you cannot, list these as not run.
- **Environment conditions** that the page cannot fake (system text size, forced colors) are run by changing the browser or OS setting and reloading.

Keep every file in one folder with a searchable name.

## 3. Look, then record

Open the page and look at each condition. Record what happened in plain words, next to the condition label on the page and in the report. "The name pushes the price off the card at 320px" is a record. "Layout issue" is not.

Then rank each failure by who it hurts and how badly:

| Rank | Means |
| --- | --- |
| **Blocks** | Someone cannot complete the task: content unreachable, action fires twice and charges twice, keyboard trap, data lost |
| **Misleads** | Someone completes the task with a wrong belief: a timeout shown as "no results", a stale value shown as current, partial success shown as failure |
| **Degrades** | The task works but is harder: clipped text with a way to see it, a layout jump, a slow spinner with no progress |
| **Cosmetic** | Looks wrong, harms nobody |

Name the person for every Blocks or Misleads finding: "a screen reader user", "someone on a slow train connection", "a German admin". A failure without a person attached gets argued away.

## 4. Fix only if asked

The report is the deliverable. If the person asks for fixes, fix the failures in rank order, then reload the page and look at the failed conditions again. A fix not re-checked on the page is not done.

Leave the page up for them. Remove it only when they say so, then search for the folder name and route so nothing is left behind.

## Evidence bar

Every finding names the condition, what was observed, and where. Observed means seen in a browser or recorded by a script, not inferred from reading code.

Conditions you could not run are listed as **Not run**, with what would be needed to run them. Never mark a condition as passed because the code looks like it handles it.

"Everything survived" is a valid and useful result. Report it in one line with the list of conditions that were run.

## Before you ship

| Symptom | What it means | Fix |
| --- | --- | --- |
| Every axis was applied, including impossible ones | The test is noise | Keep only conditions the component can meet |
| The component was edited to accept test data | The test measures a different component | Feed data at the boundary; import it unchanged |
| Timing conditions were skipped silently | The most damaging failures are untested | Mock delays, or list them as not run |
| "Looks fine" for a condition never opened | A guess reported as a pass | Mark it not run |
| Findings have no person attached | They will be argued away | Name who is hurt |
| A double click was never tried | Duplicate charges and records are likely | Script or perform it on every action |
| Fixes were applied without re-checking | The fix may have moved the break | Reload and look again |

## Reporting

**Format:**
1. **Subject and URL** of the stress page.
2. **Conditions run**, by axis, and the ones dropped with a reason.
3. **Failures**, ranked Blocks, Misleads, Degrades, Cosmetic. Each with condition, what happened, who it hurts, and the owner skill.
4. **Not run**, with what would be needed.
5. **Survived**, a one-line list of conditions that passed.

**Done when:** every applicable condition was run or listed as not run, every failure has a rank and a person, and nothing was fixed that the person did not ask to fix.
