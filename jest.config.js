module.exports = {
    setupFiles: ['./jestSetup.ts'],
    transform: {
        '^.+\\.(ts)$': 'ts-jest',
        '^.+\\.svelte$': ['svelte-jester', {
          'preprocess': './svelte.config.js',
        }],
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?|svelte?)$',
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