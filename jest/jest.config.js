module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '../',
  moduleNameMapper: {
    ['\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$']: '<rootDir>/jest/__mocks__/fileMock.js',
    ['\\.(css|scss)$']: '<rootDir>/jest/__mocks__/styleMock.js'
  }
};