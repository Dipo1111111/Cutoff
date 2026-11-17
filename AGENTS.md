# Rules for this folder

## No inline CSS

Never put CSS in an HTML file. This is not a preference. It is a rule.

Prohibited:

- A `<style>` element.
- A `style` attribute on any element.
- A `style` property set from script, unless a computed value cannot be expressed in CSS.
- CSS inside a template string in JavaScript.

Required:

- All CSS lives in `styles.css`.
- All design tokens live in the `:root` block at the top of `styles.css`.
- Components use tokens: `var(--ink)`, `var(--s3)`, `var(--r-card)`, `var(--dur)`.
- Show and hide with classes, not with inline `display`.
- Sizes that depend on data use a class scale, not a hard-coded value per row.

When you need one element to differ, add a class. When you need a value to change,
add a token.

## Other rules for this tool

- Local only. No server, no network, no build step, no dependencies, no framework.
- One HTML file, one CSS file, one script for data, one script for behaviour.
- Classic scripts only. Do not use ES modules. The page opens from `file://`.
- Fixed order. Do not sort the plan, do not reschedule, do not assign days.
- Three states only: not started, learned, locked.
- Do not add streaks, badges, heatmaps, timers, notifications, or motivational copy.
- Keep the plan data in `plan.js`. It mirrors `../STUDY_PLAN.md`.
