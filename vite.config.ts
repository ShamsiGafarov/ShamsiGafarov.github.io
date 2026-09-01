import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

// GitHub Pages serves the site from a sub-path, so all built asset
// references need to be relative rather than root-absolute.
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        project: fileURLToPath(new URL('./src/pages/project.html', import.meta.url)),
      },
    },
  },
});
