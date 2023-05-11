module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
    globalSetup: './test/setup.js',
    globalTeardown: './test/teardown.js',
};
