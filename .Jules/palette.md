## 2024-05-24 - Missing ARIA Labels in Icon-Only Buttons
**Learning:** The pattern of using `Button asChild` wrappers for icon-only `<a>` tags in this app often results in missing `aria-label` attributes on the actual interactive elements, making them inaccessible to screen readers.
**Action:** When adding or reviewing icon-only links or buttons, always ensure they have descriptive `aria-label` attributes to explicitly state their destination or action.

## 2024-05-25 - Interactive Keyboard Shortcut Hints
**Learning:** Global keyboard shortcut hints (like "Press ⌘J") are often implemented as non-interactive text elements (e.g., `<p>`). This renders them completely inaccessible and non-functional for touch-screen mobile users who cannot trigger keyboard events.
**Action:** When designing global keyboard shortcut hints, always wrap them in interactive elements like `<button>` with an `onClick` handler and appropriate ARIA attributes. This ensures touch-screen accessibility on mobile devices, providing a fallback mechanism to trigger the intended action.
