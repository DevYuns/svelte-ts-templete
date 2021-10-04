module.exports = {
    setupFiles: ['<rootDir>/test/jestSetup.ts'],
    transform: {
        '^.+\\.(ts)$': 'ts-jest',
        '^.+\\.svelte$': ['svelte-jester', {
          'preprocess': './svelte.config.js',
        }],
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?|svelte?)$',
    modulePaths: ['<rootDir>'],
    moduleFileExtensions: ['js', 'ts', 'svelte'],
    modulePathIgnorePatterns: ['dist', 'build'],
    testEnvironment: 'jsdom',
    globals: {
        window: {},
        'ts-jest': {
          babelConfig: true,
          tsconfig: 'tsconfig.json',
        },
      },
};