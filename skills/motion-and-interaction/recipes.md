# Motion recipes

Starting values for the motion most interfaces need. They are house defaults, tuned to feel quick and calm, not values from a standard. Where the project has motion tokens, use those and read these as a check. Durations follow the principle **Duration by distance and size**; this file turns that into recipes.

Two named curves cover almost everything:

| Token | Value | Use |
| --- | --- | --- |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entrances, responses to input, anything appearing |
| `--ease-in` | `cubic-bezier(0.55, 0, 1, 0.45)` | Exits |

For springs, use no bounce for interface chrome (`bounce: 0`, about 0.3s). Keep overshoot for playful products and direct manipulation, such as a card released after a drag.

## Press feedback

| Property | Value |
| --- | --- |
| Scale | 0.97 on press (0.95 for small icon buttons, 0.98 for large cards) |
| Duration | 100ms with `--ease-out`, back to 1 on release |
| Disabled controls | No press scale. Movement on a control that does nothing reads as broken |

Apply it with `:active` and a transition on `transform` only.

## Hover

Background or opacity change only, 100ms. Nothing moves on hover in dense interfaces such as tables, lists and toolbars, because the cursor crosses many items and motion becomes noise. Wrap hover rules in `@media (hover: hover) and (pointer: fine)`.

High-frequency actions (typing, switching tabs, moving through a list with arrow keys) get no animation at all. Speed is the feedback.

## Enter and exit

| | Enter | Exit |
| --- | --- | --- |
| Opacity | 0 to 1 | 1 to 0 |
| Movement | 8px toward its resting place | none, or 4px away |
| Scale (dialogs, popovers) | 0.96 to 1 from the trigger's side | none |
| Duration | 200ms small, 250ms medium | 150ms |
| Curve | `--ease-out` | `--ease-in` |

Popovers and menus grow from the edge nearest their trigger (`transform-origin` on that side). A dialog grows from the center.

Use `@starting-style` for the before-state of entries in CSS, and transitions rather than keyframes so a dismissal mid-entrance reverses from where it is.

## Lists that appear

Stagger only the first screenful. 30 to 40ms between items, and a cap so the last item starts within 200ms. Items below the fold appear without delay. A list that takes a second to finish arriving makes the person wait to read it.

## Swapping an icon or label

Cross-fade the outgoing and incoming element in place, 150ms: the old one to opacity 0 and scale 0.8, the new one from opacity 0 and scale 0.8 to 1. Keep the container size fixed so nothing around it shifts. Common uses: copy to copied, play to pause, a loading spinner inside a button.

## Expanding and collapsing

Animate a wrapper with `display: grid` from `grid-template-rows: 0fr` to `1fr`, with the content inside set to `min-height: 0` and `overflow: hidden`. Works in every current engine. `interpolate-size: allow-keywords` lets `height: auto` animate directly in Chromium; treat it as an enhancement. 200 to 250ms with `--ease-out`.

## Notices and toasts

Enter from the edge they sit on, 200ms. Stay at least 5 seconds, longer for longer text, and pause the timer while hovered or focused. Anything the person must act on does not auto-dismiss. WCAG 2.2.1 requires that time limits can be turned off, adjusted or extended.

## Loading

| Wait | Show |
| --- | --- |
| Under about 300ms | Nothing. A flash of spinner is worse than a short pause |
| 300ms to a few seconds | A spinner or skeleton, shown after the 300ms delay |
| Longer, with known progress | A determinate progress bar |

Skeleton shimmer runs about 1.5s per sweep, linear, and stops under reduced motion. `components-and-states` owns which loading pattern fits.

## Numbers that change

Values that update often (prices, counters, timers) change in place with `tabular-nums`, no rolling digits. Save animated counting for a one-time reveal, and never on a value someone is trying to read.

## Theme changes

Switching light and dark should not animate every color on the page. Disable transitions for one frame while the theme switches. `design-engineering` has the recipe.

## Reduced motion

Under `prefers-reduced-motion: reduce`, replace movement and scale with an opacity change of the same or shorter duration. Keep the state change visible. Turning off all feedback is not the reduced version; it is a broken one. `accessibility` owns the requirement.
