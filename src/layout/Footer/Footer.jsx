import KasaLogo from '../../assets/logo/kasa_white.svg';

import './Footer.scss';

export default function Footer() {
	return (
		<footer>
			<img src={KasaLogo} alt="Kasa logo" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
