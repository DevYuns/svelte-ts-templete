const sveltePreprocess = require('svelte-preprocess');
const autoprefixer = require('autoprefixer');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  preprocess: sveltePreprocess({ 
    // enable run-time checks when not in production
      sourceMap: !production,
      scss: {
          prependData: `@import 'src/assets/scss/variables.scss';`,
      },
      postcss: {
          Plugins: [
            autoprefixer(),
            require('precss'),
            require('postcss-import'),
            require('postcss-cssnext'),
          ],
      },
      typescript: {
        tsconfigFile: './tsconfig.json',
      },
    }),
  compilerOptions: {
    dev: !production,
  },
};