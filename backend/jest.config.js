module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: [
      "/node_modules/",
      "/ignore-tests/",
      "/dist/"
    ]
  };