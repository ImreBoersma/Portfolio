import Galaxy from "./Galaxy";
import TrueFocus from "./TrueFocus";

type LoadingProps = {
	text?: string;
};

const Loading = ({ text }: LoadingProps) => {
	const sentence = text || "LOADING WEBSITE";
	return (
		<>
			<Galaxy
				className="-z-10 absolute inset-0 bg-background text-foreground"
				mouseRepulsion={false}
				mouseInteraction
				density={1.8}
				glowIntensity={0.5}
				saturation={1}
				hueShift={170}
				twinkleIntensity={0.5}
				rotationSpeed={0.1}
				repulsionStrength={0}
				autoCenterRepulsion={0}
				starSpeed={0.4}
			/>
			<TrueFocus
				sentence={sentence}
				pauseBetweenAnimations={0.2}
				borderColor="#5227ff"
			/>
		</>
	);
};

export default Loading;
