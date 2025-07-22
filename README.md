# 使用SCSS实现Tailwind CSS v4常用类



## 文件结构

```
styles/
├── utilities/
│   ├── _variables.scss      # 变量定义
│   ├── _mixins.scss         # 混合宏
│   ├── _base.scss           # 基础样式
│   ├── _layout.scss         # 布局类
│   ├── _flexbox.scss        # Flex布局
│   ├── _grid.scss           # Grid布局
│   ├── _spacing.scss        # 间距
│   ├── _sizing.scss         # 尺寸
│   ├── _typography.scss     # 排版
│   ├── _backgrounds.scss    # 背景
│   ├── _borders.scss        # 边框
│   ├── _effects.scss        # 效果
│   ├── _transforms.scss     # 变换
│   ├── _transitions.scss    # 过渡
│   └── _interactivity.scss  # 交互
├── main.scss                # 主入口文件
```

## 1. 变量定义 (_variables.scss)

```scss
// 颜色
$colors: (
  'slate': (
    50: #f8fafc,
    100: #f1f5f9,
    // ...其他色阶
    900: #0f172a
  ),
  'gray': (
    50: #f9fafb,
    // ...其他色阶
    900: #111827
  ),
  // 其他颜色...
  'black': #000,
  'white': #fff,
  'transparent': transparent,
  'current': currentColor
);

// 间距
$spacing: (
  '0': 0,
  '1': 0.25rem,
  '2': 0.5rem,
  // ...其他间距
  '64': 16rem
);

// 字体大小
$font-sizes: (
  'xs': 0.75rem,
  'sm': 0.875rem,
  'base': 1rem,
  'lg': 1.125rem,
  // ...其他字号
  '9xl': 8rem
);

// 断点
$breakpoints: (
  'sm': 640px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px,
  '2xl': 1536px
);

// 圆角
$border-radius: (
  'none': 0,
  'sm': 0.125rem,
  'DEFAULT': 0.25rem,
  'md': 0.375rem,
  'lg': 0.5rem,
  'xl': 0.75rem,
  '2xl': 1rem,
  '3xl': 1.5rem,
  'full': 9999px
);

// 阴影
$box-shadow: (
  'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  // ...其他阴影
  'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
);
```

## 2. 混合宏 (_mixins.scss)

```scss
// 响应式断点
@mixin screen($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  } @else {
    @warn "Breakpoint '#{$breakpoint}' does not exist in $breakpoints";
  }
}

// 生成颜色工具类
@mixin generate-color-classes($color-name, $color-map) {
  @each $shade, $value in $color-map {
    .bg-#{$color-name}-#{$shade} {
      background-color: $value;
    }
    .text-#{$color-name}-#{$shade} {
      color: $value;
    }
    .border-#{$color-name}-#{$shade} {
      border-color: $value;
    }
  }
}

// 生成间距工具类
@mixin generate-spacing-classes($property, $prefix) {
  @each $name, $value in $spacing {
    .#{$prefix}-#{$name} {
      #{$property}: $value;
    }
    .#{$prefix}x-#{$name} {
      #{$property}-left: $value;
      #{$property}-right: $value;
    }
    .#{$prefix}y-#{$name} {
      #{$property}-top: $value;
      #{$property}-bottom: $value;
    }
    .#{$prefix}t-#{$name} {
      #{$property}-top: $value;
    }
    .#{$prefix}r-#{$name} {
      #{$property}-right: $value;
    }
    .#{$prefix}b-#{$name} {
      #{$property}-bottom: $value;
    }
    .#{$prefix}l-#{$name} {
      #{$property}-left: $value;
    }
  }
}
```

## 3. 基础样式 (_base.scss)

```scss
// 重置和基础样式
*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: theme('borderColor.DEFAULT', currentColor);
}

// 容器类
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  
  @include screen('sm') {
    max-width: 640px;
  }
  @include screen('md') {
    max-width: 768px;
  }
  @include screen('lg') {
    max-width: 1024px;
  }
  @include screen('xl') {
    max-width: 1280px;
  }
  @include screen('2xl') {
    max-width: 1536px;
  }
}
```

## 4. 布局类 (_layout.scss)

```scss
// 显示
.block { display: block; }
.inline-block { display: inline-block; }
.inline { display: inline; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.grid { display: grid; }
.inline-grid { display: inline-grid; }
.hidden { display: none; }

// 定位
.static { position: static; }
.fixed { position: fixed; }
.absolute { position: absolute; }
.relative { position: relative; }
.sticky { position: sticky; }

// 定位方向
.inset-0 { inset: 0; }
.top-0 { top: 0; }
.right-0 { right: 0; }
.bottom-0 { bottom: 0; }
.left-0 { left: 0; }

// Z-index
@for $i from 0 through 10 {
  .z-#{$i} {
    z-index: $i;
  }
}
.z-auto { z-index: auto; }
```

## 5. Flex布局 (_flexbox.scss)

```scss
// 方向
.flex-row { flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-col { flex-direction: column; }
.flex-col-reverse { flex-direction: column-reverse; }

// 包装
.flex-wrap { flex-wrap: wrap; }
.flex-wrap-reverse { flex-wrap: wrap-reverse; }
.flex-nowrap { flex-wrap: nowrap; }

// 对齐
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-evenly { justify-content: space-evenly; }

.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.items-center { align-items: center; }
.items-baseline { align-items: baseline; }
.items-stretch { align-items: stretch; }

// Flex项目
.flex-1 { flex: 1 1 0%; }
.flex-auto { flex: 1 1 auto; }
.flex-initial { flex: 0 1 auto; }
.flex-none { flex: none; }

// Order
@for $i from 1 through 12 {
  .order-#{$i} {
    order: $i;
  }
}
```

## 6. 间距 (_spacing.scss)

```scss
// 生成padding和margin类
@include generate-spacing-classes('padding', 'p');
@include generate-spacing-classes('margin', 'm');

// 负margin
@each $name, $value in $spacing {
  @if $name != '0' {
    .-m-#{$name} {
      margin: -$value;
    }
    .-mx-#{$name} {
      margin-left: -$value;
      margin-right: -$value;
    }
    // 其他方向的负margin...
  }
}

// 间距gap
@each $name, $value in $spacing {
  .gap-#{$name} {
    gap: $value;
  }
  .gap-x-#{$name} {
    column-gap: $value;
  }
  .gap-y-#{$name} {
    row-gap: $value;
  }
}
```

## 7. 排版 (_typography.scss)

```scss
// 字体大小
@each $name, $value in $font-sizes {
  .text-#{$name} {
    font-size: $value;
  }
}

// 字体粗细
.font-thin { font-weight: 100; }
.font-extralight { font-weight: 200; }
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
.font-black { font-weight: 900; }

// 文本对齐
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

// 文本装饰
.underline { text-decoration: underline; }
.line-through { text-decoration: line-through; }
.no-underline { text-decoration: none; }

// 行高
.leading-none { line-height: 1; }
.leading-tight { line-height: 1.25; }
.leading-snug { line-height: 1.375; }
// ...其他行高
```

## 8. 背景 (_backgrounds.scss)

```scss
// 生成颜色类
@each $color-name, $color-map in $colors {
  @if type-of($color-map) == 'map' {
    @include generate-color-classes($color-name, $color-map);
  } @else {
    .bg-#{$color-name} {
      background-color: $color-map;
    }
    .text-#{$color-name} {
      color: $color-map;
    }
    .border-#{$color-name} {
      border-color: $color-map;
    }
  }
}

// 背景大小
.bg-auto { background-size: auto; }
.bg-cover { background-size: cover; }
.bg-contain { background-size: contain; }

// 背景位置
.bg-center { background-position: center; }
.bg-top { background-position: top; }
.bg-right { background-position: right; }
// ...其他位置
```

## 9. 边框 (_borders.scss)

```scss
// 边框宽度
.border-0 { border-width: 0; }
.border-2 { border-width: 2px; }
.border-4 { border-width: 4px; }
.border-8 { border-width: 8px; }
.border { border-width: 1px; }

// 边框方向
.border-t-0 { border-top-width: 0; }
.border-r-0 { border-right-width: 0; }
// ...其他方向

// 圆角
@each $name, $value in $border-radius {
  .rounded-#{$name} {
    border-radius: $value;
  }
  .rounded-t-#{$name} {
    border-top-left-radius: $value;
    border-top-right-radius: $value;
  }
  // ...其他方向的圆角
}
```

## 10. 效果 (_effects.scss)

```scss
// 阴影
@each $name, $value in $box-shadow {
  .shadow-#{$name} {
    box-shadow: #{$value};
  }
}

// 透明度
@for $i from 0 through 100 {
  .opacity-#{$i} {
    opacity: $i * 0.01;
  }
}

// 混合模式
.mix-blend-normal { mix-blend-mode: normal; }
.mix-blend-multiply { mix-blend-mode: multiply; }
// ...其他混合模式
```

## 11. 主文件 (main.scss)

```scss
// 导入所有工具类
@use 'utilities/variables';
@use 'utilities/mixins';
@use 'utilities/base';
@use 'utilities/layout';
@use 'utilities/flexbox';
@use 'utilities/grid';
@use 'utilities/spacing';
@use 'utilities/typography';
@use 'utilities/backgrounds';
@use 'utilities/borders';
@use 'utilities/effects';

// 生成响应式类
@each $breakpoint, $value in variables.$breakpoints {
  @include mixins.screen($breakpoint) {
    // 布局
    .#{$breakpoint}\:block { display: block; }
    .#{$breakpoint}\:flex { display: flex; }
    .#{$breakpoint}\:hidden { display: none; }
    
    // 方向
    .#{$breakpoint}\:flex-row { flex-direction: row; }
    .#{$breakpoint}\:flex-col { flex-direction: column; }
    
    // 间距
    @each $name, $val in variables.$spacing {
      .#{$breakpoint}\:p-#{$name} { padding: $val; }
      .#{$breakpoint}\:m-#{$name} { margin: $val; }
    }
    
    // 这里可以添加更多响应式类...
  }
}
```

## 使用示例

```html
<!-- 响应式卡片布局 -->
<div class="container mx-auto p-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-2">Card Title</h3>
      <p class="text-gray-600">Lorem ipsum dolor sit amet.</p>
      <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Learn More
      </button>
    </div>
    <!-- 更多卡片... -->
  </div>
</div>

<!-- 响应式导航 -->
<nav class="bg-gray-800 text-white p-4">
  <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div class="text-2xl font-bold">Logo</div>
    <div class="mt-4 md:mt-0 flex space-x-6">
      <a href="#" class="hover:text-blue-300 transition">Home</a>
      <a href="#" class="hover:text-blue-300 transition">About</a>
      <a href="#" class="hover:text-blue-300 transition">Contact</a>
    </div>
  </div>
</nav>
```

