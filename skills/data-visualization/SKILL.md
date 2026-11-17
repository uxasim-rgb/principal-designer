---
name: data-visualization
description: Chooses and designs charts, stat tiles and dashboards that answer a named question honestly and accessibly, starting from the decision the viewer makes rather than the chart type.
when_to_use: Use when building or reviewing a chart, graph, dashboard, KPI tiles, analytics screen, report visuals, choosing a chart type, chart colors and legends, or when a dashboard feels cluttered or nobody uses it.
---

# Data visualization

This skill covers how numbers are shown. It sits in the Surfaces band.

The governing idea: a chart exists to answer a question faster than a table would. Name the question first; the chart type follows, and sometimes the answer is a table.

**Works with:** `success-metrics` owns which numbers matter · `experimentation-and-analytics` owns whether the numbers mean what they seem · `color-and-theming` owns palettes and contrast computation · `accessibility` owns the requirements · `components-and-states` owns loading and error states.

## Start here

| The situation | Go to |
| --- | --- |
| Choosing a chart type | **Start from the question** below |
| A dashboard nobody uses | **Build a dashboard around decisions** below |
| Chart colors and legends | **Use color for meaning only** below |
| The chart may mislead | **Keep the scale honest** below |
| Making charts accessible | **Give every chart a text answer** below |
| Deciding which metrics to show | `success-metrics` |

## Start from the question

| The question | Use | Avoid |
| --- | --- | --- |
| How does it change over time? | Line chart; bars for a few discrete periods | Pie; stacked areas with many series |
| How do categories compare? | Horizontal bar chart, sorted by value | 3D bars; pies with many slices |
| What is the share of a whole? | Stacked bar, or a donut with 2 to 4 parts | Pie with 6 or more slices |
| How are values spread? | Histogram, dot plot, box plot | An average alone |
| How do two measures relate? | Scatter plot | Dual-axis charts |
| What is the one number that matters? | A stat tile with a comparison: vs last period, vs target | A gauge |
| What is the exact value? | A table | A chart |

## Strip it to the answer

- Label lines and bars directly; use a legend only when direct labels collide.
- Light horizontal gridlines at most. No borders, backgrounds, shadows or 3D.
- Units and time range always visible. Round to the precision a decision needs.
- Sort categories by value unless they have a natural order.
- Use tabular numbers in tiles and tables so digits line up.

## Use color for meaning only

- One highlight color against neutral gray for the series that matters.
- A sequential palette for ordered values, a diverging palette only around a meaningful midpoint, categorical colors for at most 6 to 8 series.
- Never red against green alone. Pair color with labels, position or pattern.
- Chart marks need 3:1 contrast against the background and neighboring marks where telling them apart matters (WCAG 1.4.11). `color-and-theming` computes it.

## Keep the scale honest

- Bar charts start at zero. Line charts may start elsewhere if the axis is clearly labeled.
- Show the full relevant time range, not the flattering slice.
- Show uncertainty where it matters: intervals, sample sizes, "based on 23 responses".
- Label projections, estimates and incomplete periods ("month to date") as such.

## Build a dashboard around decisions

List the decisions the viewer makes and the questions they ask, in priority order. Put the most important top left. Then: a few key numbers with context, supporting charts, detail tables. Every chart answers a named question; a chart nobody can name a question for comes out.

One time range and filter set for the whole dashboard, visible at the top. Show "last updated" and design the loading, empty, partial, stale and error states.

## Give every chart a text answer

Each chart gets a short text summary of what it shows ("Sign-ups rose 12% in March, mostly from mobile"), plus access to the data as a table or download. Interactive tooltips must be reachable by keyboard and announced to screen readers.

## Evidence bar

Every number on a chart comes from a named source and time range. Never invent sample data that could be mistaken for real; label demo data as demo.

A claim that a chart "shows" a cause needs more than the chart. `experimentation-and-analytics` owns that.

## Before you ship

| Symptom | What it means | Fix |
| --- | --- | --- |
| Nobody can say what question a chart answers | It is decoration | Remove it or name its question |
| A legend with eight colors | Readers match colors back and forth | Direct labels; fewer series |
| A bar chart axis starts above zero | Differences look bigger than they are | Start at zero |
| Red and green are the only difference | Color-blind readers lose the meaning | Add labels or patterns |
| No "last updated" | Stale data reads as current | Show the time |
| No text summary | Screen reader users get nothing | Write the one-line answer |

## Reporting

**Severity ladder:** `Critical` the chart misleads about the data · `Serious` the answer is unreachable for some readers · `Moderate` the answer takes effort to find · `Minor` styling.

**Verification:** read each chart's answer aloud from the text summary alone; check contrast of marks; check at phone width.

**Format:** per chart, the question, the form chosen and why, and findings.

**Done when:** every chart names its question, the scale is honest, color is never the only signal, and every chart has a text answer.
