import {useEffect, useState} from 'react';
import {cancelRender, continueRender, delayRender, staticFile} from 'remotion';
import {Lottie, LottieAnimationData} from '@remotion/lottie';

export const LottieBackground = () => {
	const [handle] = useState(() => delayRender('Loading Lottie animation'));

	const [animationData, setAnimationData] =
		useState<LottieAnimationData | null>(null);

	useEffect(() => {
		fetch(staticFile('confetti_red.json'))
			.then((data) => data.json())
			.then((json) => {
				setAnimationData(json);
				continueRender(handle);
			})
			.catch((err) => {
				cancelRender(err);
			});
	}, [handle]);

	if (!animationData) {
		return null;
	}

	return (
		<div className="absolute inset-0">
			<Lottie loop animationData={animationData} />
		</div>
	);
};
