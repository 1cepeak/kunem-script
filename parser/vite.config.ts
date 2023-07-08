/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
    target: 'node18',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      fileName: (format) => `parser.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'node:path',
        'node:fs',
      ],
    },
  },
  test: {},
});
