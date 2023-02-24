import {Sequence, useVideoConfig} from 'remotion';
import GradientBackground from './GradientBackground';
import VideoWithTransition from './VideoWithTransition';

export const MyComposition = () => {
	const {fps} = useVideoConfig();

	return (
		<div className="absolute inset-0 grid place-items-center">
			<GradientBackground />
			<Sequence durationInFrames={60 * fps}>
				<VideoWithTransition src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
			</Sequence>
			<Sequence from={60 * fps - fps} durationInFrames={60 * fps}>
				<VideoWithTransition src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
			</Sequence>
			<Sequence from={2 * 60 * fps - 2 * fps} durationInFrames={60 * fps}>
				<VideoWithTransition src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" />
			</Sequence>
		</div>
	);
};
