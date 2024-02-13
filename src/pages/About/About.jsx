import Banner from '../../components/Banner/Banner';
import bannerSrc from '../../assets/banners/kalen-emsley-bkci-8-qcdv-q-unsplash-2.png';
import Collapse from '../../components/Collapse/Collapse';

import './About.scss';

export default function About() {
	return (
		<section id="about">
			{/* Bannière */}
			<Banner banner={bannerSrc} />

			<div className="collapseContainer">
				{/* Collapse Fiabilité */}
				<Collapse title="Fiabilité">
					<p>
						Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos
						sont conformes aux logements, et toutes les informations sont régulièrement
						vérifiées par nos équipes.
					</p>
				</Collapse>

				{/* Collapse Respect */}
				<Collapse title="Respect">
					<p>
						La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
						comportement discriminatoire ou de perturbation du voisinage entraînera une
						exclusion de notre plateforme.
					</p>
				</Collapse>

				{/* Collapse Service */}
				<Collapse title="Service">
					<p>
						Nos équipes se tiennent à votre disposition pour vous fournir une expérience
						parfaite. N&apos;hésitez pas à nous contacter si vous avez la moindre
						question.
					</p>
				</Collapse>

				{/* Collapse Sécurité */}
				<Collapse title="Sécurité">
					<p>
						La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
						voyageurs, chaque logement correspond aux critères de sécurité établis par
						nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au
						locataire, cela permet à nos équipes de vérifier que les standards sont bien
						respectés. Nous organisons également des ateliers sur la sécurité domestique
						pour nos hôtes.
					</p>
				</Collapse>
			</div>
		</section>
	);
}
