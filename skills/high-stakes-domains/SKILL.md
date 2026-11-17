---
name: high-stakes-domains
description: Sets the boundaries for design work in regulated or safety-critical domains (medical, finance, aviation, vehicles, industrial control, legal, children, identity) so the output is a useful concept with the right questions and named specialist review, never a claim of safety or compliance.
when_to_use: Use when the product is a medical device or clinical tool, banking, payments, trading or lending, insurance, aviation, a vehicle or driver interface, an industrial or alarm system, legal services, a product for children, identity verification, or any domain with regulators, safety standards or serious harm if a person misreads the screen.
---

# High-stakes domains

This skill sets how far design work can go when a misread screen can hurt someone or break a law. It sits in the Inclusive band, because the people at risk are the ones the interface fails.

The governing idea: do the design, and be honest about what it is. A good concept with the right open questions moves a regulated project forward; a confident screen that looks validated can get someone hurt.

**Works with:** `research-planning` owns studies with the domain's users · `user-flows` owns critical paths and recovery · `accessibility` owns the requirements · `deceptive-patterns` owns manipulation in finance and consumer flows · `ai-and-agents` owns AI in these domains.

## Start here

| The situation | Go to |
| --- | --- |
| Starting work in a regulated or safety domain | **Find the domain's pack** and **Ask before you draw** below |
| Asked for a screen in a safety-critical product | **Produce the concept, label it as one** below |
| Alarms, warnings or critical numbers | **Critical information survives every condition** below |
| Money moving, balances, trading | **Money states are never ambiguous** below |
| Reviewing an existing product in the domain | `full-review`, with the boundaries below |

## Find the domain's pack

[domain-packs.md](domain-packs.md) lists 58 industries and niches with what each one's design must account for. Search it for the product's domain and read that row first. Then find the real sources: the regulator, the standard, the organization's own procedures and the specialists who own them.

## Ask before you draw

These questions decide most of the design, and in these domains guessing them is the expensive mistake:

- **Who exactly uses it**, with what training, under what stress, fatigue or time pressure?
- **Where is it used**: lighting, noise, gloves, distance, interruptions, shared screens?
- **What are the critical tasks**, the ones where an error causes harm?
- **What can go wrong** with each, and how would the person notice?
- **What rules apply** in the markets it ships to, and who in the organization owns them?
- **Who must review the design** before it is used: human factors, clinical, legal, compliance, safety?

Ask the ones you cannot answer. Where you must proceed, state each as an assumption the design depends on.

## Produce the concept, label it as one

Refusing to help is not the safe choice; it pushes the work to someone with less care. Do the design, and on every deliverable:

- Say it is a concept, not validated for safety, regulatory or clinical use.
- Name the specialist review it needs by role (a human factors engineer, a clinician, a compliance officer), not only the standard.
- List the questions above that remain open.
- Never write "compliant", "safe", "approved" or "meets [standard]" unless the person showed you the evidence.

## Critical information survives every condition

- Priority is shown by more than color: text, shape, position, sound pattern and, where available, haptics.
- Critical values are never truncated, abbreviated ambiguously or hidden behind a tap.
- The most urgent item is always visible; lower priorities cannot cover it.
- Units are always shown, and similar-looking values (mg and mcg, 1.0 and 10) are designed apart.
- Acknowledging an alarm is different from resolving it, and the screen says which happened.

## Money states are never ambiguous

- Available, pending and on-hold amounts are labeled separately.
- Every transfer shows the amount, the fees, the recipient and when it arrives before confirmation, and whether it can be reversed only if the service says so.
- A timeout on a payment is "checking", not "failed". Retrying must not pay twice.
- Never name real banks, regulators or partners in a design unless the person said they are partners.

## Evidence bar

In these domains the evidence bar is set by someone else: the regulator, the standard, the qualified reviewer. Your work supplies a concept and the questions; their review supplies the validation. Say which is which on every deliverable.

Do not cite a standard's requirements from memory. If you have not read the clause, name the standard and say it must be checked.

## Before you ship

| Symptom | What it means | Fix |
| --- | --- | --- |
| The deliverable says "compliant" or "safe" | An unearned claim | Remove it; label it a concept |
| A standard is named but no reviewer | Review will be skipped | Name the specialist role |
| Alarm priority shown by color alone | Fails in glare, color blindness, distance | Add text, shape, sound, position |
| A critical number truncates at large text | It can be misread | Never truncate critical values |
| A payment timeout says "failed" | People pay twice | Show checking; make retries safe |
| A real bank or regulator appears in a mockup | A claim of partnership | Generic placeholder |
| No open questions are listed | Assumptions are hidden | List them |

## Reporting

**Format:** the concept, the assumptions it rests on, the open questions, the specialist reviews it needs by role, and the sources that must be checked.

**Done when:** the work is useful as a concept, labeled as one, every assumption is visible, and the right people are named to validate it.
