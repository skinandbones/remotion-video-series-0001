import {Sequence, useVideoConfig} from 'remotion';
import VideoWithTransition from './VideoWithTransition';

export const VideoSeries = () => {
	const {fps} = useVideoConfig();

	return (
		<div className="absolute inset-0 grid place-items-center">
			<Sequence durationInFrames={20 * fps}>
				<VideoWithTransition src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
			</Sequence>
			<Sequence from={20 * fps - fps} durationInFrames={20 * fps}>
				<VideoWithTransition src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
			</Sequence>
			<Sequence from={2 * 20 * fps - 2 * fps} durationInFrames={20 * fps}>
				<VideoWithTransition src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" />
			</Sequence>
		</div>
	);
};
