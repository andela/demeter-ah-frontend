const { defaults } = require('jest-config');

module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'node',
  verbose: true,
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/stylesMock.js',
    '\\.(jpg|gif|ttf|otf|eot|svg)$': '<rootDir>/__mocks__/filesMock.js',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js'],
  setupFilesAfterEnv: ['./src/setupTest/setupTest.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
