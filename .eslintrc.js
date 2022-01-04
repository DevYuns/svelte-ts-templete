module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@dooboo/eslint-config-svelte'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
