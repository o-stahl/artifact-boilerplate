#!/bin/bash

# Create a new directory for the project
mkdir -p artifact-boilerplate-test
cd artifact-boilerplate-test

# Initialize Next.js project with specific versions
npx create-next-app@latest . --typescript --tailwind --eslint --use-npm \
  --ts --src-dir --import-alias "@/*" --tailwind \
  --no-app-router

# Install dependencies with specific versions and legacy peer deps
npm install --legacy-peer-deps \
  react@18.2.0 \
  react-dom@18.2.0 \
  lucide-react@0.263.1 \
  recharts@2.10.3 \
  mathjs@12.3.0 \
  lodash@4.17.21 \
  papaparse@5.4.1 \
  xlsx@0.18.5

# Install shadcn/ui CLI globally
npm install -g shadcn-ui

# Initialize shadcn/ui with specific configuration
echo '{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}' > components.json

# Install shadcn/ui components
components=(
  "accordion"
  "alert"
  "alert-dialog"
  "aspect-ratio"
  "avatar"
  "badge"
  "button"
  "calendar"
  "card"
  "carousel"
  "checkbox"
  "collapsible"
  "command"
  "context-menu"
  "dialog"
  "dropdown-menu"
  "form"
  "hover-card"
  "input"
  "label"
  "menubar"
  "navigation-menu"
  "popover"
  "progress"
  "radio-group"
  "scroll-area"
  "select"
  "separator"
  "sheet"
  "skeleton"
  "slider"
  "switch"
  "table"
  "tabs"
  "textarea"
  "toast"
  "toggle"
  "tooltip"
)

for component in "${components[@]}"; do
  npx shadcn-ui@latest add "$component" --yes
done

# Install additional Tailwind plugins
npm install -D \
  @tailwindcss/typography@0.5.10 \
  @tailwindcss/forms@0.5.7 \
  @tailwindcss/aspect-ratio@0.4.2 \
  @tailwindcss/line-clamp@0.4.4

echo "Setup completed! You can now start adding your components."