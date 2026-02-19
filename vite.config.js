import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // O el plugin que uses

export default defineConfig({
  plugins: [react()],
  base: '/restaurante/', // <-- ESTA LÍNEA ES LA CLAVE
})
