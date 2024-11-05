import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/main.ts',
  },
  format: ['iife', 'esm'],
  outDir: 'dist',
  outExtension: ({ format }) => ({ js: `.${format}.js` }),
  target: 'esnext',
  minify: true,
  dts: true,
})
