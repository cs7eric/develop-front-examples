// Tailwind CSS v4 SCSS Utilities
// Variables for consistency
$breakpoints: (
'sm': 640px,
'md': 768px,
'lg': 1024px,
'xl': 1280px,
'2xl': 1536px
);

$spacing: (
0: 0,
1: 0.25rem,
2: 0.5rem,
3: 0.75rem,
4: 1rem,
5: 1.25rem,
6: 1.5rem,
8: 2rem,
10: 2.5rem,
12: 3rem,
16: 4rem,
20: 5rem,
24: 6rem,
32: 8rem,
40: 10rem,
48: 12rem,
56: 14rem,
64: 16rem,
72: 18rem,
80: 20rem,
96: 24rem,
'px': 1px,
'0.5': 0.125rem,
'1.5': 0.375rem,
'2.5': 0.625rem,
'3.5': 0.875rem
);

$colors: (
'gray': (
50: #f9fafb,
100: #f3f4f6,
200: #e5e7eb,
300: #d1d5db,
400: #9ca3af,
500: #6b7280,
600: #4b5563,
700: #374151,
800: #1f2937,
900: #111827
),
'blue': (
50: #eff6ff,
100: #dbeafe,
200: #bfdbfe,
300: #93c5fd,
400: #60a5fa,
500: #3b82f6,
600: #2563eb,
700: #1d4ed8,
800: #1e40af,
900: #1e3a8a
),
'red': (
50: #fef2f2,
100: #fee2e2,
200: #fecaca,
300: #fca5a5,
400: #f87171,
500: #ef4444,
600: #dc2626,
700: #b91c1c,
800: #991b1b,
900: #7f1d1d
)
);

$font-sizes: (
'xs': 0.75rem,
'sm': 0.875rem,
'base': 1rem,
'lg': 1.125rem,
'xl': 1.25rem,
'2xl': 1.5rem,
'3xl': 1.875rem,
'4xl': 2.25rem,
'5xl': 3rem,
'6xl': 3.75rem,
'7xl': 4.5rem,
'8xl': 6rem,
'9xl': 8rem
);

$font-weights: (
'thin': 100,
'extralight': 200,
'light': 300,
'normal': 400,
'medium': 500,
'semibold': 600,
'bold': 700,
'extrabold': 800,
'black': 900
);

// Layout: Columns
@each $size in (1, 2, 3, 4, 5, 6, auto, '3xs', '2xs', xs, sm, md, lg, xl) {
.columns-#{$size} { columns: #{$size}; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:columns-#{$size} { columns: #{$size}; }
}
}
}

// Layout: Box Sizing
.box-border { box-sizing: border-box; }
.box-content { box-sizing: content-box; }

// Layout: Display
@each $display in (block, inline-block, inline, flex, inline-flex, grid, inline-grid, none, contents, flow-root) {
.#{$display} { display: #{$display}; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:#{$display} { display: #{$display}; }
}
}
}

// Layout: Overflow
@each $overflow in (auto, hidden, visible, scroll) {
.overflow-#{$overflow} { overflow: #{$overflow}; }
.overflow-x-#{$overflow} { overflow-x: #{$overflow}; }
.overflow-y-#{$overflow} { overflow-y: #{$overflow}; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:overflow-#{$overflow} { overflow: #{$overflow}; }
.#{$bp}\:overflow-x-#{$overflow} { overflow-x: #{$overflow}; }
.#{$bp}\:overflow-y-#{$overflow} { overflow-y: #{$overflow}; }
}
}
}

// Layout: Position
@each $position in (static, relative, absolute, fixed, sticky) {
.#{$position} { position: #{$position}; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:#{$position} { position: #{$position}; }
}
}
}

// Layout: Top / Right / Bottom / Left
@each $prop in (top, right, bottom, left) {
@each $size, $value in $spacing {
.#{$prop}-#{$size} { #{$prop}: $value; }
.-#{$prop}-#{$size} { #{$prop}: -$value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:#{$prop}-#{$size} { #{$prop}: $value; }
.#{$bp}\:-#{$prop}-#{$size} { #{$prop}: -$value; }
}
}
}
}

// Layout: Visibility
.visible { visibility: visible; }
.invisible { visibility: hidden; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:visible { visibility: visible; }
.#{$bp}\:invisible { visibility: hidden; }
}
}

// Layout: Z-Index
@each $z in (0, 10, 20, 30, 40, 50, auto) {
.z-#{$z} { z-index: #{$z}; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:z-#{$z} { z-index: #{$z}; }
}
}
}

// Flexbox & Grid: Flex Basis
@each $size, $value in $spacing {
.basis-#{$size} { flex-basis: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:basis-#{$size} { flex-basis: $value; }
}
}
}
@each $fraction in (auto, full, 1/2, 1/3, 2/3, 1/4, 3/4, 1/5, 2/5, 3/5, 4/5, 1/6, 2/6, 3/6, 4/6, 5/6) {
.basis-#{$fraction} { flex-basis: $fraction; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:basis-#{$fraction} { flex-basis: $fraction; }
}
}
}

// Flexbox & Grid: Flex Direction
@each $direction in (row, row-reverse, col, col-reverse) {
.flex-#{$direction} { flex-direction: $direction; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:flex-#{$direction} { flex-direction: $direction; }
}
}
}

// Flexbox & Grid: Flex Wrap
@each $wrap in (wrap, wrap-reverse, nowrap) {
.flex-#{$wrap} { flex-wrap: $wrap; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:flex-#{$wrap} { flex-wrap: $wrap; }
}
}
}

// Flexbox & Grid: Flex
@each $flex in (1, auto, initial, none) {
.flex-#{$flex} { flex: $flex; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:flex-#{$flex} { flex: $flex; }
}
}
}

// Flexbox & Grid: Flex Grow
@each $grow in (0, 1) {
.grow-#{$grow} { flex-grow: $grow; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:grow-#{$grow} { flex-grow: $grow; }
}
}
}
.grow { flex-grow: 1; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:grow { flex-grow: 1; }
}
}

// Flexbox & Grid: Flex Shrink
@each $shrink in (0, 1) {
.shrink-#{$shrink} { flex-shrink: $shrink; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:shrink-#{$shrink} { flex-shrink: $shrink; }
}
}
}
.shrink { flex-shrink: 1; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:shrink { flex-shrink: 1; }
}
}

// Flexbox & Grid: Order
@each $order in (-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12) {
.order-#{$order} { order: $order; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:order-#{$order} { order: $order; }
}
}
}

// Flexbox & Grid: Grid Template Columns
@each $cols in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, none) {
.grid-cols-#{$cols} { grid-template-columns: repeat($cols, minmax(0, 1fr)); }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:grid-cols-#{$cols} { grid-template-columns: repeat($cols, minmax(0, 1fr)); }
}
}
}

// Flexbox & Grid: Grid Column
@each $span in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto, full) {
.col-span-#{$span} { grid-column: span $span / span $span; }
.col-start-#{$span} { grid-column-start: $span; }
.col-end-#{$span} { grid-column-end: $span; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:col-span-#{$span} { grid-column: span $span / span $span; }
.#{$bp}\:col-start-#{$span} { grid-column-start: $span; }
.#{$bp}\:col-end-#{$span} { grid-column-end: $span; }
}
}
}

// Flexbox & Grid: Grid Template Rows
@each $rows in (1, 2, 3, 4, 5, 6, none) {
.grid-rows-#{$rows} { grid-template-rows: repeat($rows, minmax(0, 1fr)); }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:grid-rows-#{$rows} { grid-template-rows: repeat($rows, minmax(0, 1fr)); }
}
}
}

// Flexbox & Grid: Grid Row
@each $span in (1, 2, 3, 4, 5, 6, auto, full) {
.row-span-#{$span} { grid-row: span $span / span $span; }
.row-start-#{$span} { grid-row-start: $span; }
.row-end-#{$span} { grid-row-end: $span; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:row-span-#{$span} { grid-row: span $span / span $span; }
.#{$bp}\:row-start-#{$span} { grid-row-start: $span; }
.#{$bp}\:row-end-#{$span} { grid-row-end: $span; }
}
}
}

// Flexbox & Grid: Grid Auto Flow
@each $flow in (row, col, dense, row-dense, col-dense) {
.grid-flow-#{$flow} { grid-auto-flow: $flow; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:grid-flow-#{$flow} { grid-auto-flow: $flow; }
}
}
}

// Flexbox & Grid: Grid Auto Columns
@each $size in (auto, min, max, fr) {
.auto-cols-#{$size} { grid-auto-columns: $size; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:auto-cols-#{$size} { grid-auto-columns: $size; }
}
}
}

// Flexbox & Grid: Grid Auto Rows
@each $size in (auto, min, max, fr) {
.auto-rows-#{$size} { grid-auto-rows: $size; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:auto-rows-#{$size} { grid-auto-rows: $size; }
}
}
}

// Flexbox & Grid: Gap
@each $size, $value in $spacing {
.gap-#{$size} { gap: $value; }
.gap-x-#{$size} { column-gap: $value; }
.gap-y-#{$size} { row-gap: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:gap-#{$size} { gap: $value; }
.#{$bp}\:gap-x-#{$size} { column-gap: $value; }
.#{$bp}\:gap-y-#{$size} { row-gap: $value; }
}
}
}

// Flexbox & Grid: Justify Content
@each $justify in (start, end, center, between, around, evenly) {
.justify-#{$justify} { justify-content: $justify; }
.justify-#{$justify}-safe { justify-content: safe $justify; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:justify-#{$justify} { justify-content: $justify; }
.#{$bp}\:justify-#{$justify}-safe { justify-content: safe $justify; }
}
}
}

// Flexbox & Grid: Justify Items
@each $justify in (start, end, center, stretch) {
.justify-items-#{$justify} { justify-items: $justify; }
.justify-items-#{$justify}-safe { justify-items: safe $justify; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:justify-items-#{$justify} { justify-items: $justify; }
.#{$bp}\:justify-items-#{$justify}-safe { justify-items: safe $justify; }
}
}
}

// Flexbox & Grid: Justify Self
@each $justify in (auto, start, end, center, stretch) {
.justify-self-#{$justify} { justify-self: $justify; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:justify-self-#{$justify} { justify-self: $justify; }
}
}
}

// Flexbox & Grid: Align Content
@each $align in (start, end, center, between, around, evenly, stretch, normal) {
.content-#{$align} { align-content: $align; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:content-#{$align} { align-content: $align; }
}
}
}

// Flexbox & Grid: Align Items
@each $align in (start, end, center, baseline, stretch) {
.items-#{$align} { align-items: $align; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:items-#{$align} { align-items: $align; }
}
}
}

// Flexbox & Grid: Align Self
@each $align in (auto, start, end, center, stretch, baseline) {
.self-#{$align} { align-self: $align; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:self-#{$align} { align-self: $align; }
}
}
}

// Flexbox & Grid: Place Content
@each $place in (center, start, end, between, around, evenly, stretch) {
.place-content-#{$place} { place-content: $place; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:place-content-#{$place} { place-content: $place; }
}
}
}

// Flexbox & Grid: Place Items
@each $place in (center, start, end, stretch) {
.place-items-#{$place} { place-items: $place; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:place-items-#{$place} { place-items: $place; }
}
}
}

// Flexbox & Grid: Place Self
@each $place in (auto, center, start, end, stretch) {
.place-self-#{$place} { place-self: $place; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:place-self-#{$place} { place-self: $place; }
}
}
}

// Spacing: Padding
@each $size, $value in $spacing {
.p-#{$size} { padding: $value; }
.px-#{$size} { padding-left: $value; padding-right: $value; }
.py-#{$size} { padding-top: $value; padding-bottom: $value; }
.pt-#{$size} { padding-top: $value; }
.pr-#{$size} { padding-right: $value; }
.pb-#{$size} { padding-bottom: $value; }
.pl-#{$size} { padding-left: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:p-#{$size} { padding: $value; }
.#{$bp}\:px-#{$size} { padding-left: $value; padding-right: $value; }
.#{$bp}\:py-#{$size} { padding-top: $value; padding-bottom: $value; }
.#{$bp}\:pt-#{$size} { padding-top: $value; }
.#{$bp}\:pr-#{$size} { padding-right: $value; }
.#{$bp}\:pb-#{$size} { padding-bottom: $value; }
.#{$bp}\:pl-#{$size} { padding-left: $value; }
}
}
}

// Spacing: Margin
@each $size, $value in $spacing {
.m-#{$size} { margin: $value; }
.mx-#{$size} { margin-left: $value; margin-right: $value; }
.my-#{$size} { margin-top: $value; margin-bottom: $value; }
.mt-#{$size} { margin-top: $value; }
.mr-#{$size} { margin-right: $value; }
.mb-#{$size} { margin-bottom: $value; }
.ml-#{$size} { margin-left: $value; }
.-m-#{$size} { margin: -$value; }
.-mx-#{$size} { margin-left: -$value; margin-right: -$value; }
.-my-#{$size} { margin-top: -$value; margin-bottom: -$value; }
.-mt-#{$size} { margin-top: -$value; }
.-mr-#{$size} { margin-right: -$value; }
.-mb-#{$size} { margin-bottom: -$value; }
.-ml-#{$size} { margin-left: -$value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:m-#{$size} { margin: $value; }
.#{$bp}\:mx-#{$size} { margin-left: $value; margin-right: $value; }
.#{$bp}\:my-#{$size} { margin-top: $value; margin-bottom: $value; }
.#{$bp}\:mt-#{$size} { margin-top: $value; }
.#{$bp}\:mr-#{$size} { margin-right: $value; }
.#{$bp}\:mb-#{$size} { margin-bottom: $value; }
.#{$bp}\:ml-#{$size} { margin-left: $value; }
.#{$bp}\:-m-#{$size} { margin: -$value; }
.#{$bp}\:-mx-#{$size} { margin-left: -$value; margin-right: -$value; }
.#{$bp}\:-my-#{$size} { margin-top: -$value; margin-bottom: -$value; }
.#{$bp}\:-mt-#{$size} { margin-top: -$value; }
.#{$bp}\:-mr-#{$size} { margin-right: -$value; }
.#{$bp}\:-mb-#{$size} { margin-bottom: -$value; }
.#{$bp}\:-ml-#{$size} { margin-left: -$value; }
}
}
}

// Sizing: Width
@each $size, $value in $spacing {
.w-#{$size} { width: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:w-#{$size} { width: $value; }
}
}
}
@each $fraction in (auto, full, screen, 1/2, 1/3, 2/3, 1/4, 3/4, 1/5, 2/5, 3/5, 4/5, 1/6, 2/6, 3/6, 4/6, 5/6) {
.w-#{$fraction} { width: $fraction; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:w-#{$fraction} { width: $fraction; }
}
}
}

// Sizing: Min Width
@each $size, $value in $spacing {
.min-w-#{$size} { min-width: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:min-w-#{$size} { min-width: $value; }
}
}
}
.min-w-0 { min-width: 0; }
.min-w-full { min-width: 100%; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:min-w-0 { min-width: 0; }
.#{$bp}\:min-w-full { min-width: 100%; }
}
}

// Sizing: Max Width
@each $size, $value in $spacing {
.max-w-#{$size} { max-width: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:max-w-#{$size} { max-width: $value; }
}
}
}
@each $size in (none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, full, min, max, prose) {
.max-w-#{$size} { max-width: $size; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:max-w-#{$size} { max-width: $size; }
}
}
}

// Sizing: Height
@each $size, $value in $spacing {
.h-#{$size} { height: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:h-#{$size} { height: $value; }
}
}
}
@each $fraction in (auto, full, screen, 1/2, 1/3, 2/3, 1/4, 3/4, 1/5, 2/5, 3/5, 4/5, 1/6, 2/6, 3/6, 4/6, 5/6) {
.h-#{$fraction} { height: $fraction; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:h-#{$fraction} { height: $fraction; }
}
}
}

// Sizing: Min Height
@each $size, $value in $spacing {
.min-h-#{$size} { min-height: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:min-h-#{$size} { min-height: $value; }
}
}
}
.min-h-0 { min-height: 0; }
.min-h-full { min-height: 100%; }
.min-h-screen { min-height: 100vh; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:min-h-0 { min-height: 0; }
.#{$bp}\:min-h-full { min-height: 100%; }
.#{$bp}\:min-h-screen { min-height: 100vh; }
}
}

// Sizing: Max Height
@each $size, $value in $spacing {
.max-h-#{$size} { max-height: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:max-h-#{$size} { max-height: $value; }
}
}
}
@each $size in (full, screen) {
.max-h-#{$size} { max-height: $size; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:max-h-#{$size} { max-height: $size; }
}
}
}

// Typography: Font Size
@each $size, $value in $font-sizes {
.text-#{$size} { font-size: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:text-#{$size} { font-size: $value; }
}
}
}

// Typography: Font Weight
@each $weight, $value in $font-weights {
.font-#{$weight} { font-weight: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:font-#{$weight} { font-weight: $value; }
}
}
}

// Typography: Font Stretch
@each $stretch in (normal, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded) {
.font-stretch-#{$stretch} { font-stretch: $stretch; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:font-stretch-#{$stretch} { font-stretch: $stretch; }
}
}
}

// Typography: Line Height
@each $size in (3, 3.5, 4, 5, 6, 7, 8, 9, 10, none, tight, snug, normal, relaxed, loose) {
.leading-#{$size} {
@if $size == 'none' { line-height: 1; }
@else if $size == 'tight' { line-height: 1.25; }
@else if $size == 'snug' { line-height: 1.375; }
@else if $size == 'normal' { line-height: 1.5; }
@else if $size == 'relaxed' { line-height: 1.625; }
@else if $size == 'loose' { line-height: 2; }
@else { line-height: $size * 0.25rem; }
}
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:leading-#{$size} {
@if $size == 'none' { line-height: 1; }
@else if $size == 'tight' { line-height: 1.25; }
@else if $size == 'snug' { line-height: 1.375; }
@else if $size == 'normal' { line-height: 1.5; }
@else if $size == 'relaxed' { line-height: 1.625; }
@else if $size == 'loose' { line-height: 2; }
@else { line-height: $size * 0.25rem; }
}
}
}
}

// Typography: Text Align
@each $align in (left, center, right, justify, start, end) {
.text-#{$align} { text-align: $align; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:text-#{$align} { text-align: $align; }
}
}
}

// Typography: Color
@each $color, $shades in $colors {
@each $shade, $value in $shades {
.text-#{$color}-#{$shade} { color: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:text-#{$color}-#{$shade} { color: $value; }
}
}
}
}

// Borders: Border Radius
@each $size, $value in (0: 0, 'none': 0, 'sm': 0.125rem, 'DEFAULT': 0.25rem, 'md': 0.375rem, 'lg': 0.5rem, 'xl': 0.75rem, '2xl': 1rem, '3xl': 1.5rem, 'full': 9999px) {
.rounded-#{$size} { border-radius: $value; }
.rounded-t-#{$size} { border-top-left-radius: $value; border-top-right-radius: $value; }
.rounded-r-#{$size} { border-top-right-radius: $value; border-bottom-right-radius: $value; }
.rounded-b-#{$size} { border-bottom-right-radius: $value; border-bottom-left-radius: $value; }
.rounded-l-#{$size} { border-top-left-radius: $value; border-bottom-left-radius: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:rounded-#{$size} { border-radius: $value; }
.#{$bp}\:rounded-t-#{$size} { border-top-left-radius: $value; border-top-right-radius: $value; }
.#{$bp}\:rounded-r-#{$size} { border-top-right-radius: $value; border-bottom-right-radius: $value; }
.#{$bp}\:rounded-b-#{$size} { border-bottom-right-radius: $value; border-bottom-left-radius: $value; }
.#{$bp}\:rounded-l-#{$size} { border-top-left-radius: $value; border-bottom-left-radius: $value; }
}
}
}

// Borders: Border Width
@each $size, $value in (0: 0, 'DEFAULT': 1px, 2: 2px, 4: 4px, 8: 8px) {
.border-#{$size} { border-width: $value; }
.border-t-#{$size} { border-top-width: $value; }
.border-r-#{$size} { border-right-width: $value; }
.border-b-#{$size} { border-bottom-width: $value; }
.border-l-#{$size} { border-left-width: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:border-#{$size} { border-width: $value; }
.#{$bp}\:border-t-#{$size} { border-top-width: $value; }
.#{$bp}\:border-r-#{$size} { border-right-width: $value; }
.#{$bp}\:border-b-#{$size} { border-bottom-width: $value; }
.#{$bp}\:border-l-#{$size} { border-left-width: $value; }
}
}
}

// Borders: Border Color
@each $color, $shades in $colors {
@each $shade, $value in $shades {
.border-#{$color}-#{$shade} { border-color: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:border-#{$color}-#{$shade} { border-color: $value; }
}
}
}
}

// Borders: Border Style
@each $style in (solid, dashed, dotted, double, none) {
.border-#{$style} { border-style: $style; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:border-#{$style} { border-style: $style; }
}
}
}

// Effects: Box Shadow
@each $shadow, $value in (
'sm': 0 1px 2px 0 rgba(0, 0, 0, 0.05),
'DEFAULT': 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06),
'md': 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06),
'lg': 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05),
'xl': 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04),
'2xl': 0 25px 50px -12px rgba(0, 0, 0, 0.25),
'none': none
) {
.shadow-#{$shadow} { box-shadow: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:shadow-#{$shadow} { box-shadow: $value; }
}
}
}

// Effects: Text Shadow
@each $shadow, $value in (
'none': none,
'sm': 1px 1px 2px rgba(0, 0, 0, 0.2),
'DEFAULT': 1px 1px 3px rgba(0, 0, 0, 0.3),
'lg': 2px 2px 4px rgba(0, 0, 0, 0.4)
) {
.text-shadow-#{$shadow} { text-shadow: $value; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:text-shadow-#{$shadow} { text-shadow: $value; }
}
}
}

// Effects: Opacity
@each $opacity in (0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100) {
.opacity-#{$opacity} { opacity: $opacity / 100; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:opacity-#{$opacity} { opacity: $opacity / 100; }
}
}
}

// Effects: Blur
@each $blur, $value in (0: 0, 'sm': 4px, 'DEFAULT': 8px, 'md': 12px, 'lg': 16px, 'xl': 24px, '2xl': 40px, '3xl': 64px, 'none': 0) {
.blur-#{$blur} { filter: blur($value); }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:blur-#{$blur} { filter: blur($value); }
}
}
}

// Effects: Cursor
@each $cursor in (auto, default, pointer, wait, text, move, not-allowed) {
.cursor-#{$cursor} { cursor: $cursor; }
@each $bp, $min-width in $breakpoints {
@media (min-width: $min-width) {
.#{$bp}\:cursor-#{$cursor} { cursor: $cursor; }
}
}
}