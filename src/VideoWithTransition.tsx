import {
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';

export const VideoWithTransition = ({src}: {src: string}) => {
	const {width, height, fps, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();

	const translateX = interpolate(
		frame,
		[0, fps, durationInFrames - fps, durationInFrames],
		[100, 0, 0, -100],
		{
			easing: Easing.ease,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			className="absolute inset-0 grid place-items-center transform"
			style={{'--tw-translate-x': `${translateX}%`}}
		>
			<div style={{width: width * 0.8, height: height * 0.8}}>
				<Video
					className="w-full h-full object-cover rounded-3xl shadow-2xl"
					src={src}
				/>
			</div>
		</div>
	);
};

export default VideoWithTransition;
