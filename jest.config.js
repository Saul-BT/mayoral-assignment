/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');

const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Map our typescript aliases to the jest config
const moduleNameMapper = compilerOptions.paths ? Object.keys(compilerOptions.paths).reduce((acc, key) => {
  const path = compilerOptions.paths[key];
  return {
    ...acc,
    [`^${key.replace('*', '(.*)')}$`]: path.map((p) => `<rootDir>/src/${p.replace('*', '$1')}`),
  };
}, {}) : {};

// Any custom config you want to pass to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper,
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
