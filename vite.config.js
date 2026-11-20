import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/COCOBREW-First-project/',
  plugins: [react()],
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
