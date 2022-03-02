const config = {
  preset: '@stencil/core/testing',
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'text'],
  modulePathIgnorePatterns: ['/bin', '/www'],
  testPathIgnorePatterns: [
    '<rootDir>/.cache/',
    '<rootDir>/.github/',
    '<rootDir>/.stencil/',
    '<rootDir>/.vscode/',
    '<rootDir>/bin/',
    '<rootDir>/build/',
    '<rootDir>/cli/',
    '<rootDir>/compiler/',
    '<rootDir>/dev-server/',
    '<rootDir>/dist/',
    '<rootDir>/internal/',
    '<rootDir>/mock-doc/',
    '<rootDir>/node_modules/',
    '<rootDir>/screenshot/',
    '<rootDir>/sys/',
    '<rootDir>/test/',
    '<rootDir>/testing/',
  ],
  testRegex: '/(src|scripts)/.*\\.spec\\.(ts|tsx|js)$',
  // TODO(STENCIL-307): Move away from Jasmine runner for internal Stencil tests, which involves re-working environment
  // setup
  testRunner: 'jest-jasmine2'
};
module.exports = config;