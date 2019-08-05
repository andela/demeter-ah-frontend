const { defaults } = require('jest-config');

module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
  verbose: true,
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mock__/stylesMock.js',
    '\\.(jpg|jpeg|png|gif|ttf|otf|eot|svg)$': '<rootDir>/__mock__/filesMock.js',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js'],
  setupFilesAfterEnv: ['./tests/setupTest.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: ['/src/utils/'],
};
