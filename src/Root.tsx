import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import GradientBackground from './GradientBackground';
import {LottieBackground} from './LottieBackground';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="VideoSeries"
				component={MyComposition}
				durationInFrames={60 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="GradientBackground"
				component={GradientBackground}
				durationInFrames={60 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="LottieBackground"
				component={LottieBackground}
				durationInFrames={60 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
