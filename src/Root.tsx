import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={3 * 60 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
