module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            isolatedModules: true,
            collectCoverage: true,
            coverageDirectory: 'coverage',
            coverageReporters: ['text', 'lcov'],
        }],
    },
};