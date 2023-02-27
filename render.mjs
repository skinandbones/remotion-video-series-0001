/* eslint-disable no-undef */
import {bundle} from '@remotion/bundler';
import {getCompositions, renderMedia} from '@remotion/renderer';
import {createRequire} from 'node:module';
import {RenderInternals} from '@remotion/renderer';

const require = createRequire(import.meta.url);

const serveUrl = process.env.SERVE_URL;

if (serveUrl) {
	console.log('Using serve url:', serveUrl);
}

const bundled =
	serveUrl ||
	(await bundle({
		entryPoint: require.resolve('./src/index.ts'),
		// If you have a Webpack override, make sure to import it here
		webpackOverride: (config) => config,
	}));

const compositionId = process.env.COMPOSITION || 'GradientVideo';
const concurrency = parseInt(process.env.CONCURRENCY || '1', 10);

const compositions = await getCompositions(bundled);

// Select the composition you want to render.
const composition = compositions.find((c) => c.id === compositionId);

console.log('Starting to render composition', composition.id);

await renderMedia({
	codec: 'h264',
	composition,
	serveUrl: bundled,
	outputLocation: `out/${composition.id}.mp4`,
	concurrency,
	onProgress: ({renderedFrames, renderedDoneIn}) => {
		if (renderedDoneIn) {
			console.log(
				`Rendered ${renderedFrames} frames in ${renderedDoneIn}ms (${
					renderedFrames / (renderedDoneIn / 1000)
				} fps))`
			);
		} else if (!renderedDoneIn) {
			console.log(`Rendered ${renderedFrames} frames`);
		}
	},
});

console.log(`Rendering composition ${composition.id}...`);

RenderInternals.perf.logPerf();