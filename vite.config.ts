import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
   plugins: [
      vue(),
      AutoImport({
         imports: 'vue'
      }),
      Components({
         dts: true
      })
   ],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src')
      }
   }
})
