import GradientBackground from './GradientBackground';
import {VideoSeries} from './VideoSeries';

export const GradientVideo = () => {
	return (
		<div className="absolute inset-0 grid place-items-center">
			<GradientBackground />
			<VideoSeries />
		</div>
	);
};
