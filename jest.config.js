module.exports = {
    setupFiles: ['./jestSetup.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.svelte$': 'svelte-jester',
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
}