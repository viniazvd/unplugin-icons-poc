import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue2'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Vue(),
    Components({ resolvers: [ IconsResolver() ] }),
    Icons({ compiler: 'vue2' })
  ]
})
