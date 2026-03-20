## 2024-05-24 - Missing ARIA Labels in Icon-Only Buttons
**Learning:** The pattern of using `Button asChild` wrappers for icon-only `<a>` tags in this app often results in missing `aria-label` attributes on the actual interactive elements, making them inaccessible to screen readers.
**Action:** When adding or reviewing icon-only links or buttons, always ensure they have descriptive `aria-label` attributes to explicitly state their destination or action.

## 2026-03-20 - Interactive Shortcut Hints
**Learning:** Keyboard shortcut hints displayed as static text (e.g., "Press ⌘J") exclude mobile and touch-screen users from accessing the features those shortcuts enable, making the app less accessible.
**Action:** Always wrap global keyboard shortcut hints in interactive elements (like `<button>`) with an `onClick` handler, proper `aria-label`, and focus-visible styles to ensure touch-screen accessibility on mobile devices.
