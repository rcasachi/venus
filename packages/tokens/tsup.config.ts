import { defineConfig, Options } from 'tsup'

const commonConfig: Options = {
  minify: true,
  dts: true,
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
}

export default defineConfig([
  {
    ...commonConfig,
    esbuildOptions: (options) => {
      options.banner = {
        js: '"use client";',
      }
    },
    entry: ['src/index.ts'],
    outDir: 'dist',
  },
])
