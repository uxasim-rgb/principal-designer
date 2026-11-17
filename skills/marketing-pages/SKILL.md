---
name: marketing-pages
description: Plans, writes and builds landing pages and marketing sites that answer a visitor's questions in the order they arrive, prove claims with the real product, and avoid the generic AI look.
when_to_use: Use when building or reviewing a landing page, homepage, product or pricing page, marketing site, hero section, signup or waitlist page, or when a page converts poorly, looks generic, or someone asks how to make a page look less like a template.
---

# Marketing pages

This skill covers pages whose job is to explain a product and earn the next step. It sits in the Surfaces band.

The governing idea: a visitor decides in seconds whether this is for them. Say plainly what it is, show it working, and prove every claim, because clever and vague loses to clear and specific.

**Works with:** `content-design` owns voice and microcopy · `typography`, `layout-and-composition` and `color-and-theming` own the craft · `experimentation-and-analytics` owns measuring conversion · `deceptive-patterns` owns the line between persuasion and manipulation · `case-studies` owns portfolio pages.

## Start here

| The situation | Go to |
| --- | --- |
| Planning a new page | **Answer the visitor's questions in order** below |
| Writing the hero | **Make the headline literal** below |
| The page looks like every other startup | **Remove the template look** below |
| No customers, logos or numbers yet | **Prove with what is real** below |
| The page converts poorly | **One goal per page** below, then `experimentation-and-analytics` |
| A portfolio or case study page | `case-studies` |

## Answer the visitor's questions in order

1. **What is this?** What it does, for whom.
2. **Is it for me?** Audience cues in the subhead, examples and imagery.
3. **Does it work?** The real product: a screenshot, a short loop, a live demo.
4. **Why this over what I do now?** The difference against the real alternative, often a spreadsheet, an agency or doing nothing.
5. **Can I trust it?** Real customers, security facts, a person behind it.
6. **What does it cost, and what happens next?** Price or how to get it, and what the first step involves.

Build only the sections these questions need, in this order. Do not add a section because templates have one.

## Make the headline literal

The headline says what the product does, for whom, in 4 to 10 words, using concrete nouns and verbs. "Bookkeeping for freelancers who hate bookkeeping" beats "Your financial co-pilot". Save metaphor and wit for the subhead or later sections, where they no longer carry the explanation.

One primary call to action with a specific label ("Start free trial", "Book a demo"), visible without scrolling on a phone, repeated after major sections rather than replaced with different ones.

## Prove with what is real

Only real logos, testimonials, ratings, user counts and results. A testimonial is stronger with a name, role and a specific outcome. A number needs a basis and a date.

When the product has none of these yet, leave the section out or put in a clearly marked placeholder for the team to fill. Do not name real banks, partners, regulators or customers as integrations or users unless the person told you they are. A mockup with real names reads as a claim once it ships.

## Remove the template look

These are the marks of a page generated rather than designed. Remove them unless the brand truly calls for one:

- Purple-to-blue gradients, glowing blobs and glass panels behind content
- Three equal feature boxes with an icon each
- Everything centered, everything in a card, cards inside cards
- Stock 3D illustrations and floating tilted devices instead of the product
- "Unlock", "supercharge", "seamless", "effortless", "revolutionize", "next-level"
- Triplets like "Fast. Simple. Secure."
- Invented dashboards full of random charts

Instead: flat surfaces from a deliberate palette with one accent, a distinctive display typeface over a quiet text face, real screenshots, left-aligned body text, and one signature element repeated with discipline.

## One goal per page

One conversion goal. Remove navigation from paid-traffic landing pages if the goal is a single action. Ask only for the form fields needed now. Show pricing if you can, with plan differences that scan.

Speed is part of conversion: compress images, never autoplay heavy video on mobile, and check Core Web Vitals (`design-engineering`).

## Basics that are easy to miss

One `h1` and a logical heading order. A descriptive title around 50 to 60 characters and a meta description around 150 to 160. A 1200 by 630 sharing image. Text as HTML, never inside images. Real alt text.

## Evidence bar

Every claim on the page is true and supportable today. Placeholders are marked so they cannot ship by accident.

"The page is better" needs a conversion event defined before launch and compared against a baseline. More clicks on a button is not proof; check that more people complete what the click leads to.

## Before you ship

| Symptom | What it means | Fix |
| --- | --- | --- |
| The headline only makes sense after the subhead | A slogan is doing the explaining | Make the headline literal |
| A logo strip of companies that are not customers | A false claim | Remove, or mark as placeholder |
| "Trusted by 10,000 teams" with no source | An unsupported number | Source it or cut it |
| No screenshot of the actual product | Visitors cannot tell what it is | Show the product |
| Three icon boxes of generic benefits | Template filler | Specific benefits shown in the product |
| Gradient hero and glass cards | The generic AI look | Flat, deliberate palette |
| Different calls to action in every section | Split attention | One goal, repeated |

## Reporting

**Severity ladder:** `Critical` a false or unsupported claim · `Serious` a visitor cannot tell what it is or how to start · `Moderate` generic or template signals that cost trust · `Minor` polish.

**Verification:** read the hero alone and say what the product is; check the page at phone width without scrolling; list every claim and its source.

**Format:** the visitor's questions with where the page answers each, findings, and placeholders that need real content.

**Done when:** the headline is literal, every claim is real or marked, the product is shown, and the page has one goal.
