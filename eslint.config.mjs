import eslint from '@eslint/js';
import typescript from '@typescript-eslint/parser';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescript,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      'no-restricted-exports': 'off',
    },
  },
];
