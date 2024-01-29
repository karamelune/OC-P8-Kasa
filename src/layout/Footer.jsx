import KasaLogo from '../assets/kasa_white.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer>
			<img src={KasaLogo} alt="Kasa logo" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
