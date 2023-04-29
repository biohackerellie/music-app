import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			'/api/songs': {
				target: 'https://api.epklabs.com:',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	plugins: [react()],
})
