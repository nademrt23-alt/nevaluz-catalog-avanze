---
name: NEVALUZ Reno Editorial
colors:
  surface: '#0e0d0b'
  surface-soft: '#171410'
  surface-warm: '#221a13'
  paper: '#eee7d8'
  on-surface: '#eee7d8'
  on-surface-variant: '#a79c88'
  primary: '#c8a45b'
  primary-bright: '#e8c87c'
  outline: '#766b58'
  outline-variant: '#c8a45b'
  inverse-surface: '#eee7d8'
  inverse-on-surface: '#0e0d0b'
typography:
  display-lg:
    fontFamily: Cormorant Garamond
    fontSize: 126px
    fontWeight: '500'
    lineHeight: 0.78
    letterSpacing: -0.045em
  headline-md:
    fontFamily: Cormorant Garamond
    fontSize: 86px
    fontWeight: '500'
    lineHeight: 0.86
    letterSpacing: -0.04em
  body-base:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 1.7
    letterSpacing: '0'
  label-caps:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 1.25
    letterSpacing: 0.2em
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 28px
  lg: 58px
  xl: 114px
  margin-mobile: 20px
  margin-desktop: 8vw
---

# Design System: NEVALUZ Reno Editorial

## 1. Visual Theme & Atmosphere

NEVALUZ is a warm editorial catalog for artisan lamps made from recovered glass. The experience is intentionally nocturnal: charcoal backgrounds, amber light and restrained gold details make the Reno feel like a small memory preserved inside a jar. The visual language is premium without becoming glossy; empty space and deep shadows give the product room to breathe.

The lighting strategy is layered rather than uniformly bright. Product images use a warm focal glow, controlled contrast and dark falloff at the edges so that the eye lands on the illuminated Reno silhouette. Grain, orbital lines and slightly rotated imagery introduce tactility and a handmade feeling without competing with the product.

## 2. Color Palette & Roles

### Primary Foundation

- **Carbón profundo — #0e0d0b:** primary page background; establishes the quiet, nocturnal mood.
- **Carbón suave — #171410:** secondary section and modal surface; adds depth without a hard change in temperature.
- **Marrón nogal — #221a13:** editorial and social sections; supports warm product photography.
- **Marfil papel — #eee7d8:** manifesto surface and primary light text; creates a tactile paper contrast.

### Accent & Interactive

- **Latón NEVALUZ — #c8a45b:** buttons, rules, labels and active states; the ownable brand accent.
- **Oro cálido — #e8c87c:** emphasized words, prices and light-catching details.

### Typography & Text Hierarchy

- **Marfil principal — #eee7d8:** headlines and high-priority interface text.
- **Piedra ahumada — #a79c88:** body copy, descriptions and secondary navigation.
- **Latón apagado — #766b58:** low-emphasis metadata over the light manifesto surface.

### Functional States

- **Disponible:** oro cálido and latón, used sparingly for active collection states.
- **Próximamente:** muted stone with reduced saturation and opacity; communicates anticipation without pretending stock exists.

## 3. Typography Rules

### Hierarchy & Weights

Cormorant Garamond carries the emotional voice: oversized, high-contrast serif headlines, italic gold emphasis and elegant prices. DM Sans handles navigation, labels, product metadata and readable body copy. Uppercase labels use generous tracking to feel like gallery captions. Headlines keep a tight line-height and slightly negative tracking; paragraphs use generous line-height for calm reading.

### Spacing Principles

The catalog follows a loose 4px rhythm with generous editorial section padding. Large margins and asymmetrical image placement create a gallery-like pace. Product metadata stays compact while the hero and manifesto use long pauses between thought groups.

## 4. Component Stylings

### Buttons

Primary actions are brass-filled rectangles with dark text, wide letter spacing and a subtle warm shadow. Hover lifts the button slightly and increases the glow rather than changing its shape. Text links use a hairline underline and muted color.

### Cards & Domain-Specific Containers

Product cards are image-led, borderless and quiet. Images use controlled saturation, contrast and edge shadows; edition badges are dark translucent chips with warm gold text. The Reno card is intentionally the only visible product card, reducing choice overload and making the desired product the obvious path.

The size selector is a two-option editorial row. **Tamaño grande** is active and clearly framed; **Tamaño mediano — Próximamente** is present as a future path with lower saturation and a factual status label.

### Navigation

The desktop header uses a three-part layout: wordmark, spaced uppercase navigation and a WhatsApp CTA. Mobile removes the navigation and preserves the direct CTA hierarchy. The wordmark combines a serif name, warm gold “LUZ” and a small circular terminal mark.

### Inputs & Forms

There are no form fields in the current catalog. Conversion happens through direct WhatsApp CTAs, reducing friction and preserving a personal, human handoff.

### Editorial Gallery

The gallery pairs one wide ambient photo with one tighter product detail. Captions behave like museum labels, with numbered gold metadata followed by a short scene description.

## 5. Layout Principles

### Grid & Structure

The hero uses an asymmetric two-column layout, with copy on the left and the product on the right. The collection is a single featured product on the large-size release. The manifesto, editorial and TikTok sections alternate background tones to pace the scroll.

### Whitespace Strategy

Desktop edge padding scales to roughly 8vw, with section padding between 75px and 150px. Mobile collapses to 20px and stacks visual blocks into a single reading column. Thin rules and orbital circles create structure inside otherwise generous negative space.

### Alignment & Visual Balance

Headlines remain left aligned, while product imagery carries the visual weight. The hero image is slightly rotated and floats inside orbital lines. Warm highlights are offset by large areas of charcoal shadow so the page never feels overexposed.

### Responsive Behavior & Touch

At 820px, navigation collapses, hero content stacks and the product grid becomes a single column. The size selector also stacks. At 480px, controls remain comfortably tappable, the stamp shrinks and body margins reduce to 20px.

## 6. Design System Notes for Stitch Generation

### Language to Use

Warm editorial luxury, nocturnal gallery, recovered glass, amber LED glow, hand-cut layers, quiet tactility, charcoal negative space, brass hairlines, intimate gifting, slow illumination, premium but human.

### Color References

Anchor surfaces in #0e0d0b and #171410. Use #eee7d8 for paper and key text. Reserve #c8a45b for interaction and #e8c87c for the small moments that should catch the eye. Keep secondary text near #a79c88 and never flatten the lighting into an all-bright layout.

### Component Prompts

1. “Create a dark editorial product hero for an artisan recovered-glass lamp, with a slightly rotated vertical photo, orbital hairline graphics, charcoal negative space and one warm amber focal glow.”
2. “Create a two-state size selector in a nocturnal luxury catalog: large size active in brass, medium size muted with the exact label ‘Próximamente’, generous spacing and thin rules.”
3. “Create a premium product card for a handmade Reno lamp: dark translucent edition badge, gold serif price, muted description, and a single clear WhatsApp reservation action.”

### Incremental Iteration

Keep Reno as the only current product focal point. Add medium-size inventory only when it is genuinely available; retain the muted future state until then. When adjusting images, preserve the dark falloff and warm focal glow, and avoid adding cabin imagery or bright generic lifestyle photography.
