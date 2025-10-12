import { useTranslation } from "react-i18next";
import ShinyText from "./ShinyText";

const Hero = () => {
	const { t } = useTranslation("translation");

	return (
		<div className="hero min-h-screen bg-background text-foreground">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<ShinyText
						className="font-bold text-6xl"
						text={t("hero.title")}
						speed={2}
					/>
					<p className="py-6">{t("hero.description")}</p>
					<button type="button" className="btn btn-primary">
						{t("hero.cta")}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
