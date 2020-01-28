module.exports = {
  root: true,
  extends: [
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 9,
    "sourceType": "module",
  },
  rules: {
   'consistent-this': ['error', 'self'],
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
