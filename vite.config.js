import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars';
import path from 'path';
import fs from 'fs';

function getHtmlEntries() {
    const pagesDir = path.resolve(__dirname, "src");
    const entries = {};

    // Read all files in the directory
    const files = fs.readdirSync(pagesDir);

    // Filter out HTML files
    const htmlFiles = files.filter((file) => file.endsWith(".html"));

    // Create entries for each HTML file
    htmlFiles.forEach((file) => {
        const name = path.basename(file, ".html");
        entries[name] = path.resolve(pagesDir, file);
    });

    return entries;
}
export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
      rollupOptions: {
          input: getHtmlEntries(),
        }
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
