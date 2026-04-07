## 2024-04-07 - Radix UI Dialog Accessibility in Command Menus
**Learning:** Shadcn UI Command components based on Radix UI's Dialog primitive cause screen reader warnings and poor accessibility if `DialogTitle` and `DialogDescription` are omitted from `DialogContent`.
**Action:** When implementing or modifying Radix UI Dialogs or wrappers (like CommandDialog), always explicitly provide `<DialogTitle>` and `<DialogDescription>`, applying `className="sr-only"` to hide them visually if they are not meant to be visible in the design.
