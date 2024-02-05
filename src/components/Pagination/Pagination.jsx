import PropTypes from 'prop-types';
import './Pagination.scss';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
	return (
		<div id="pagination">
			{Array.from({ length: totalPages }, (_, i) => (
				<button
					type="button"
					key={i + 1}
					className={i + 1 === currentPage ? 'active' : ''}
					onClick={() => onPageChange(i + 1)}>
					{i + 1}
				</button>
			))}
		</div>
	);
}

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
};
