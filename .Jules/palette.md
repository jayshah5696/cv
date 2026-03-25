## 2024-05-24 - Missing ARIA Labels in Icon-Only Buttons
**Learning:** The pattern of using `Button asChild` wrappers for icon-only `<a>` tags in this app often results in missing `aria-label` attributes on the actual interactive elements, making them inaccessible to screen readers.
**Action:** When adding or reviewing icon-only links or buttons, always ensure they have descriptive `aria-label` attributes to explicitly state their destination or action.

## 2024-05-25 - Global Keyboard Shortcuts Must Be Touch-Accessible
**Learning:** Global keyboard shortcut hints (like "Press ⌘J") are useless on mobile devices and touchscreens. If they are rendered as static text (`<p>`), touch users have no way to access the functionality if no other UI element triggers it.
**Action:** Always wrap global keyboard shortcut hints in interactive elements like `<button>` with `onClick` handlers and appropriate ARIA attributes. This ensures the functionality is accessible to touch-screen users while still indicating the shortcut for keyboard users.
