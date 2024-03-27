const path = require('path')
const {defineConfig} = require('vite')
import dts from 'vite-plugin-dts';
import removeConsole from "vite-plugin-remove-console";

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'lib/main.ts'),
            name: 'copy-code',
            fileName: (format) => `copy-code.${format}.js`
        }
    },
    plugins: [
        dts(),
        removeConsole()
    ]
});
