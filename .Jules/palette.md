## 2024-05-14 - Interactive Keyboard Shortcut Hints
**Learning:** Keyboard shortcut hints displayed as static text (like 'Press ⌘J') act as frustrating touch-screen dead ends on mobile devices or for users unfamiliar with the shortcuts.
**Action:** Always wrap global keyboard shortcut hints in interactive elements (like a `<button>`) with an `onClick` handler that triggers the same action as the shortcut, along with appropriate hover, focus, and ARIA attributes.
