import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist'], // Ignore the dist folder
  },
  {
    files: ['**/*.{js,jsx}'], // Match all JavaScript and JSX files
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript version
      globals: globals.browser, // Include browser globals
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Enable JSX
        sourceType: 'module', // Use ES Modules
      },
    },
    settings: {
      react: { version: 'detect' }, // Automatically detect React version
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, // Use recommended rules from @eslint/js
      ...react.configs.recommended.rules, // React recommended rules
      ...react.configs['jsx-runtime'].rules, // JSX runtime rules
      ...reactHooks.configs.recommended.rules, // React hooks recommended rules
      'react/jsx-no-target-blank': 'off', // Disable no target blank rule
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
