# Portfolio v2 — Design System Rules

All changes to `portfolio_v2.html` MUST follow these rules. No exceptions.

## Color Tokens (use CSS variables only)

```
--cream:        #F2E8DC      (page background, light surfaces)
--cream-deep:   #E8D9CA      (deeper cream for contrast)
--coral:        #C84A2E      (primary accent, CTAs)
--coral-hover:  #A83C24      (hover state for coral)
--coral-light:  #F5B8A8      (light accent on dark backgrounds)
--coral-pale:   #FAE8E3      (ghost button hover fill)
--near-black:   #1A1714      (text, dark surfaces)
--warm-gray:    #5A5650      (secondary text)
--warm-gray-lt: #A09890      (tertiary text, placeholders)
--sand:         #D8C8B8      (decorative borders)
--border-light: rgba(90,86,80,0.15)
--border-dark:  rgba(255,255,255,0.09)
```

### Project-specific colors (for case study gradients only)
```
--dark-navy:    #0D1B2A      (Viki project)
--viki-blue:    #0C9BFF      (Viki accent)
```
Other project gradient colors (Carousell browns, GXS greens) may be hardcoded ONLY inside project-specific gradient declarations, nowhere else.

### Forbidden
- NEVER use hardcoded hex/rgb colors for text, backgrounds, borders, or accents — always use `var(--token)`
- NEVER introduce new colors without adding them as tokens in the PRIMARY `:root` block (lines 16-98)
- The only `:root` block is lines 16-98. Do NOT create duplicate `:root` declarations

## Typography

```
--font-serif:   'Playfair Display', Georgia, serif    (headings, display text)
--font-sans:    'DM Sans', system-ui, sans-serif      (body, UI, labels)
```

### Font Size Scale
```
--text-xs:   10px    (labels, tags, chips)
--text-sm:   12px    (secondary copy, captions)
--text-base: 14px    (body text)
--text-md:   15px    (larger body)
--text-lg:   17px    (nav logo, emphasis)
```

For display/headline sizes, use `clamp()` for responsive scaling — do NOT hardcode pixel values.

### Line Height
```
--leading-tight:  1.1    (headings)
--leading-normal: 1.6    (body)
--leading-loose:  1.8    (relaxed reading)
```

### Letter Spacing
```
--tracking-wide:  0.06em   (labels, uppercase text)
--tracking-wider: 0.10em   (section labels)
--tracking-tight: -0.03em  (large headings)
```

## Spacing (8pt Grid)

ALL spacing values MUST use these tokens:
```
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-5:  20px
--space-6:  24px
--space-8:  32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-section: 96px   (vertical section rhythm)
--page-gutter:   56px   (horizontal page padding)
```

### Rules
- NEVER hardcode margin, padding, or gap values — use `var(--space-*)`
- If a value doesn't exist in the scale, use the nearest token or `calc()` with tokens
- Section spacing between major sections: `var(--space-section)`
- Page horizontal padding: `var(--page-gutter)`

## Border Radius

```
--radius-none: 0px
--radius-sm:   4px    (buttons, tags, chips — sharp/editorial)
--radius-md:   8px    (inputs, small cards)
--radius-lg:   12px   (cards, panels)
--radius-xl:   16px   (hero elements, large surfaces)
```

NEVER hardcode `border-radius` — always use `var(--radius-*)`.

## Borders

```
--border-width:     1px     (structural borders)
--border-width-sub: 0.5px   (hairline, decorative)
```

## Shadows

```
--shadow-retro:       4px 4px 0 #1A1714     (retro window default)
--shadow-retro-hover: 6px 6px 0 #1A1714     (retro window hover)
```

## Component Systems

### Buttons
Three variants — always use these classes, never create one-off button styles:
- `.btn-primary` / `.nav-cta` — filled coral CTA
- `.btn-ghost` — outlined on light backgrounds
- `.btn-ghost-light` — outlined on dark backgrounds
- `.btn-icon` — square icon button (36x36)

Button tokens:
```
--btn-height:      44px
--btn-padding-x:   24px
--btn-font-size:   13px
--btn-font-weight: 500
--btn-radius:      var(--radius-sm)
```

If you need a smaller button, create a `.btn-sm` modifier — do NOT use inline styles to override.

### Tags / Chips
Three variants:
- `.tag-outline` — on light backgrounds
- `.tag-fill` — coral fill on dark backgrounds
- `.tag-muted` — ghost on dark backgrounds

Tag tokens:
```
--tag-padding:     3px 9px
--tag-font-size:   var(--text-xs)
--tag-font-weight: 500
--tag-tracking:    0.07em
--tag-radius:      var(--radius-sm)
```

### Section Labels
- `.section-label` — coral eyebrow with decorative line (light bg)
- `.section-label-light` — modifier for dark backgrounds

### Cards
- `.card-surface` — applies `border-radius: var(--radius-lg)` and `overflow: hidden`

## Strict Rules for All Changes

1. **No inline styles** — all styling goes in the `<style>` block using classes
2. **No hardcoded values** — colors, spacing, radii, font-sizes must use CSS variables
3. **No duplicate `:root`** — all tokens live in the single `:root` block (lines 16-98)
4. **Use existing components** — buttons, tags, labels, cards have defined classes. Use them.
5. **New components** must use existing tokens — define new CSS classes, not inline overrides
6. **Cursor is `none`** everywhere (custom cursor is in use) — never set `cursor: pointer`
7. **Font families** — only `var(--font-serif)` and `var(--font-sans)`. No other fonts.
8. **Responsive sizing** — use `clamp()` for headline/display sizes, not fixed px
9. **Transitions** — use `var(--btn-transition)` for interactive elements or define similar easing
10. **Section structure** — each section gets a section comment header with `════` borders
