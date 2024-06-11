import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/ErickAguilar95/ErickAguilar95-funny-challenge-simple-coffee-listing'
})
