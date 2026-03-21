## 2024-05-24 - Missing ARIA Labels in Icon-Only Buttons
**Learning:** The pattern of using `Button asChild` wrappers for icon-only `<a>` tags in this app often results in missing `aria-label` attributes on the actual interactive elements, making them inaccessible to screen readers.
**Action:** When adding or reviewing icon-only links or buttons, always ensure they have descriptive `aria-label` attributes to explicitly state their destination or action.

## 2024-10-24 - Interactive Keyboard Shortcut Hints
**Learning:** Found a pattern where global keyboard shortcuts (like ⌘J) were displayed as static text `<p>` elements. This creates a frustrating experience for mobile/touch users who see the hint but cannot interact with it.
**Action:** When displaying global keyboard shortcuts, wrap the hint in an interactive `<button>` with an `onClick` handler and appropriate ARIA attributes to ensure touch-screen accessibility and discoverability.
