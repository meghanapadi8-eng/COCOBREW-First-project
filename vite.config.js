import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

// GitHub Pages serves this repo under /COCOBREW-First-project/, but Netlify
// serves it from the domain root. Netlify sets NETLIFY=true during builds.
const base = process.env.NETLIFY ? '/' : '/COCOBREW-First-project/'

// main.js is a classic (non-module) script and the product images it references
// are plain filename strings, so Vite never emits them. Copy them into dist as-is.
const STATIC_FILE = /\.(js|jpe?g|png|webp|gif|svg|mp4)$/i
const copyStaticFiles = () => ({
  name: 'copy-static-files',
  apply: 'build',
  closeBundle() {
    const outDir = resolve(root, 'dist')
    for (const file of readdirSync(root)) {
      if (STATIC_FILE.test(file) && file !== 'vite.config.js') {
        copyFileSync(resolve(root, file), resolve(outDir, file))
      }
    }
  },
})

export default defineConfig({
  base,
  plugins: [react(), copyStaticFiles()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        coffee: 'coffee.html',
        cocoa: 'cocoa.html',
        chocolate: 'chocolate.html',
        giftPack: 'gift pack.html',
        order: 'order.html',
      },
    },
  },
})
