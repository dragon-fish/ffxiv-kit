import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/console-plus' : '',
  plugins: [
    Vue({}),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        'pinia',
        '@vueuse/core',
        {
          fexios: [
            ['Fexios', 'Fexios'],
            ['default', 'fexios'],
          ],
        },
      ],
      dirs: ['src/components/**', 'src/stores', 'src/utils', 'src/models'],
    }),
    Components({
      dts: 'src/vue-components.d.ts',
      resolvers: [],
    }),
    UnoCSS({
      // mode: 'vue-scoped',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 1414,
  },
})
