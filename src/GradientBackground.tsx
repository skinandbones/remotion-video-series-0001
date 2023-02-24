import {interpolate, interpolateColors, useCurrentFrame} from 'remotion';
import colors from 'tailwindcss/colors';

export const GradientBackground = () => {
	const frame = useCurrentFrame();

	const fromColor = interpolateColors(
		Math.sin((frame * Math.PI) / 80),
		[-1, 0, 1],
		[colors.blue['500'], colors.purple['500'], colors.rose['500']]
	);

	const toColor = interpolateColors(
		Math.sin((frame * Math.PI) / 160),
		[-1, 0, 1],
		[colors.fuchsia['500'], colors.yellow['500'], colors.orange['500']]
	);

	const rotation = interpolate(
		Math.sin((frame * Math.PI) / 80),
		[-1, 1],
		[0, 135]
	);

	return (
		<div
			className="absolute inset-0"
			style={{
				background: `linear-gradient(${rotation}deg, ${fromColor}, ${toColor})`,
			}}
		/>
	);
};

export default GradientBackground;
