module.exports = {
  roots: ['./test', './src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageReporters: ['clover', 'lcov', 'text'],
  coverageDirectory: './test/coverage/',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest',
        outputDirectory: './test/results',
        outputName: 'jest-results.xml',
      },
    ],
  ],
};
