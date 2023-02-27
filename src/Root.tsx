import {Composition} from 'remotion';
import {GradientVideo} from './GradientVideo';
import {GradientBackground} from './GradientBackground';
import {LottieBackground} from './LottieBackground';
import {LottieVideo} from './LottieVideo';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="GradientBackground"
				component={GradientBackground}
				durationInFrames={60 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="GradientVideo"
				component={GradientVideo}
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
			<Composition
				id="LottieVideo"
				component={LottieVideo}
				durationInFrames={60 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
