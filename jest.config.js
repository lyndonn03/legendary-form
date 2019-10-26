module.exports = {
  preset: "ts-jest",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "/__tests__/.*\\.test.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/setupTests.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!app/react/__tests__/api/api-test-helpers.ts"
  ]
};
