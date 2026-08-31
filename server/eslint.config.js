import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
    {
        ignores: ['node_modules/**', 'logs/**', 'coverage/**'],
    },
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: {
                ...globals.node,
            },
        },
        rules: {
            'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            'no-console': 'warn',
            eqeqeq: ['error', 'always'],
            'prefer-const': 'error',
        },
    },
    {
        files: ['tests/**/*.js', '**/*.test.js'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
    prettier,
];
