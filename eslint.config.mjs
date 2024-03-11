import qwikPlugin from 'eslint-plugin-qwik';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        ecmaVersion: 'latest',
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    files: ['./src/**/*.t*', './src/*.ts*'],
    ignores: [
      '**/*.d.ts',
      '*.js',
      'src/tsconfig.json',
      'src/next-env.d.ts',
      'src/stories',
      'node_modules/**/*',
      '.storybook/**/*.ts*',
      'tests/**/*.ts*',
    ],
    plugins: {
      'qwik': qwikPlugin,
    },
    rules: {
      ...qwikPlugin.configs.recommended.rules,
      'qwik/jsx-no-script-url': 'off',
    },
  },
];
