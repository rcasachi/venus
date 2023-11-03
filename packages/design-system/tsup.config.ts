import { defineConfig, Options } from 'tsup'

const commonConfig: Options = {
  minify: true,
  dts: true,
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  external: ['react'],
  treeshake: true,
  splitting: true,
  minifyIdentifiers: false,
  keepNames: true,
  minifySyntax: false,
}

export default defineConfig([
  {
    ...commonConfig,
    esbuildOptions: (options) => {
      if (options.platform === 'browser') {
        options.banner = {
          js: '"use client";',
        }
      }
    },
    entry: ['src/index.tsx'],
    outDir: 'dist',
  },
])
