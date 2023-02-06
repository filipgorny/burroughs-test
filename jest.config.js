var path = require('path');

module.exports = {
  "roots": [
    "<rootDir>"
  ],
  "transform": {
    "^.+\\.ts?$": "ts-jest"
  },
  rootDir: path.join(__dirname, './tests'),
  testMatch: [path.join(__dirname, '**/*.ts')]
}
