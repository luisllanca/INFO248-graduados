module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: [
      "/node_modules/",
      "/ignore-tests/",
      "/dist/",
      // "/*comprobantes.route.test.ts",
      // "/*estudiante.route.test.ts",
      // "/*personaladministrativo.route.test.ts",
      // "/*usuario.route.test.ts",
      

    ]
  };