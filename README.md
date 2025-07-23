/* Tailwind CSS v4 Common Utilities */

/* Layout: Aspect Ratio */
.aspect-auto { aspect-ratio: auto; }
.aspect-square { aspect-ratio: 1 / 1; }
.aspect-video { aspect-ratio: 16 / 9; }

/* Layout: Box Sizing */
.box-border { box-sizing: border-box; }
.box-content { box-sizing: content-box; }

/* Layout: Display */
.block { display: block; }
.inline-block { display: inline-block; }
.inline { display: inline; }
.flex { display: flex; }
.grid { display: grid; }
.none { display: none; }
.flow-root { display: flow-root; }

/* Layout: Overflow */
.overflow-auto { overflow: auto; }
.overflow-hidden { overflow: hidden; }
.overflow-scroll { overflow: scroll; }

/* Layout: Position */
.static { position: static; }
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }

/* Layout: Top / Right / Bottom / Left */
.top-0 { top: 0; }
.top-1 { top: 0.25rem; }
.top-2 { top: 0.5rem; }
.top-4 { top: 1rem; }
.top-6 { top: 1.5rem; }
.top-8 { top: 2rem; }
.top-12 { top: 3rem; }
.top-16 { top: 4rem; }
.top-24 { top: 6rem; }
.top-px { top: 1px; }
.-top-1 { top: -0.25rem; }
.-top-2 { top: -0.5rem; }
.-top-4 { top: -1rem; }
.-top-6 { top: -1.5rem; }
.-top-8 { top: -2rem; }
.right-0 { right: 0; }
.right-1 { right: 0.25rem; }
.right-2 { right: 0.5rem; }
.right-4 { right: 1rem; }
.right-6 { right: 1.5rem; }
.right-8 { right: 2rem; }
.right-12 { right: 3rem; }
.right-16 { right: 4rem; }
.right-24 { right: 6rem; }
.right-px { right: 1px; }
.-right-1 { right: -0.25rem; }
.-right-2 { right: -0.5rem; }
.-right-4 { right: -1rem; }
.-right-6 { right: -1.5rem; }
.-right-8 { right: -2rem; }
.bottom-0 { bottom: 0; }
.bottom-1 { bottom: 0.25rem; }
.bottom-2 { bottom: 0.5rem; }
.bottom-4 { bottom: 1rem; }
.bottom-6 { bottom: 1.5rem; }
.bottom-8 { bottom: 2rem; }
.bottom-12 { bottom: 3rem; }
.bottom-16 { bottom: 4rem; }
.bottom-24 { bottom: 6rem; }
.bottom-px { bottom: 1px; }
.-bottom-1 { bottom: -0.25rem; }
.-bottom-2 { bottom: -0.5rem; }
.-bottom-4 { bottom: -1rem; }
.-bottom-6 { bottom: -1.5rem; }
.-bottom-8 { bottom: -2rem; }
.left-0 { left: 0; }
.left-1 { left: 0.25rem; }
.left-2 { left: 0.5rem; }
.left-4 { left: 1rem; }
.left-6 { left: 1.5rem; }
.left-8 { left: 2rem; }
.left-12 { left: 3rem; }
.left-16 { left: 4rem; }
.left-24 { left: 6rem; }
.left-px { left: 1px; }
.-left-1 { left: -0.25rem; }
.-left-2 { left: -0.5rem; }
.-left-4 { left: -1rem; }
.-left-6 { left: -1.5rem; }
.-left-8 { left: -2rem; }

/* Layout: Visibility */
.visible { visibility: visible; }
.invisible { visibility: hidden; }

/* Layout: Z-Index */
.z-0 { z-index: 0; }
.z-10 { z-index: 10; }
.z-20 { z-index: 20; }
.z-30 { z-index: 30; }
.z-40 { z-index: 40; }
.z-50 { z-index: 50; }
.z-auto { z-index: auto; }

/* Flexbox & Grid: Flex Basis */
.basis-0 { flex-basis: 0; }
.basis-1 { flex-basis: 0.25rem; }
.basis-2 { flex-basis: 0.5rem; }
.basis-4 { flex-basis: 1rem; }
.basis-6 { flex-basis: 1.5rem; }
.basis-8 { flex-basis: 2rem; }
.basis-12 { flex-basis: 3rem; }
.basis-16 { flex-basis: 4rem; }
.basis-24 { flex-basis: 6rem; }
.basis-auto { flex-basis: auto; }
.basis-full { flex-basis: 100%; }
.basis-1\/2 { flex-basis: 50%; }
.basis-1\/3 { flex-basis: 33.333333%; }
.basis-2\/3 { flex-basis: 66.666667%; }
.basis-1\/4 { flex-basis: 25%; }
.basis-3\/4 { flex-basis: 75%; }

/* Flexbox & Grid: Flex Direction */
.flex-row { flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-col { flex-direction: column; }
.flex-col-reverse { flex-direction: column-reverse; }

/* Flexbox & Grid: Flex Wrap */
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }

/* Flexbox & Grid: Flex */
.flex-1 { flex: 1 1 0%; }
.flex-auto { flex: 1 1 auto; }
.flex-none { flex: none; }

/* Flexbox & Grid: Flex Grow */
.grow { flex-grow: 1; }
.grow-0 { flex-grow: 0; }

/* Flexbox & Grid: Flex Shrink */
.shrink { flex-shrink: 1; }
.shrink-0 { flex-shrink: 0; }

/* Flexbox & Grid: Grid Template Columns */
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

/* Flexbox & Grid: Grid Column */
.col-span-1 { grid-column: span 1 / span 1; }
.col-span-2 { grid-column: span 2 / span 2; }
.col-span-3 { grid-column: span 3 / span 3; }
.col-span-4 { grid-column: span 4 / span 4; }
.col-span-6 { grid-column: span 6 / span 6; }
.col-span-12 { grid-column: span 12 / span 12; }
.col-span-full { grid-column: 1 / -1; }

/* Flexbox & Grid: Grid Template Rows */
.grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr)); }
.grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr)); }
.grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr)); }

/* Flexbox & Grid: Grid Row */
.row-span-1 { grid-row: span 1 / span 1; }
.row-span-2 { grid-row: span 2 / span 2; }
.row-span-3 { grid-row: span 3 / span 3; }
.row-span-full { grid-row: 1 / -1; }

/* Flexbox & Grid: Gap */
.gap-0 { gap: 0; }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }
.gap-12 { gap: 3rem; }
.gap-16 { gap: 4rem; }
.gap-24 { gap: 6rem; }
.gap-px { gap: 1px; }
.gap-x-0 { column-gap: 0; }
.gap-x-1 { column-gap: 0.25rem; }
.gap-x-2 { column-gap: 0.5rem; }
.gap-x-4 { column-gap: 1rem; }
.gap-x-6 { column-gap: 1.5rem; }
.gap-x-8 { column-gap: 2rem; }
.gap-x-12 { column-gap: 3rem; }
.gap-x-16 { column-gap: 4rem; }
.gap-x-24 { column-gap: 6rem; }
.gap-x-px { column-gap: 1px; }
.gap-y-0 { row-gap: 0; }
.gap-y-1 { row-gap: 0.25rem; }
.gap-y-2 { row-gap: 0.5rem; }
.gap-y-4 { row-gap: 1rem; }
.gap-y-6 { row-gap: 1.5rem; }
.gap-y-8 { row-gap: 2rem; }
.gap-y-12 { row-gap: 3rem; }
.gap-y-16 { row-gap: 4rem; }
.gap-y-24 { row-gap: 6rem; }
.gap-y-px { row-gap: 1px; }

/* Flexbox & Grid: Justify Content */
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-evenly { justify-content: space-evenly; }

/* Flexbox & Grid: Align Items */
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.items-center { align-items: center; }
.items-baseline { align-items: baseline; }
.items-stretch { align-items: stretch; }

/* Flexbox & Grid: Align Self */
.self-auto { align-self: auto; }
.self-start { align-self: flex-start; }
.self-end { align-self: flex-end; }
.self-center { align-self: center; }
.self-stretch { align-self: stretch; }

/* Spacing: Padding */
.p-0 { padding: 0; }
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-4 { padding: 1rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }
.p-12 { padding: 3rem; }
.p-16 { padding: 4rem; }
.p-24 { padding: 6rem; }
.p-px { padding: 1px; }
.px-0 { padding-left: 0; padding-right: 0; }
.px-1 { padding-left: 0.25rem; padding-right: 0.25rem; }
.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.px-8 { padding-left: 2rem; padding-right: 2rem; }
.px-12 { padding-left: 3rem; padding-right: 3rem; }
.px-16 { padding-left: 4rem; padding-right: 4rem; }
.px-24 { padding-left: 6rem; padding-right: 6rem; }
.px-px { padding-left: 1px; padding-right: 1px; }
.py-0 { padding-top: 0; padding-bottom: 0; }
.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
.py-8 { padding-top: 2rem; padding-bottom: 2rem; }
.py-12 { padding-top: 3rem; padding-bottom: 3rem; }
.py-16 { padding-top: 4rem; padding-bottom: 4rem; }
.py-24 { padding-top: 6rem; padding-bottom: 6rem; }
.py-px { padding-top: 1px; padding-bottom: 1px; }
.pt-0 { padding-top: 0; }
.pt-1 { padding-top: 0.25rem; }
.pt-2 { padding-top: 0.5rem; }
.pt-4 { padding-top: 1rem; }
.pt-6 { padding-top: 1.5rem; }
.pt-8 { padding-top: 2rem; }
.pt-12 { padding-top: 3rem; }
.pt-16 { padding-top: 4rem; }
.pt-24 { padding-top: 6rem; }
.pt-px { padding-top: 1px; }
.pr-0 { padding-right: 0; }
.pr-1 { padding-right: 0.25rem; }
.pr-2 { padding-right: 0.5rem; }
.pr-4 { padding-right: 1rem; }
.pr-6 { padding-right: 1.5rem; }
.pr-8 { padding-right: 2rem; }
.pr-12 { padding-right: 3rem; }
.pr-16 { padding-right: 4rem; }
.pr-24 { padding-right: 6rem; }
.pr-px { padding-right: 1px; }
.pb-0 { padding-bottom: 0; }
.pb-1 { padding-bottom: 0.25rem; }
.pb-2 { padding-bottom: 0.5rem; }
.pb-4 { padding-bottom: 1rem; }
.pb-6 { padding-bottom: 1.5rem; }
.pb-8 { padding-bottom: 2rem; }
.pb-12 { padding-bottom: 3rem; }
.pb-16 { padding-bottom: 4rem; }
.pb-24 { padding-bottom: 6rem; }
.pb-px { padding-bottom: 1px; }
.pl-0 { padding-left: 0; }
.pl-1 { padding-left: 0.25rem; }
.pl-2 { padding-left: 0.5rem; }
.pl-4 { padding-left: 1rem; }
.pl-6 { padding-left: 1.5rem; }
.pl-8 { padding-left: 2rem; }
.pl-12 { padding-left: 3rem; }
.pl-16 { padding-left: 4rem; }
.pl-24 { padding-left: 6rem; }
.pl-px { padding-left: 1px; }

/* Spacing: Margin */
.m-0 { margin: 0; }
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-4 { margin: 1rem; }
.m-6 { margin: 1.5rem; }
.m-8 { margin: 2rem; }
.m-12 { margin: 3rem; }
.m-16 { margin: 4rem; }
.m-24 { margin: 6rem; }
.m-px { margin: 1px; }
.m-auto { margin: auto; }
.-m-1 { margin: -0.25rem; }
.-m-2 { margin: -0.5rem; }
.-m-4 { margin: -1rem; }
.-m-6 { margin: -1.5rem; }
.-m-8 { margin: -2rem; }
.mx-0 { margin-left: 0; margin-right: 0; }
.mx-1 { margin-left: 0.25rem; margin-right: 0.25rem; }
.mx-2 { margin-left: 0.5rem; margin-right: 0.5rem; }
.mx-4 { margin-left: 1rem; margin-right: 1rem; }
.mx-6 { margin-left: 1.5rem; margin-right: 1.5rem; }
.mx-8 { margin-left: 2rem; margin-right: 2rem; }
.mx-12 { margin-left: 3rem; margin-right: 3rem; }
.mx-16 { margin-left: 4rem; margin-right: 4rem; }
.mx-24 { margin-left: 6rem; margin-right: 6rem; }
.mx-px { margin-left: 1px; margin-right: 1px; }
.mx-auto { margin-left: auto; margin-right: auto; }
.-mx-1 { margin-left: -0.25rem; margin-right: -0.25rem; }
.-mx-2 { margin-left: -0.5rem; margin-right: -0.5rem; }
.-mx-4 { margin-left: -1rem; margin-right: -1rem; }
.-mx-6 { margin-left: -1.5rem; margin-right: -1.5rem; }
.-mx-8 { margin-left: -2rem; margin-right: -2rem; }
.my-0 { margin-top: 0; margin-bottom: 0; }
.my-1 { margin-top: 0.25rem; margin-bottom: 0.25rem; }
.my-2 { margin-top: 0.5rem; margin-bottom: 0.5rem; }
.my-4 { margin-top: 1rem; margin-bottom: 1rem; }
.my-6 { margin-top: 1.5rem; margin-bottom: 1.5rem; }
.my-8 { margin-top: 2rem; margin-bottom: 2rem; }
.my-12 { margin-top: 3rem; margin-bottom: 3rem; }
.my-16 { margin-top: 4rem; margin-bottom: 4rem; }
.my-24 { margin-top: 6rem; margin-bottom: 6rem; }
.my-px { margin-top: 1px; margin-bottom: 1px; }
.my-auto { margin-top: auto; margin-bottom: auto; }
.-my-1 { margin-top: -0.25rem; margin-bottom: -0.25rem; }
.-my-2 { margin-top: -0.5rem; margin-bottom: -0.5rem; }
.-my-4 { margin-top: -1rem; margin-bottom: -1rem; }
.-my-6 { margin-top: -1.5rem; margin-bottom: -1.5rem; }
.-my-8 { margin-top: -2rem; margin-bottom: -2rem; }
.mt-0 { margin-top: 0; }
.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-8 { margin-top: 2rem; }
.mt-12 { margin-top: 3rem; }
.mt-16 { margin-top: 4rem; }
.mt-24 { margin-top: 6rem; }
.mt-px { margin-top: 1px; }
.mt-auto { margin-top: auto; }
.-mt-1 { margin-top: -0.25rem; }
.-mt-2 { margin-top: -0.5rem; }
.-mt-4 { margin-top: -1rem; }
.-mt-6 { margin-top: -1.5rem; }
.-mt-8 { margin-top: -2rem; }
.mr-0 { margin-right: 0; }
.mr-1 { margin-right: 0.25rem; }
.mr-2 { margin-right: 0.5rem; }
.mr-4 { margin-right: 1rem; }
.mr-6 { margin-right: 1.5rem; }
.mr-8 { margin-right: 2rem; }
.mr-12 { margin-right: 3rem; }
.mr-16 { margin-right: 4rem; }
.mr-24 { margin-right: 6rem; }
.mr-px { margin-right: 1px; }
.mr-auto { margin-right: auto; }
.-mr-1 { margin-right: -0.25rem; }
.-mr-2 { margin-right: -0.5rem; }
.-mr-4 { margin-right: -1rem; }
.-mr-6 { margin-right: -1.5rem; }
.-mr-8 { margin-right: -2rem; }
.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-12 { margin-bottom: 3rem; }
.mb-16 { margin-bottom: 4rem; }
.mb-24 { margin-bottom: 6rem; }
.mb-px { margin-bottom: 1px; }
.mb-auto { margin-bottom: auto; }
.-mb-1 { margin-bottom: -0.25rem; }
.-mb-2 { margin-bottom: -0.5rem; }
.-mb-4 { margin-bottom: -1rem; }
.-mb-6 { margin-bottom: -1.5rem; }
.-mb-8 { margin-bottom: -2rem; }
.ml-0 { margin-left: 0; }
.ml-1 { margin-left: 0.25rem; }
.ml-2 { margin-left: 0.5rem; }
.ml-4 { margin-left: 1rem; }
.ml-6 { margin-left: 1.5rem; }
.ml-8 { margin-left: 2rem; }
.ml-12 { margin-left: 3rem; }
.ml-16 { margin-left: 4rem; }
.ml-24 { margin-left: 6rem; }
.ml-px { margin-left: 1px; }
.ml-auto { margin-left: auto; }
.-ml-1 { margin-left: -0.25rem; }
.-ml-2 { margin-left: -0.5rem; }
.-ml-4 { margin-left: -1rem; }
.-ml-6 { margin-left: -1.5rem; }
.-ml-8 { margin-left: -2rem; }

/* Sizing: Width */
.w-0 { width: 0; }
.w-1 { width: 0.25rem; }
.w-2 { width: 0.5rem; }
.w-4 { width: 1rem; }
.w-6 { width: 1.5rem; }
.w-8 { width: 2rem; }
.w-12 { width: 3rem; }
.w-16 { width: 4rem; }
.w-24 { width: 6rem; }
.w-px { width: 1px; }
.w-auto { width: auto; }
.w-full { width: 100%; }
.w-1\/2 { width: 50%; }
.w-1\/3 { width: 33.333333%; }
.w-2\/3 { width: 66.666667%; }
.w-1\/4 { width: 25%; }
.w-3\/4 { width: 75%; }

/* Sizing: Height */
.h-0 { height: 0; }
.h-1 { height: 0.25rem; }
.h-2 { height: 0.5rem; }
.h-4 { height: 1rem; }
.h-6 { height: 1.5rem; }
.h-8 { height: 2rem; }
.h-12 { height: 3rem; }
.h-16 { height: 4rem; }
.h-24 { height: 6rem; }
.h-px { height: 1px; }
.h-auto { height: auto; }
.h-full { height: 100%; }
.h-1\/2 { height: 50%; }
.h-1\/3 { height: 33.333333%; }
.h-2\/3 { height: 66.666667%; }
.h-1\/4 { height: 25%; }
.h-3\/4 { height: 75%; }

/* Typography: Font Size */
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.text-base { font-size: 1rem; line-height: 1.5rem; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }

/* Typography: Font Weight */
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-bold { font-weight: 700; }

/* Typography: Text Color */
.text-gray-200 { color: #e5e7eb; }
.text-gray-500 { color: #6b7280; }
.text-gray-800 { color: #1f2937; }
.text-blue-200 { color: #bfdbfe; }
.text-blue-500 { color: #3b82f6; }
.text-blue-800 { color: #1e40af; }
.text-red-200 { color: #fecaca; }
.text-red-500 { color: #ef4444; }
.text-red-800 { color: #991b1b; }

/* Borders: Border Width */
.border-0 { border-width: 0; }
.border { border-width: 1px; }
.border-2 { border-width: 2px; }
.border-4 { border-width: 4px; }

/* Borders: Border Color */
.border-gray-200 { border-color: #e5e7eb; }
.border-gray-500 { border-color: #6b7280; }
.border-gray-800 { border-color: #1f2937; }
.border-blue-200 { border-color: #bfdbfe; }
.border-blue-500 { border-color: #3b82f6; }
.border-blue-800 { border-color: #1e40af; }
.border-red-200 { border-color: #fecaca; }
.border-red-500 { border-color: #ef4444; }
.border-red-800 { border-color: #991b1b; }

/* Borders: Border Radius */
.rounded-none { border-radius: 0; }
.rounded-sm { border-radius: 0.125rem; }
.rounded { border-radius: 0.25rem; }
.rounded-md { border-radius: 0.375rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-xl { border-radius: 0.75rem; }
.rounded-full { border-radius: 9999px; }

/* Effects: Box Shadow */
.shadow-none { box-shadow: none; }
.shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
.shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1); }
.shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); }
.shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); }

/* Effects: Opacity */
.opacity-0 { opacity: 0; }
.opacity-50 { opacity: 0.5; }
.opacity-100 { opacity: 1; }