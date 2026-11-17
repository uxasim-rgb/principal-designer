---
name: deceptive-patterns
description: Finds and replaces deceptive design (dark patterns) in sign-up, checkout, consent, subscription and cancellation flows, drawing the line between honest persuasion and manipulation.
when_to_use: Use when reviewing or designing cookie banners, consent, subscriptions, free trials, cancellation, checkout fees, upsells, urgency timers, opt-outs, notification prompts, or when someone asks whether a pattern is a dark pattern, manipulative, or likely to get them in legal trouble.
---

# Deceptive patterns

This skill covers interfaces that push people into choices they would not make with clear information. It sits in the Inclusive band, because the people hurt most are the ones with the least time, attention or confidence.

The governing idea: would the person make the same choice if every option were shown with equal clarity? If not, the design is deciding for them.

**Works with:** `content-design` owns the wording of choices · `forms-and-input` owns consent fields · `success-metrics` owns guardrail metrics that catch harm · `marketing-pages` owns honest persuasion · `ai-and-agents` owns manipulation by AI systems.

## Start here

| The situation | Go to |
| --- | --- |
| Reviewing a flow for dark patterns | **Recognize the common patterns** below |
| Designing consent or a cookie banner | **Make choices equal** below |
| Designing subscriptions and cancellation | **Leaving is as easy as joining** below |
| Someone wants more conversions from a flow | **Persuade honestly** below |
| Legal exposure | **Know the legal direction** below, then a lawyer |

## Recognize the common patterns

| Pattern | Looks like | Fair version |
| --- | --- | --- |
| Confirmshaming | "No thanks, I don't like saving money" | "No thanks" |
| Hard cancellation | Sign up online, cancel by phone | Cancel in the same channel, in about the same steps |
| Drip pricing | Mandatory fees appear at the last step | Total price, with mandatory fees, shown early |
| Sneaking into the basket | Add-ons pre-added | Offered, unselected |
| Pre-ticked consent | Marketing boxes ticked by default | Unticked; consent is an action |
| Silent renewal | A trial becomes paid with no warning | Terms up front, a reminder before the charge |
| Fake urgency | A countdown that resets; invented "3 people viewing" | Only real deadlines and real stock |
| Disguised ads | Ads styled as results | Clearly labeled |
| Nagging | The same prompt after every "no" | Respect the answer |
| Trick wording | Double negatives in opt-outs | Plain positive wording |
| Unequal choices | Bright "Accept all", grey small "Reject" | Equal weight for equal choices |
| Buried settings | Privacy controls spread across screens | Grouped and findable |

## Make choices equal

Options that are equal choices get equal visual weight, equal effort and plain labels. In consent, "Reject all" is as visible and as quick as "Accept all", on the first layer. Defaults are the option a reasonable person would choose for themselves, which for data sharing is the private one.

## Leaving is as easy as joining

Cancellation lives where sign-up lived, takes about as many steps, and ends with a clear confirmation and the date service stops. One retention offer is fine; a maze is not. Before a trial converts or a plan renews, remind people with the date and the amount.

## Persuade honestly

Persuasion is fine: clear value, real social proof, real scarcity, sensible defaults that serve the person, reminders they asked for, and a paid option designed well. The line is deception or coercion. If a tactic only works because people misunderstand it, it is on the wrong side.

## Know the legal direction

Regulators in many places now treat deceptive design as unlawful, especially around consent, subscriptions and cancellation. In the EU, consent must be as easy to withdraw as to give, and platform rules prohibit deceptive interfaces. US regulators have acted against hard cancellation and hidden fees, and some states treat consent obtained through dark patterns as invalid. Rules change, sometimes through court cases, so check the current position for the product's markets.

This is orientation, not legal advice. Flag regulated or high-risk flows for legal review.

## Evidence bar

A finding names the pattern, where it appears, and the fair version. Whether a pattern is unlawful depends on jurisdiction and current law; say "likely to attract regulatory attention" rather than "illegal" unless a lawyer has said so.

Conversion gains from a deceptive pattern are not evidence it is acceptable. Pair conversion metrics with guardrails: refunds, cancellations, complaints, chargebacks. `success-metrics` owns them.

## Before you ship

| Symptom | What it means | Fix |
| --- | --- | --- |
| The decline option shames the person | Confirmshaming | Neutral wording |
| Reject is smaller, greyer or one layer deeper | Unequal choices | Equal weight, same layer |
| A fee appears at the final step | Drip pricing | Show it early |
| Cancel needs a call or a chat | Hard cancellation | Same channel as sign-up |
| A countdown resets on reload | Fake urgency | Real deadlines only |
| A box is ticked that benefits the business | A coerced default | Untick it |
| Conversion rose and refunds rose with it | People were misled | Revisit the change |

## Reporting

**Severity ladder:** `Critical` money taken or data shared without informed choice · `Serious` a choice made hard or misleading · `Moderate` pressure that does not deceive · `Minor` wording.

**Verification:** walk sign-up and cancellation side by side and count steps; compare the visual weight of paired options; reload every timer.

**Format:** each pattern found, where, who it hurts, and the fair version, plus flows that need legal review.

**Done when:** every equal choice looks equal, leaving matches joining, every number and timer is true, and regulated flows are flagged.
