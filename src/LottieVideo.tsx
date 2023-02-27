import {LottieBackground} from './LottieBackground';
import {VideoSeries} from './VideoSeries';

export const LottieVideo = () => {
	return (
		<div className="absolute inset-0 grid place-items-center">
			<LottieBackground />
			<VideoSeries />
		</div>
	);
};
