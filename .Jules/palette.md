## 2024-05-24 - Missing ARIA Labels in Icon-Only Buttons
**Learning:** The pattern of using `Button asChild` wrappers for icon-only `<a>` tags in this app often results in missing `aria-label` attributes on the actual interactive elements, making them inaccessible to screen readers.
**Action:** When adding or reviewing icon-only links or buttons, always ensure they have descriptive `aria-label` attributes to explicitly state their destination or action.

## 2024-05-25 - Unclickable Keyboard Shortcut Hints
**Learning:** Global keyboard shortcut hints (like "Press ⌘J to open the command menu") rendered as plain text (`<p>`) are inaccessible and unusable on touch devices without physical keyboards, and cannot be reached via standard keyboard navigation.
**Action:** Always wrap keyboard shortcut hints in interactive elements like `<button>` with appropriate `onClick` handlers, `aria-label`, and hover/focus styles to ensure they are fully interactive across all device types and accessible to screen readers.

## 2024-05-26 - Missing Accessible Names in Dialog and Drawer Components
**Learning:** Radix UI DialogContent and similar components (like DrawerContent used from shadcn) require explicitly defined DialogTitle and DialogDescription elements to prevent screen reader warnings. If these aren't required visually by the design, they should still be included and hidden using `className="sr-only"`. Also, default boilerplate from copy/pasting components like Drawers (e.g., "Move Goal", "Set your daily activity goal") often gets left in and read by screen readers.
**Action:** When adding or modifying Dialog, Drawer, Popover, or similar complex interactive components, always ensure they contain meaningful `Title` and `Description` components for screen readers, hiding them with `.sr-only` if necessary, and meticulously verify that no boilerplate text remains.
