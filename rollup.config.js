import { defineConfig } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import polyfills from 'rollup-plugin-node-polyfills'
import json from '@rollup/plugin-json'

const plugins = [
    nodeResolve({
        preferBuiltins: false
    }),
    commonjs(),
    polyfills(),
    json()
]

export default defineConfig(['index'].map(name => ({
    input: `${name}.js`,
    output: {
        file: `dist/${name}.js`,
    },
    plugins
})
))