import PropTypes from 'prop-types';
import './Card.scss';

export default function Card({ housing }) {
	if (!housing) {
		return null;
	}

	const { id, title, cover } = housing;

	return (
		<a href={`/housing/${id}`} className="card">
			<img src={cover} alt={title} />
			<h2>{title}</h2>
		</a>
	);
}

Card.propTypes = {
	housing: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		cover: PropTypes.string.isRequired,
	}).isRequired,
};
