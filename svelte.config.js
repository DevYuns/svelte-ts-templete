const sveltePreprocess = require('svelte-preprocess');
const autoprefixer = require('autoprefixer');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  preprocess: sveltePreprocess({ 
      sourceMap: !production,
      scss: {
          prependData: `@import 'src/assets/scss/variables.scss';`,
      },
      postcss: {
          Plugins: [autoprefixer()]
      }
    }),
  compilerOptions: {
    dev: !production
  }
};