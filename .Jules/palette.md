## 2024-05-24 - Missing ARIA Labels in Icon-Only Buttons
**Learning:** The pattern of using `Button asChild` wrappers for icon-only `<a>` tags in this app often results in missing `aria-label` attributes on the actual interactive elements, making them inaccessible to screen readers.
**Action:** When adding or reviewing icon-only links or buttons, always ensure they have descriptive `aria-label` attributes to explicitly state their destination or action.
