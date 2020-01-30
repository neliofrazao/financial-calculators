module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  preset: 'ts-jest',
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
      statements: 15,
      branches: 10,
      functions: 15,
      lines: 15,
    },
  },
};
