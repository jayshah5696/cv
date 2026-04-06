## 2024-05-18 - Replacing Boilerplate Copy in Nested Components
**Learning:** Complex interactive components (like Drawers, Dialogs, Popovers) imported from UI libraries (such as shadcn/ui or Radix) often come with boilerplate placeholder text (e.g., "Move Goal"). This placeholder text can easily slip into production if not explicitly checked and replaced, leading to a confusing user experience.
**Action:** Always verify the expanded state and nested content of any newly added or existing complex component. Ensure that `Title` and `Description` components within these elements have contextually appropriate and helpful text replacing any library defaults.
## 2024-05-18 - Missing DialogTitle and DialogDescription in Radix UI
**Learning:** Radix UI DialogContent components require explicitly defined DialogTitle and DialogDescription elements to prevent screen reader warnings.
**Action:** Use Tailwind's sr-only class to visually hide them if the design does not require visible text.
