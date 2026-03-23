## 2024-05-24 - Missing ARIA Labels in Icon-Only Buttons
**Learning:** The pattern of using `Button asChild` wrappers for icon-only `<a>` tags in this app often results in missing `aria-label` attributes on the actual interactive elements, making them inaccessible to screen readers.
**Action:** When adding or reviewing icon-only links or buttons, always ensure they have descriptive `aria-label` attributes to explicitly state their destination or action.

## 2026-03-23 - Interactive Global Keyboard Shortcut Hints for Touch Devices
**Learning:** Global keyboard shortcuts (like "Press ⌘J") displayed as plain text at the bottom of the screen provide no way for mobile or touch-device users to trigger the action, rendering the feature inaccessible on those devices.
**Action:** When displaying global keyboard shortcut hints, always wrap them in interactive elements (like a `<button>`) with an `onClick` handler and appropriate ARIA attributes. This ensures touch-screen accessibility and makes the feature usable across all devices.
