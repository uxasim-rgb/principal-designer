---
name: ai-and-agents
description: Designs AI features, chat and assistants, and agents that take actions, so people know what the system can do, can check and correct it, and stay in charge of anything it changes.
when_to_use: Use when designing or reviewing an AI feature, chatbot, copilot, assistant, generated content, an agent that edits records or sends things, human approval or review of AI output, AI errors and hallucinations, citations, memory and personalization, or deciding whether a feature should use AI at all.
---

# AI and agents

This skill covers interfaces where a model generates content or takes actions. It sits in the Surfaces band.

The governing idea: the model will be wrong some of the time, so design for the wrong case first. A person should always know what the system did, why it thinks so, and how to undo it.

**Works with:** `user-flows` owns the overall flow and its recovery paths · `forms-and-input` owns structured input · `content-design` owns the words · `accessibility` owns streaming announcements and focus · `deceptive-patterns` owns manipulation · `experimentation-and-analytics` owns measuring whether it helps.

## Start here

| The situation | Go to |
| --- | --- |
| Deciding whether to use AI at all | **Earn the AI before designing it** below |
| A chat or assistant surface | **Set expectations where the work happens** and **Design generation as a workflow** below |
| The AI will change records, send messages or spend money | **Separate drafting from doing** below |
| Output is wrong, unsupported or unsafe | **Plan for wrong answers** below |
| The AI remembers things about people | **Make memory visible and erasable** below |
| Measuring whether the feature works | `experimentation-and-analytics`, with **Evidence bar** below |

## Earn the AI before designing it

Write down the task, what happens when the output is wrong, and the non-AI way to do it. Use AI when it saves real effort on a task where mistakes are cheap to spot and fix, or where a person reviews every result. Be wary where mistakes are costly and hard to notice: medical, legal, financial and safety advice, and anything that acts without review.

A good search box, a better default or a template is often the right answer. Say so when it is.

## Set expectations where the work happens

Tell people what the system can and cannot do at the point of use, in the words of the task: "Drafts replies from this thread. It cannot see your other emails." Not a modal of disclaimers at sign-up.

- Mark generated content as generated, and keep the mark when it is copied or saved.
- Show what the output was based on: the files, sources or context used.
- Never show a confidence percentage unless it is calibrated and tested. A model's tone of certainty is not a probability. Prefer showing sources and flagging gaps.

## Design generation as a workflow

A prompt box and an answer is a demo, not a product. Design the whole loop:

| Stage | Needs |
| --- | --- |
| Input | Room for context, attachments, examples; a clear send |
| Generating | Visible progress, partial output as it streams, a Stop that works immediately |
| Output | Editable, with sources linked to the claims they support |
| Revise | Retry, refine with an instruction, compare versions, go back |
| Finish | Copy, insert, export, with the generated mark preserved |

Streaming output must not move the reading position or steal focus. Announce completion to screen readers once, not every token. `accessibility` owns the announcement pattern.

## Separate drafting from doing

When an agent can change things, split the work into two steps a person can see: the draft and the action.

1. **Draft.** The agent proposes changes. Nothing is changed yet.
2. **Review.** Each change shows the current value, the proposed value, and the source it came from. Ambiguous items appear as questions, not guesses. Items the person cannot approve route to someone who can.
3. **Approve.** An explicit action by the person, naming what will happen: "Update 14 supplier records."
4. **Apply.** Progress per item. The job continues if the person leaves the page.
5. **Report.** What changed, what failed, what is still unknown.

Rules that hold across all of it:

- **The agent never has more authority than the person.** Check permission when drafting and again at the moment of each write.
- **Side effects outside the product are separate steps.** Sending an email, notifying a supplier or charging a card gets its own preview and its own confirmation, and says plainly that it cannot be unsent.
- **The audit trail records the agent as drafter and the person as approver**, in separate fields, with the time of each.
- **Stopping is defined.** The item in progress finishes or rolls back as a unit; the screen says which items already took effect and offers to keep them, undo them, or continue.
- **A timeout is unknown, not failed.** Check the record before offering a retry, and make retries safe to repeat so nothing applies twice.
- **Records that changed since the draft are not overwritten.** Flag the conflict and ask.

## Plan for wrong answers

List the ways output can be wrong for this task: invented facts, a source that does not support the claim, an outdated answer, overreach beyond the request, unsafe advice, a tool error, partial completion. For each, design how the person notices and recovers.

- Give a fast way to report a bad answer, and act on it visibly.
- Offer a human or non-AI route when the stakes are high or the AI has failed twice.
- Refusals say what the system cannot do and what the person can do instead.

## Make memory visible and erasable

If the system remembers preferences or facts about a person, show what it remembers, let them correct or delete any item, and let them turn memory off. Say when memory is used: "Using your saved tone preference." Never carry memory into contexts the person would not expect, such as a shared workspace.

## Evidence bar

Fluency is not quality. Judge AI features on representative tasks with real inputs: how often the output is correct, how often people catch the wrong ones, how long correction takes, and whether people rely on it more than its accuracy deserves.

Test with the people who will use it, including people using assistive technology and people outside the majority group, because model errors are rarely spread evenly.

Re-check after every model or prompt change. A feature that worked on last month's model has not been shown to work on this one.

## Before you ship

| Symptom | What it means | Fix |
| --- | --- | --- |
| "AI can make mistakes" is the only error design | The wrong case is not designed | List failure types and design recovery for each |
| A confidence percentage on output | False precision | Show sources and gaps instead |
| The agent writes records as soon as it is asked | No review step | Draft, review, approve, apply |
| One "actor" field in the audit log | Who approved is lost | Separate drafter and approver fields |
| Notifications go out with the record change | An irreversible side effect hidden in a batch | Separate previewable step |
| Cancel stops with no summary | People cannot tell what changed | Say what took effect and offer choices |
| Timeouts shown as failures | People retry and duplicate the action | Show unknown; check before retry |
| Streaming text moves the page | Reading position lost | Hold position; announce once at the end |
| Memory cannot be seen | People cannot correct it | Show, edit, delete, turn off |

## Reporting

**Severity ladder:** `Critical` an action can happen without the person's approval, or cannot be undone or traced · `Serious` wrong output is hard to notice or correct · `Moderate` expectations or sources are unclear · `Minor` wording and polish.

**Verification:** walk the draft, approve, apply, stop and failure paths with realistic data, including a timeout and a conflict.

**Format:** the AI-fit judgment, the authority model (who can do what, when), the flow with its states, the failure and recovery table, and what must be evaluated with real tasks.

**Done when:** every action has a visible draft and an explicit approval, every failure type has a recovery, side effects are separate, and the audit trail shows who decided.
