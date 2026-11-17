# CSS recipes for the details the platform leaves to you

The platform handles most behavior. These are the places where it needs one more line to feel finished. Each recipe names the problem a person would notice, the fix, and how far you can rely on it. Thresholds still belong to their owners: `accessibility` owns contrast and target sizes, `motion-and-interaction` owns durations, `typography` owns the scale.

Support notes say "Baseline" when a feature works in all major engines, and name the engine otherwise. Check caniuse or MDN for your audience before relying on anything marked partial. Treat partial features as progressive enhancement: the page must still work without them.

## Text that wraps well

| You notice | Fix | Support |
| --- | --- | --- |
| A heading breaks with one lonely word on the last line | `text-wrap: balance` on headings, card titles and short captions | Baseline. Engines only balance short blocks (Chromium stops at 6 lines), so never use it on paragraphs |
| A paragraph ends with a single short word | `text-wrap: pretty` on body text | Partial. Harmless where unsupported |
| A long word or URL pushes the layout sideways | `overflow-wrap: anywhere` on user content containers | Baseline |
| Numbers in a table or timer shift as they change | `font-variant-numeric: tabular-nums` | Baseline |
| Underlines collide with descenders or look too heavy | `text-underline-offset: 0.15em` and `text-decoration-thickness: from-font` | Baseline |
| iOS zooms the page when a field gets focus | Field text at 16px or larger on touch layouts | iOS Safari behavior, all versions in use |

## Color that holds up

| You notice | Fix | Support |
| --- | --- | --- |
| Steps in a ramp look uneven in lightness | Build ramps in `oklch()`, where the L channel tracks perceived lightness. Hold hue and adjust L and C per step | Baseline |
| Native checkboxes, radios and range inputs ignore the brand | `accent-color: var(--accent)` | Baseline |
| Scrollbars and form controls stay light in dark mode | `color-scheme: light dark` on `:root`, or the single scheme you support | Baseline |
| Vivid brand colors look dull on P3 screens | Declare the sRGB value, then override inside `@media (color-gamut: p3)` | Baseline for the query; output depends on the display |
| A two-hue gradient goes muddy in the middle | Interpolate in a perceptual space: `linear-gradient(in oklch, ...)` | Baseline |
| Borders and focus rings vanish in Windows contrast themes | Keep a `1px solid transparent` border on surfaces that rely on shadows; the system paints it. Test with `@media (forced-colors: active)` | Chromium and Firefox. Safari has no forced colors mode |

## Layout traps

| You notice | Fix | Support |
| --- | --- | --- |
| A flex or grid child with long text overflows its container | `min-width: 0` on the flex child; `minmax(0, 1fr)` instead of `1fr` in grid tracks | Baseline. Default `min-width: auto` is the cause |
| A horizontal scrollbar appears on Windows only | Remove `width: 100vw`. It includes the scrollbar width. Use `100%` | Baseline behavior |
| A mobile panel hides behind the browser toolbar | `100dvh` for the visible area; `100svh` where a stable size matters more | Baseline |
| Anchor links and focused fields land under a sticky header | `scroll-padding-top` on the scroll container equal to the header height. Also helps WCAG 2.4.11, Focus Not Obscured | Baseline |
| Content jumps when a scrollbar appears | `scrollbar-gutter: stable` on the scroll container | Baseline in current engines; check older Safari |
| Notch and home indicator cover content | `env(safe-area-inset-*)` padding. Only non-zero when the viewport meta has `viewport-fit=cover` | Baseline on iOS and Android |
| Scrolling a dialog or drawer scrolls the page behind it | `overscroll-behavior: contain` on the inner scroller | Baseline |
| Nested rounded corners look uneven | Inner radius = outer radius minus the padding between them. Past about 24px of padding, treat them as separate surfaces | Geometry, not a feature |
| A long list renders slowly | `content-visibility: auto` with `contain-intrinsic-size` on off-screen sections | Baseline in current engines |

## Overlays and focus

| You notice | Fix | Support |
| --- | --- | --- |
| A custom modal leaks focus or reads the page behind it | `<dialog>` opened with `showModal()`. It traps focus, makes the rest inert and closes on Escape | Baseline |
| A non-modal panel needs the page behind it frozen | `inert` on the background container | Baseline |
| A menu or tooltip needs to escape `overflow: hidden` | The Popover API (`popover` attribute) puts it in the top layer | Baseline |
| Focus rings appear on mouse click | Style `:focus-visible`, not `:focus` | Baseline |
| After a dialog closes the keyboard user is lost | Return focus to the control that opened it. `<dialog>` does this when closed normally | Baseline for `<dialog>`; custom overlays must do it in code |
| A focus ring is clipped by a parent | `outline-offset` inward (negative) or remove the clipping parent's `overflow` | Baseline |

## Touch and pointer

| You notice | Fix | Support |
| --- | --- | --- |
| Hover styles stick after a tap on phones | Wrap hover rules in `@media (hover: hover) and (pointer: fine)` | Baseline |
| Fast taps on buttons trigger zoom | `touch-action: manipulation` on interactive controls | Baseline |
| A grey flash on tap over a custom pressed state | `-webkit-tap-highlight-color: transparent`, only where you provide your own pressed style | WebKit and Blink |

## Motion that behaves

| You notice | Fix | Support |
| --- | --- | --- |
| A hover or toggle animation jumps when reversed mid-way | Use `transition` for interactive state. Transitions retarget from the current value; keyframe animations restart | Baseline |
| Unexpected properties animate, or animation stutters | Name properties: `transition: opacity 150ms, transform 150ms`. Never `transition: all` | Baseline |
| An element appears without its entry animation | `@starting-style` defines the before-state for entry transitions, including from `display: none` | Baseline 2024 |
| Height cannot animate to `auto` | `interpolate-size: allow-keywords` on `:root` | Chromium only. Fall back to an instant change |
| Everything flashes and animates when switching theme | Add a class that sets `transition: none` on all elements, switch the theme, force a style flush, remove the class on the next frame | Technique, not a feature |
| Reduced motion removes all feedback | Under `prefers-reduced-motion: reduce`, swap movement for an opacity fade. Keep the state change visible | Baseline |

## Loading

| You notice | Fix | Support |
| --- | --- | --- |
| The hero image arrives last | `fetchpriority="high"` on the largest above-the-fold image and never `loading="lazy"` on it | Baseline |
| Images push content down as they load | `width` and `height` attributes, or `aspect-ratio` in CSS | Baseline |
| Text reflows when the web font arrives | `font-display: swap` with a fallback tuned by `size-adjust` and `ascent-override` in an `@font-face` for the fallback | Baseline |

## How to use this file

Fix the cause the table names, then check the result in a browser at 320px, at 200% zoom and in both themes. A recipe applied without looking at the outcome is a guess with good intentions.
