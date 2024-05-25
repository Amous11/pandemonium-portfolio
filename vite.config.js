import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base : "https://amous11.github.io/pandemonium-portfolio/",
  plugins: [react()],
})
