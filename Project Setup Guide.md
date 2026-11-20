# Vite + React (JavaScript) + Tailwind CSS + shadcn/ui Setup Guide

A complete, step-by-step reference for setting up a modern React project using Vite, ESLint, Tailwind CSS v4, and shadcn/ui.

---

## 1. Scaffold the Project

Run the Vite creation command:

```bash
npm create vite@latest my-app -- --template react
```

Navigate into your project directory and install initial dependencies:

```bash
cd my-app
npm install
```

---

## 2. Install Tailwind CSS v4 & Node Types

Install Tailwind CSS along with the official Vite plugin and `@types/node` (for handling path resolutions):

```bash
npm install tailwindcss @tailwindcss/vite
npm install -D @types/node
```

---

## 3. Configure Path Aliases & Vite

shadcn/ui requires path aliases (mapping `@/*` to `./src/*`) to locate components and utilities.

### A. Create `jsconfig.json`
In the root directory of your project (alongside `package.json`), create `jsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### B. Update `vite.config.js`
Open `vite.config.js` and configure the Tailwind plugin along with the `@` path alias:

```javascript
import path from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

---

## 4. Setup Tailwind CSS

Replace the entire content of `src/index.css` with the Tailwind CSS import:

```css
@import "tailwindcss";
```

You can delete `src/App.css` and remove its import from `src/App.jsx`.

---

## 5. Initialize shadcn/ui

Run the shadcn initialization command:

```bash
npx shadcn@latest init
```

### CLI Selection Guide:
* **Component library:** `Base UI (Recommended)`
* **Style Preset:** `Nova - Lucide / Geist` (recommended default)
* When prompted for paths, accept the defaults as your `jsconfig.json` and `src/index.css` will be detected automatically.

---

## 6. (Optional but Recommended) Tailwind Class Sorting

To automatically keep utility classes sorted inside JSX and shadcn's `cn()` function:

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

Create a `.prettierrc` file in the project root:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindFunctions": ["cn", "cva"]
}
```

---

## 7. Adding & Using Components

To add any shadcn component, run:

```bash
npx shadcn@latest add button
```

Use it directly inside `src/App.jsx`:

```jsx
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}
```

---

## 8. Start Development Server

```bash
npm run dev
```