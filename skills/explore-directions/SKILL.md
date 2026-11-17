---
name: explore-directions
description: Builds three genuinely different directions for one piece of interface in the real product, lets the person switch between them in place, recommends one with its tradeoffs, and cleans up the rest. User-invoked.
when_to_use: Use when someone wants options, alternatives or variations for a component, screen or flow, asks "what are other ways to do this", is stuck between approaches, wants to compare designs side by side in the real app, or wants to explore before committing.
disable-model-invocation: true
---

# Explore directions

This skill builds three different answers to one design question inside the running product, so they can be judged in context instead of in a mockup. It sits in the Make band and is user-invoked, because it writes code that most of will be thrown away.

The governing idea: directions should differ in the bet they make about the person, not in their color. Three versions of the same idea is one idea and two distractions.

**Works with:** `problem-framing` owns the question when the question itself is unclear · `prioritization` owns choosing when the choice is about scope · the craft skills own the rules each direction must meet · `usability-testing` owns finding out which direction actually works for people.

## Start here

| The situation | Go to |
| --- | --- |
| One piece of interface, several possible approaches | **1. Write the question** below, then run the steps |
| The problem is unclear, not the solution | `problem-framing` first |
| You want small visual variations, not different approaches | Adjust in place with the relevant craft skill; this skill is for real alternatives |
| You need to know which direction people prefer | Build here, then `usability-testing` |
| There is no product to build in yet | `prototyping` |

## 1. Write the question

One sentence naming who, what they are trying to do, and what is hard about it. "Finance admins approving 200 expenses at month end lose track of which ones they have checked." Every direction is an answer to this sentence, and the comparison at the end refers back to it.

If you cannot write the sentence, stop and ask, or go to `problem-framing`. Directions built without a question get judged on taste.

## 2. Pick three different bets

Each direction takes a different position on one main axis. Choose the axis that matters most for this question:

| Axis | The three positions usually look like |
| --- | --- |
| **How much the person does** | They do it by hand with good tools; the product suggests and they confirm; the product does it and they review the exceptions |
| **How much is shown at once** | Everything visible and dense; progressive, revealed on demand; one item at a time, focused |
| **Where it happens** | Inline where the person already is; a dedicated place; a step in a guided flow |
| **What leads** | The data leads; the next action leads; the status or risk leads |
| **Voice and emphasis** | Quiet and neutral; guiding and explanatory; urgent and direct |

Write the three positions before building any of them. If two of them would look nearly the same on screen, replace one.

Every direction must meet the same floor: keyboard reachable, readable contrast, every state the piece needs (`components-and-states`), and the project's tokens and components. A direction that only wins because it skipped the error state has not won.

## 3. Build them in place

Host all three on the real page that will use the piece, behind a search parameter such as `?__direction=b`, so each is judged with the real header, real data and real neighbors. Use the project's components and tokens. Add a small picker fixed to a corner that lists the three by name and switches between them.

Show one direction at a time at full size. Side-by-side thumbnails make dense designs look cluttered and sparse ones look elegant, which is a property of the thumbnail.

If the piece has no page yet, build a single self-contained page with realistic content and say that context was missing.

Keep all direction files in one folder with a searchable name.

## 4. Look at each one, then recommend

Open each direction at phone and desktop width, with realistic data, and try the main task. Note where each one shines and where it strains.

Then recommend one. You were asked to explore because a decision is needed, and a designer who lays out three options and refuses to choose has handed the hard part back. Present a table:

| Direction | The bet | Right when | Costs |
| --- | --- | --- | --- |
| A | ... | ... | ... |

Follow it with your recommendation and the one reason that decided it, tied to the question from step 1. Say what would change your mind, such as "if most admins approve fewer than 20 at a time, B is better". The person decides; your job is to make the decision easy.

## 5. Promote one, remove the rest

When the person chooses, move the chosen direction into the real code path, delete the other two, the picker and the search parameter, and search the project for the folder name and parameter to confirm nothing is left. Do not do this before they choose.

## Evidence bar

The recommendation rests on the question and on what you saw in the running product, never on which direction you find prettier. Say which parts are judgment and which are observed.

Claims about what people prefer need people. If the choice is close or high-stakes, say so and recommend a quick test with `usability-testing` rather than presenting your preference as user evidence.

If only two real directions exist, build two and say why a third would have been padding.

## Before you ship

| Symptom | What it means | Fix |
| --- | --- | --- |
| The three directions differ only in color or radius | One idea in three outfits | Pick positions on a real axis |
| No question was written | Directions will be judged on taste | Write the one-sentence question first |
| One direction skips the error or empty state | It wins on an unfair comparison | Same floor for all three |
| Directions were shown as thumbnails | Density is misjudged | One at a time, full size |
| No recommendation was given | The hard part was handed back | Recommend one, with the deciding reason |
| The recommendation claims users prefer it | Opinion presented as evidence | Label it judgment; suggest a test |
| Losing directions were deleted before a choice | The person lost their comparison | Remove only after they choose |

## Reporting

**Format:**
1. **The question** in one sentence.
2. **How to view** the directions: the page and the parameter values.
3. **Comparison table**: direction, the bet, right when, costs.
4. **Recommendation**, the deciding reason, and what would change it.
5. **Not checked**, such as real users, real data volume or devices.

**Done when:** three directions that differ in their bet run in the real product at the same quality floor, a recommendation is made and reasoned, and cleanup waits for the person's choice.
