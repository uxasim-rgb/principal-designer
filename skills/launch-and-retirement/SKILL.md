---
name: launch-and-retirement
description: Plans how a feature reaches people, how it is watched once live, how users move between old and new versions, and how it is retired without breaking their work.
when_to_use: Use when planning a launch, rollout, beta or feature flag, a migration from an old version to a new one, deprecating, sunsetting or removing a feature or API, post-launch review, or when users are upset that something they relied on changed.
---

# Launch and retirement

This skill covers the life of a feature after design is done: release, live operation, migration and removal. It sits in the Validate band.

The governing idea: launching is not success and removing is not cleanup. Both are experiences people go through, and both need to be designed as carefully as the feature.

**Works with:** `success-metrics` owns what counts as success · `experimentation-and-analytics` owns staged comparisons · `user-flows` owns the states of the flows involved · `content-design` owns the notices · `design-systems` owns deprecating components inside the system.

## Start here

| The situation | Go to |
| --- | --- |
| Getting ready to release | **Ready means someone can respond** below |
| Choosing how to release | **Roll out in stages you can reverse** below |
| Moving people from old to new | **Migrate the work, not just the screens** below |
| Removing a feature or API | **Retire on evidence, not on a date** below |
| It shipped; now what | **Watch what people do after launch** below |
| Deciding what to measure | `success-metrics` |

## Ready means someone can respond

Before release, name who receives it, what can fail, how you will see it fail, and who acts. Check the main tasks with real data, accessibility, translations, analytics events actually firing, and that support can explain the change. A launch with no owner for the first week is a launch nobody is watching.

## Roll out in stages you can reverse

Release to a small group first, behind a flag, and widen on evidence. Design the reversal: if the flag turns off, what does a person mid-task see, and is their work kept? Tell people about changes that affect how they work, before and at the moment they meet them.

## Watch what people do after launch

Compare against the baseline you set before release. Look across sources: task completion, drop-off, support tickets, reviews, a few direct conversations. Check whether some groups are worse off: a device, a language, a role, assistive technology users.

Before changing the design, rule out broken tracking. A jump in a number is often an event that started or stopped firing.

## Migrate the work, not just the screens

People care about their data, settings, saved work, links and habits, not the old screens. For a migration:

- Map every kind of data and setting from old to new, including the odd ones.
- Keep links and bookmarks working, or redirect them.
- Run old and new side by side for a period where people, and integrations, can check results match.
- Design the partial cases: what migrated, what did not, and what the person should do.
- Study expert workflows before removing them; power users notice first and loudest.

## Retire on evidence, not on a date

1. **Measure real use.** Who uses it, how often, through the interface or through integrations and APIs.
2. **Offer a path.** An alternative, an export, or an API replacement for each kind of user. Integrations need a specific migration route, such as a new endpoint or format.
3. **Announce in phases**, with dates, in the product where the feature lives, in email, and in API responses or headers for integrations.
4. **Gate removal on evidence**: no remaining calls for a set period, or sign-off from the customers who depend on it, not only on the calendar.
5. **Design the ending.** In the product, the place where the feature was explains what happened and where to go. Integration calls get a clear error that points to the replacement.
6. **Decide what happens to the data**: kept, exported, archived or deleted, and tell people which.

## Evidence bar

Adoption does not show benefit. A feature used by many people can still be making their work worse; check outcomes, not just usage.

Retirement decisions cite usage numbers with their source and period, and name the customers or integrations affected.

## Before you ship

| Symptom | What it means | Fix |
| --- | --- | --- |
| No named owner after launch | Problems will go unseen | Name who watches and acts |
| The flag can be turned off but nobody designed what users see | Reversal will break work | Design the off state |
| A metric jumped right after release | Possibly tracking, not behavior | Verify events before acting |
| Migration moves screens but not saved work | People lose what they care about | Map data, settings, links |
| Removal date set with no usage check | Customers will break | Gate on evidence |
| The old feature's place is now blank | People are lost | Explain and point onward |
| API callers get a generic 404 | Integrations fail silently | A clear error with the replacement |

## Reporting

**Format:** for launch, the readiness checklist with owners, the rollout stages and the reversal design. For retirement, the usage evidence, the path for each kind of user, the phased timeline, the removal gate and the ending states.

**Done when:** someone owns the live period, the release can be reversed without losing work, migrations carry people's work, and removal waits for evidence.
