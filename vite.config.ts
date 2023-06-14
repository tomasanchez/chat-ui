import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
        alias: {
            '~bootstrap': path.resolve(new URL('./', import.meta.url).pathname, 'node_modules/bootstrap'),
        },
    },
})
