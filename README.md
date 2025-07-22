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
16: 4rem
);

$colors: (
"gray-100": #f3f4f6,
"gray-200": #e5e7eb,
"gray-300": #d1d5db,
"gray-500": #6b7280,
"blue-500": #3b82f6,
"red-500": #ef4444,
"green-500": #22c55e
);

// Margin 原子类
@each $size, $value in $spacing {
.m-#{$size} { margin: $value; }
.mx-#{$size} { margin-left: $value; margin-right: $value; }
.my-#{$size} { margin-top: $value; margin-bottom: $value; }
.mt-#{$size} { margin-top: $value; }
.mr-#{$size} { margin-right: $value; }
.mb-#{$size} { margin-bottom: $value; }
.ml-#{$size} { margin-left: $value; }
}

// Padding 原子类
@each $size, $value in $spacing {
.p-#{$size} { padding: $value; }
.px-#{$size} { padding-left: $value; padding-right: $value; }
.py-#{$size} { padding-top: $value; padding-bottom: $value; }
.pt-#{$size} { padding-top: $value; }
.pr-#{$size} { padding-right: $value; }
.pb-#{$size} { padding-bottom: $value; }
.pl-#{$size} { padding-left: $value; }
}

// Text 颜色
@each $color, $value in $colors {
.text-#{$color} { color: $value; }
}

// Background 颜色
@each $color, $value in $colors {
.bg-#{$color} { background-color: $value; }
}

// Flex 布局
.flex { display: flex; }
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }
.flex-1 { flex: 1 1 0%; }
.flex-auto { flex: 1 1 auto; }
.flex-none { flex: none; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-evenly { justify-content: space-evenly; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.items-baseline { align-items: baseline; }
.items-stretch { align-items: stretch; }

// Gap 原子类（用于 flex 和 grid）
@each $size, $value in $spacing {
.gap-#{$size} { gap: $value; }
.gap-x-#{$size} { column-gap: $value; }
.gap-y-#{$size} { row-gap: $value; }
}

// Grid 布局
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
.col-span-1 { grid-column: span 1 / span 1; }
.col-span-2 { grid-column: span 2 / span 2; }
.col-span-3 { grid-column: span 3 / span 3; }
.col-span-4 { grid-column: span 4 / span 4; }
.col-span-6 { grid-column: span 6 / span 6; }
.col-span-12 { grid-column: span 12 / span 12; }
.col-auto { grid-column: auto; }
.grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr)); }
.grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr)); }
.grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr)); }
.row-span-1 { grid-row: span 1 / span 1; }
.row-span-2 { grid-row: span 2 / span 2; }
.row-span-3 { grid-row: span 3 / span 3; }
.row-auto { grid-row: auto; }

// 响应式断点
$breakpoints: (
"sm": 640px,
"md": 768px,
"lg": 1024px,
"xl": 1280px
);



@each $prefix, $size in $breakpoints {
@media (min-width: $size) {
@each $s, $value in $spacing {
.#{$prefix}\:m-#{$s} { margin: $value; }
.#{$prefix}\:mx-#{$s} { margin-left: $value; margin-right: $value; }
.#{$prefix}\:my-#{$s} { margin-top: $value; margin-bottom: $value; }
.#{$prefix}\:mt-#{$s} { margin-top: $value; }
.#{$prefix}\:mr-#{$s} { margin-right: $value; }
.#{$prefix}\:mb-#{$s} { margin-bottom: $value; }
.#{$prefix}\:ml-#{$s} { margin-left: $value; }

      .#{$prefix}\:p-#{$s} { padding: $value; }
      .#{$prefix}\:px-#{$s} { padding-left: $value; padding-right: $value; }
      .#{$prefix}\:py-#{$s} { padding-top: $value; padding-bottom: $value; }
      .#{$prefix}\:pt-#{$s} { padding-top: $value; }
      .#{$prefix}\:pr-#{$s} { padding-right: $value; }
      .#{$prefix}\:pb-#{$s} { padding-bottom: $value; }
      .#{$prefix}\:pl-#{$s} { padding-left: $value; }

      .#{$prefix}\:gap-#{$s} { gap: $value; }
      .#{$prefix}\:gap-x-#{$s} { column-gap: $value; }
      .#{$prefix}\:gap-y-#{$s} { row-gap: $value; }
    }

    @each $color, $value in $colors {
      .#{$prefix}\:text-#{$color} { color: $value; }
      .#{$prefix}\:bg-#{$color} { background-color: $value; }
    }

    .#{$prefix}\:flex { display: flex; }
    .#{$prefix}\:flex-row { flex-direction: row; }
    .#{$prefix}\:flex-col { flex-direction: column; }
    .#{$prefix}\:items-center { align-items: center; }
    .#{$prefix}\:justify-center { justify-content: center; }
    .#{$prefix}\:flex-wrap { flex-wrap: wrap; }
    .#{$prefix}\:flex-nowrap { flex-wrap: nowrap; }
    .#{$prefix}\:flex-1 { flex: 1 1 0%; }
    .#{$prefix}\:flex-auto { flex: 1 1 auto; }
    .#{$prefix}\:flex-none { flex: none; }
    .#{$prefix}\:justify-between { justify-content: space-between; }
    .#{$prefix}\:justify-around { justify-content: space-around; }
    .#{$prefix}\:justify-evenly { justify-content: space-evenly; }
    .#{$prefix}\:items-start { align-items: flex-start; }
    .#{$prefix}\:items-end { align-items: flex-end; }
    .#{$prefix}\:items-baseline { align-items: baseline; }
    .#{$prefix}\:items-stretch { align-items: stretch; }

    .#{$prefix}\:grid { display: grid; }
    .#{$prefix}\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
    .#{$prefix}\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .#{$prefix}\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .#{$prefix}\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .#{$prefix}\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
    .#{$prefix}\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
    .#{$prefix}\:col-span-1 { grid-column: span 1 / span 1; }
    .#{$prefix}\:col-span-2 { grid-column: span 2 / span 2; }
    .#{$prefix}\:col-span-3 { grid-column: span 3 / span 3; }
    .#{$prefix}\:col-span-4 { grid-column: span 4 / span 4; }
    .#{$prefix}\:col-span-6 { grid-column: span 6 / span 6; }
    .#{$prefix}\:col-span-12 { grid-column: span 12 / span 12; }
    .#{$prefix}\:col-auto { grid-column: auto; }
    .#{$prefix}\:grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr)); }
    .#{$prefix}\:grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr)); }
    .#{$prefix}\:grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr)); }
    .#{$prefix}\:row-span-1 { grid-row: span 1 / span 1; }
    .#{$prefix}\:row-span-2 { grid-row: span 2 / span 2; }
    .#{$prefix}\:row-span-3 { grid-row: span 3 / span 3; }
    .#{$prefix}\:row-auto { grid-row: auto; }
}
}