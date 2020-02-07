module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
      importHelpers: true,
    },
  },
  'verbose': true,
  'testURL': 'http://localhost/',
  preset: 'ts-jest',
  'automock': false,
  testEnvironment: 'jest-environment-jsdom',
  'setupFilesAfterEnv': ['./src/tests/setup.js'],
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/tests/**',
    '!**/__server_tests__/**',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
