import PropTypes from 'prop-types';
import './Banner.scss';
export default function Banner({ banner, showHeading = false }) {
	return (
		<div className="banner">
			<img src={banner} alt="Bannière" />
			{showHeading && <h1>Chez vous, partout et ailleurs</h1>}
		</div>
	);
}

Banner.propTypes = {
	banner: PropTypes.string.isRequired,
	showHeading: PropTypes.bool,
};
