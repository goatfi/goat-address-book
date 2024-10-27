import { defineConfig } from 'tsup';
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';

// https://github.com/egoist/tsup/issues/953
export default defineConfig([
    {
        format: ['cjs', 'esm'],
        entry: ['src/**/*.ts', 'src/**/*.json'],
        outDir: './dist',
        bundle: true,
        sourcemap: true,
        // clean: true,
        splitting: false,
        dts: true,
        esbuildPlugins: [esbuildPluginFilePathExtensions({ cjsExtension: 'js' })],
    }
]);