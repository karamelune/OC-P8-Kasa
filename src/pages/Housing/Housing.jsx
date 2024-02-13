import { useParams } from 'react-router-dom';
import housingData from '../../data/housing.json';
import Carrousel from '../../components/Carrousel/Carrousel';
import Collapse from '../../components/Collapse/Collapse';
import ErrorPage from '../ErrorPage/ErrorPage';
import starInactive from '../../assets/icons/star-inactive.svg';
import starActive from '../../assets/icons/star-active.svg';
import './Housing.scss';

export default function Housing() {
	const { id } = useParams();
	const index = housingData.findIndex((housing) => housing.id === id);

	if (index === -1) {
		return <ErrorPage />;
	}

	const housing = housingData[index];

	return (
		<section id="housingSection">
			{/* Carrousel */}
			<Carrousel images={housing.pictures} title={housing.title} />

			{/* Logement */}
			<div className="housing">
				<div className="housing_infos">
					{/* Titre du housing et localisation */}
					<div className="housing_infos_title">
						<h1>{housing.title}</h1>
						<p>{housing.location}</p>
					</div>

					{/* Tags */}
					<div className="housing_infos_tags">
						{housing.tags.map((tag, index) => (
							<span key={index}>{tag}</span>
						))}
					</div>
				</div>

				{/* Hôte */}
				<div className="housing_host">
					{/* Photo et nom de l'hôte */}
					<div className="housing_host_picture">
						<img src={housing.host.picture} alt={housing.host.name} />
						<p>{housing.host.name}</p>
					</div>

					{/* Note du housing */}
					<div className="housing_host_rate">
						{Array.from({ length: 5 }, (_, index) => (
							<span key={index}>
								<img
									src={index < housing.rating ? starActive : starInactive}
									alt="rating star"
								/>
							</span>
						))}
					</div>
				</div>

				{/* Description et équipements */}
				<div className="collapseContainer">
					<Collapse title="Description">
						<p>{housing.description}</p>
					</Collapse>
					<Collapse title="Équipements">
						<ul>
							{housing.equipments.map((equipment, index) => (
								<li key={index}>{equipment}</li>
							))}
						</ul>
					</Collapse>
				</div>
			</div>
		</section>
	);
}
