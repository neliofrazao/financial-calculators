module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
      importHelpers: true,
    },
  },
  preset: 'ts-jest',
  'automock': false,
  testEnvironment: 'node',
  'setupFilesAfterEnv': ['./src/tests/setup.js'],
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/tests/**',
    '!**/__server_tests__/**',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
};
