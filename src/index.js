import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import '../src/css/main.css'

export default defineConfig({
    plugins: [react()],
    base: '/portfolio/',
})