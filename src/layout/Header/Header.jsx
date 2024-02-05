import KasaLogo from '../../assets/logo/kasa.svg';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export default function Header() {
	return (
		<header>
			<img src={KasaLogo} alt="Kasa logo" />
			<nav>
				<ul>
					<li>
						<NavLink to={`/`}>Accueil</NavLink>
					</li>
					<li>
						<NavLink to={`/about`}>A Propos</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
