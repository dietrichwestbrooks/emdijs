import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const globals = {
    'rxjs': 'rxjs',
    'rxjs/operators': 'rxjs.operators',
    'utf8': 'utf8',
    'browser-xml2js': 'xml2js'
};

export default {
    input: './project/index.ts',
    output: [{
            file: pkg.main,
            sourcemap: true,
            format: 'cjs'
        },
        {
            name: 'emdi',
            file: pkg.browser,
            format: 'umd',
            globals: globals,
            sourcemap: true,
            exports: 'named',
            amd: {
                id: 'emdi'
            }
        }
    ],
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true
        }),
        commonjs({
            extensions: ['.js', '.ts']
        })
    ]
};