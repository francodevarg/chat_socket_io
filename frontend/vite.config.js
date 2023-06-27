import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //When you got the same Domain with backend and frontend
  server:{
    proxy:{
      '/socket.io':{
        target: 'http://localhost:4000/',
        ws:true,
      }
    }
  }
})
