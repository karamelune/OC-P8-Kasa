/* eslint-disable react/prop-types */
import './Card.scss';

export default function Card({ logement }) {
	if (!logement) {
		return null;
	}

	const { id, title, cover } = logement;

	return (
		<a href={`/logements/${id}`} className="card">
			<img src={cover} alt={title} />
			<h2>{title}</h2>
		</a>
	);
}
