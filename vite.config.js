import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to '/' for custom domain (anikin.ca) or Vercel
// If deploying to GitHub Pages at username.github.io/repo-name, change to '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
