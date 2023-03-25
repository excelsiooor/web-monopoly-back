module.exports = {
  root: true,

  env: {
    node: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  rules: {
    semi: 'error',
    'prefer-const': 'error',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parser: '@typescript-eslint/parser',

      plugins: ['prettier'],

      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: __dirname,
        sourceType: 'module',

        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            semi: false,
            tabWidth: 2,
            printWidth: 120,
            bracketSpacing: true,
            jsxBracketSameLine: false,
            arrowParens: 'avoid',
            trailingComma: 'all',
          },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
      },
    },
  ],
};
