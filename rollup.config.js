import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import json from "@rollup/plugin-json";
import livereload from 'rollup-plugin-livereload';
import postcss from 'postcss';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import svelte from 'rollup-plugin-svelte';
import {terser} from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		// eslint-disable-next-line
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
	
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true,
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		},
	};
}

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'dean',
		file: 'public/build/bundle.js',
	},
	plugins: [
		svelte(require('./svelte.config')),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		css({output: 'bundle.css'}),
		scss({
			output: 'public/build/assets.css',
			processor: (css) => postcss([autoprefixer])
				.process(css)
				.then((result) => result.css),
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production,
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),

		json(),
	],
	watch: {
		clearScreen: false,
	},
};
