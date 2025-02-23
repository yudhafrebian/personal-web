module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:@next/next/recommended',
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
    },
  };
  