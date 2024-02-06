import { useState } from 'react';
import PropTypes from 'prop-types';

import arrow from '../../assets/icons/arrow_back.svg';
import './Collapse.scss';

export default function Collapse({ title, children }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleCollapse = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="collapseDiv">
			<button
				onClick={toggleCollapse}
				className={`collapse ${isOpen ? 'open' : ''}`}
				type="button">
				{title}
				<img src={arrow} alt="arrow" />
			</button>
			{isOpen && <div className="collapse_content">{children}</div>}
		</div>
	);
}

Collapse.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
