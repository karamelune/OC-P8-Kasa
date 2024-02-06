import { useParams } from 'react-router-dom';
import logementsData from '../../data/logements.json';
import Carrousel from '../../components/Carrousel/Carrousel';

import starInactive from '../../assets/icons/star-inactive.svg';
import starActive from '../../assets/icons/star-active.svg';
import Collapse from '../../components/Collapse/Collapse';
import './Logements.scss';

export default function Logements() {
	const { id } = useParams();
	const index = logementsData.findIndex((logement) => logement.id === id);
	const logement = logementsData[index];

	return (
		<section id="logementSection">
			<Carrousel images={logement.pictures} title={logement.title} />
			<div className="logement">
				<div className="logement_infos">
					<div className="logement_infos_title">
						<h1>{logement.title}</h1>
						<p>{logement.location}</p>
					</div>
					<div className="logement_infos_tags">
						{logement.tags.map((tag, index) => (
							<span key={index}>{tag}</span>
						))}
					</div>
				</div>
				<div className="logement_host">
					<div className="logement_host_picture">
						<img src={logement.host.picture} alt={logement.host.name} />
						<p>{logement.host.name}</p>
					</div>
					<div className="logement_host_rate">
						{Array.from({ length: 5 - logement.rating }, (_, index) => (
							<span key={index + logement.rating}>
								<img src={starInactive}></img>
							</span>
						))}
						{Array.from({ length: logement.rating }, (_, index) => (
							<span key={index}>
								<img src={starActive}></img>
							</span>
						))}
					</div>
				</div>
				<div className="collapseContainer">
					<Collapse title="Description">
						<p>{logement.description}</p>
					</Collapse>
					<Collapse title="Équipements">
						<ul>
							{logement.equipments.map((equipment, index) => (
								<li key={index}>{equipment}</li>
							))}
						</ul>
					</Collapse>
				</div>
			</div>
		</section>
	);
}
