import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 1600,
  },
  env: {
    VITE_Job_apiKey: 'AIzaSyCug4aOdTT4RV2cq8yQf4hSq79mkZxgZu8',
    VITE_Job_authDomain: 'job-heaven-2bee2.firebaseapp.com',
    VITE_Job_projectId: 'job-heaven-2bee2',
    VITE_Job_storageBucket: 'job-heaven-2bee2.appspot.com',
    VITE_Job_messagingSenderId: '1092106560214',
    VITE_Job_appId: '1:1092106560214:web:ad9b1d68ad1caf181b1f77',
  },
})
