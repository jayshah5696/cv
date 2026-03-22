## 2024-05-24 - Missing ARIA Labels in Icon-Only Buttons
**Learning:** The pattern of using `Button asChild` wrappers for icon-only `<a>` tags in this app often results in missing `aria-label` attributes on the actual interactive elements, making them inaccessible to screen readers.
**Action:** When adding or reviewing icon-only links or buttons, always ensure they have descriptive `aria-label` attributes to explicitly state their destination or action.

## 2024-05-25 - Interactive Alternative for Keyboard Shortcuts
**Learning:** Displaying a keyboard shortcut (like "Press ⌘J") as purely visual text is not accessible or usable for touch-screen devices (e.g., mobile phones, tablets) or users without physical keyboards.
**Action:** When adding global keyboard shortcut hints to the UI, wrap them in interactive elements like `<button>` with appropriate `onClick` handlers and `aria-label` attributes to ensure they can be activated via touch/click by all users.
