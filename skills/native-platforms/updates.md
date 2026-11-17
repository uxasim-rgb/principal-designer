# Platform updates (2025 to 2026)

Snapshot checked 16 November 2026. These change often: before citing a date or requirement, check the official source. Items marked "press coverage" were not confirmed against the primary source.

## Apple platforms

- **Liquid Glass (2025).** At WWDC in June 2025 Apple introduced Liquid Glass, a translucent, refractive material for controls, toolbars, tab bars and navigation, across iOS, iPadOS, macOS, watchOS and tvOS, with version numbers aligned to the year (iOS 26 and so on). Standard SwiftUI and UIKit controls adopt it automatically when built with the current SDK.
- **iOS 27 / macOS 27 (WWDC June 2026, press coverage).** Apple refined Liquid Glass after readability complaints: a user setting (slider) controls how strong the effect looks across iOS, iPadOS and macOS. On macOS 27, sidebars extend to the window edge, sidebar icons regain color, and a uniform toolbar returns. Menu item image guidance in the HIG was updated.
- **Design implications:** prefer system controls so they pick up the material and the user's setting. Do not rely on translucency for legibility; test content under controls at every transparency level and with Reduce Transparency and Increase Contrast on. Keep custom glass effects for the navigation layer, not content.
- **Source:** developer.apple.com/design/human-interface-guidelines and the WWDC session pages for the current year.

## Android and Material

- **Material 3 Expressive (2025).** Google extended Material 3 with a more expressive set: spring-based motion, a larger shape library with shape morphing, emphasized type styles, and components such as button groups, split buttons, FAB menus, toolbars and a new loading indicator. It shipped with Android 16 updates in late 2025. Verify current component status at m3.material.io before specifying.
- **Edge-to-edge and adaptive layouts:** recent Android versions enforce edge-to-edge drawing for apps targeting new SDKs and push large-screen adaptivity (resizable windows, ignoring orientation locks on large screens). Plan insets and multi-pane layouts. Verify against developer.android.com for the target SDK.

## Keeping this file current

When you learn of a newer change, add it with the date, source and whether it was confirmed against the primary source. Remove entries once they are just "how things are" and move that knowledge into the main reference files.
