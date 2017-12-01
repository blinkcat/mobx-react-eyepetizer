module.exports = {
  verbose: true,
  mapCoverage: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'ts-jest-tsconfig.json',
      babelConfig: {
        plugins: ['syntax-dynamic-import']
      },
      useBabelrc: true
    }
  }
};
