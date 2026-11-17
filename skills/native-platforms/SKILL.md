---
name: native-platforms
description: Designs and builds for iOS, iPadOS, Android and cross-platform apps (SwiftUI, Jetpack Compose, React Native, Flutter) so they follow each platform's navigation, controls, text scaling and accessibility services instead of porting web habits.
when_to_use: Use when designing or reviewing an iPhone, iPad or Android app, SwiftUI or Jetpack Compose code, React Native or Flutter screens, Dynamic Type or font scaling, VoiceOver or TalkBack, safe areas, edge-to-edge, back gestures, Liquid Glass or Material 3, or deciding how a web design should change for a native app.
---

# Native platforms

This skill covers interfaces that run as apps on Apple and Android devices. It sits in the Surfaces band.

The governing idea: people know their platform better than they know your app. Use the system's controls, navigation and settings, and the app inherits years of behavior people already trust; fight them, and every gesture feels slightly wrong.

**Works with:** `accessibility` owns the requirements, which apply on native too · `layout-and-composition` owns adaptive structure · `motion-and-interaction` owns motion · `design-engineering` owns the web · `global-and-inclusive` owns RTL and locale behavior.

## Start here

| The situation | Go to |
| --- | --- |
| Turning a web design into an app | **Do not port web patterns** below |
| An iPhone or iPad app | **Apple platforms** below |
| An Android app | **Android** below |
| React Native or Flutter | **Cross-platform frameworks** below |
| Text that breaks at large sizes | **Text scales, so layouts must** below |
| Screen reader labels and focus | **Label for the screen reader the platform ships** below |
| What changed recently (Liquid Glass, Material 3 Expressive, edge-to-edge) | [updates.md](updates.md) |

## Do not port web patterns

| Web habit | On native |
| --- | --- |
| Hamburger menu for main sections | A tab bar (iOS) or navigation bar (Android) with 3 to 5 destinations |
| A custom back button in the corner | The system back: swipe from the edge on iOS, the back gesture or button on Android. Never block it without a reason the person sees |
| Hover states | None. Pressed states and haptics carry feedback |
| Custom dropdowns and date pickers | The system pickers, menus and sheets |
| Modals for everything | Sheets on iOS (with detents for partial height), bottom sheets or full-screen dialogs on Android |
| Pixel sizes | Points (iOS) and density-independent pixels, `dp` and `sp` (Android) |

## Apple platforms

- **Targets:** at least 44 by 44 points for anything tappable.
- **Navigation:** a tab bar for top-level sections, a navigation stack within them, sheets for focused tasks. Large titles on top-level screens.
- **Safe areas:** keep content inside the safe area; let backgrounds extend under the status bar and home indicator.
- **Controls:** prefer system controls in SwiftUI or UIKit. They adopt the current material and the person's appearance settings automatically. Custom translucent effects belong on the navigation layer, never under body text.
- **Settings to test:** Dynamic Type up to the largest accessibility size, Bold Text, Reduce Transparency, Increase Contrast, Reduce Motion, Dark Mode, and Smart Invert.
- **Haptics:** use the system feedback generators (selection, impact, notification) for confirmation, not decoration.

## Android

- **Targets:** at least 48 by 48 dp. Material components enforce this; custom ones must too.
- **Navigation:** a navigation bar for 3 to 5 top-level destinations, a navigation rail or drawer on large screens, the top app bar for context and actions.
- **Edge to edge:** apps targeting Android 15 or later draw behind the system bars by default. Handle insets so nothing sits under the status bar, navigation bar or display cutout.
- **Back:** support the predictive back gesture (`android:enableOnBackInvokedCallback="true"`) so people can preview where back goes.
- **Large screens:** plan for resizable windows, foldables and tablets. Use window size classes, not device names.
- **Settings to test:** font size and display size at maximum (font scaling goes to 200% on recent versions), dark theme, remove animations, high contrast text, and TalkBack.

## Text scales, so layouts must

Use the platform's text styles (`.body`, `.headline` in SwiftUI; Material type roles with `sp` in Compose), never fixed sizes. At the largest sizes, change the layout rather than shrinking text: rows that sit side by side stack vertically, icons move above labels, and truncation becomes wrapping. Never cap scaling to protect a layout; fix the layout.

In SwiftUI, `dynamicTypeSize.isAccessibilitySize` is the switch for an alternative layout. In Compose, read the font scale from `LocalDensity` and test with the font scale preview.

## Label for the screen reader the platform ships

| Need | SwiftUI | Jetpack Compose |
| --- | --- | --- |
| Name an icon-only control | `.accessibilityLabel("Delete")` | `contentDescription = "Delete"` |
| Read a group as one item | `.accessibilityElement(children: .combine)` | `Modifier.semantics(mergeDescendants = true) {}` |
| Mark a heading | `.accessibilityAddTraits(.isHeader)` | `Modifier.semantics { heading() }` |
| Describe what a tap does | `.accessibilityHint(...)` used sparingly | `Modifier.clickable(onClickLabel = "Open order")` |
| Custom actions on a row | `.accessibilityAction(named:)` | `customActions` in `semantics` |

Test with VoiceOver and TalkBack on a real device. Swipe through every screen in order and complete the main task without looking.

## Cross-platform frameworks

- **React Native:** set `accessibilityLabel` and `accessibilityRole` on custom pressables; keep `allowFontScaling` on (it is the default); use `hitSlop` to reach the target size without changing the visual; use platform-specific components where conventions differ (date pickers, action sheets).
- **Flutter:** wrap custom widgets in `Semantics`; respect `MediaQuery.textScalerOf(context)` rather than clamping it; Material tap targets are padded to 48 by default, so keep that on; choose Cupertino or Material widgets per platform where the difference matters.

One codebase does not mean one design. Navigation, back behavior, pickers and sheets should follow each platform even when the screens share code.

## Evidence bar

Platform guidelines change every year. Before stating a platform rule as current, check the Human Interface Guidelines or the Material and Android developer documentation for the version the app targets, and say which version you checked.

Native accessibility claims need a device: a simulator or emulator shows layout at large text, but screen reader behavior and haptics are checked on hardware.

## Before you ship

| Symptom | What it means | Fix |
| --- | --- | --- |
| A hamburger menu on a phone app | A web pattern ported over | Tab bar or navigation bar |
| The swipe back gesture does nothing | Navigation fights the system | Use the system navigation stack |
| Text sizes are fixed numbers | Large text settings are ignored | Platform text styles |
| Rows clip at the largest text size | The layout cannot adapt | Stack vertically at accessibility sizes |
| Content sits under the status or navigation bar | Insets not handled | Apply window insets |
| An icon button reads as "button" | No label | Add the accessibility label |
| A custom picker replaces the system one | Familiar behavior lost | Use the system picker |
| Translucent material behind body text | Legibility depends on what scrolls beneath | Solid surfaces for content |

## Reporting

**Severity ladder:** `Critical` a task cannot be done with the screen reader or at large text · `Serious` platform navigation or back behavior is broken · `Moderate` a web pattern or custom control where a system one exists · `Minor` visual drift from platform conventions.

**Verification:** run the main task at the largest text size, with the platform screen reader, in dark mode and with reduced motion, on at least one real device per platform.

**Format:** findings per platform, each naming the platform rule, the version checked, and the fix in the app's framework.

**Done when:** each platform uses its own navigation, controls and text styles, every control is labeled, layouts adapt at the largest text size, and the platform version checked is stated.
