import { useState } from 'react';
import PropTypes from 'prop-types';

import arrowLeft from '../../assets/icons/arrow_back.svg';
import arrowRight from '../../assets/icons/arrow_forward.svg';
import './Carrousel.scss';

export default function Carrousel({ images, title }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<div id="carrousel">
			{images.length > 1 && (
				<button onClick={handlePrev} type="button" className="arrow arrow_left">
					<img src={arrowLeft} alt="Previous"></img>
				</button>
			)}
			<img src={images[currentIndex]} alt={title} />

			{images.length > 1 && (
				<button onClick={handleNext} type="button" className="arrow arrow_right">
					<img src={arrowRight} alt="Next"></img>
				</button>
			)}
			{images.length > 1 && (
				<span>
					{currentIndex + 1}/{images.length}
				</span>
			)}
		</div>
	);
}

Carrousel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string.isRequired,
};
