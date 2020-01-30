module.exports = {
  root: true,
  parser:  '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 9,
    "sourceType": "module",
  },
  rules: {
   'consistent-this': ['error', 'self'],
   "@typescript-eslint/explicit-function-return-type": "off",
   'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
      },
    ],
    'import/no-extraneous-dependencies': 0,
  },
}
