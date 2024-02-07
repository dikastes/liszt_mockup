import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
    base: '/liszt_mockup/',
  server: {
    port: 8080
  },
    css: {
        devSourcemap: true
    },
   plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
}
