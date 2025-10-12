import { useTranslation } from "react-i18next";

const Nav = () => {
	const { t } = useTranslation();
	return (
		<div className="navbar bg-background text-foreground shadow">
			<div className="flex-1">
				<a href="#daisyui" className="btn btn-ghost text-xl">
					Imre Boersma
				</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a href="#projects">{t("nav.projects")}</a>
					</li>
					<li>
						<details>
							<summary>{t("nav.about")}</summary>
							<ul className="rounded-t-none bg-background p-2 text-foreground">
								<li>
									<a href="#hobbies">{t("nav.hobbies")}</a>
								</li>
								<li>
									<a href="#skills">{t("nav.skills")}</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
