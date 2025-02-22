import { FlatCompat } from '@eslint/eslintrc';
import typescriptParser from '@typescript-eslint/parser';
import unusedImports from 'eslint-plugin-unused-imports';

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // 'unused-imports/no-unused-imports-ts': 'error',
      'unused-imports/no-unused-imports': 'error',
      'no-unused-vars': 'off',
    },
  },
];
