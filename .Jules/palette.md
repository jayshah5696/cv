## 2024-05-24 - Missing ARIA Labels in Icon-Only Buttons
**Learning:** The pattern of using `Button asChild` wrappers for icon-only `<a>` tags in this app often results in missing `aria-label` attributes on the actual interactive elements, making them inaccessible to screen readers.
**Action:** When adding or reviewing icon-only links or buttons, always ensure they have descriptive `aria-label` attributes to explicitly state their destination or action.

## 2024-05-25 - Unclickable Keyboard Shortcut Hints
**Learning:** Global keyboard shortcut hints (like "Press ⌘J to open the command menu") rendered as plain text (`<p>`) are inaccessible and unusable on touch devices without physical keyboards, and cannot be reached via standard keyboard navigation.
**Action:** Always wrap keyboard shortcut hints in interactive elements like `<button>` with appropriate `onClick` handlers, `aria-label`, and hover/focus styles to ensure they are fully interactive across all device types and accessible to screen readers.

## 2024-05-26 - Missing Accessible Names in Radix UI Dialog Wrappers
**Learning:** Complex components like Radix UI Dialogs (often used as wrappers for things like CmdK `CommandDialog`) require explicit accessible titles and descriptions to be compliant for screen readers. Failure to provide them logs runtime a11y warnings, as they are not intrinsically identifiable without boilerplate text nodes.
**Action:** Always provide hidden `<DialogTitle>` and `<DialogDescription>` tags with the `sr-only` Tailwind class inside `<DialogContent>` if the UI design does not call for visible titles or descriptions.
