import copy from 'rollup-plugin-copy'
export default [
	{
		input: 'src/workers/BinaryDecoderWorker.js',
		output: {
			file: 'build/potree/workers/BinaryDecoderWorker.js',
			format: 'es',
			name: 'Potree',
			sourcemap: false
		},
		plugins: [
			copy({
				targets: [
					{ src: 'src/shaders.js', dest: 'build/shaders/' },
					{ src: 'src/viewer/potree.css', dest: 'build/potree/' },
					{ src: 'resources/icons/', dest: 'build/potree/resources/' },
					{ src: 'resources/textures/', dest: 'build/potree/resources/' },
					{ src: 'resources/images/', dest: 'build/potree/resources/' }
				]
			})]
	},
	{
		input: 'src/Potree.js',
		treeshake: false,
		output: {
			file: 'build/potree/potree.js',
			format: 'umd',
			name: 'Potree',
			sourcemap: true,
		}
	}, {
		input: 'src/modules/loader/2.0/DecoderWorker.js',
		output: {
			file: 'build/potree/workers/2.0/DecoderWorker.js',
			format: 'es',
			name: 'Potree',
			sourcemap: false
		}
	}, {
		input: 'src/modules/loader/2.0/DecoderWorker_brotli.js',
		output: {
			file: 'build/potree/workers/2.0/DecoderWorker_brotli.js',
			format: 'es',
			name: 'Potree',
			sourcemap: false
		}
	}
]