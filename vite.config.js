import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/special/shinnouhai2023/",
  root: "./",
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "pc.html"),
      },
    },
  },
})
