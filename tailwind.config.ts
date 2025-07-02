// tailwind.config.ts
const config: { mode: string; darkMode: string; content: string[] } = {
  content: [
    // 你的项目文件路径...
    "./src/components/ui/**/*.{jx,ts,tsx,jsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],

  darkMode: "class",
  mode: 'jit'
};

export default config;