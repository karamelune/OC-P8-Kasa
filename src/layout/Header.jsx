import KasaLogo from '../assets/kasa.svg';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<img src={KasaLogo} alt="Kasa logo" />
			<nav>
				<ul>
					<li>
						<Link to={`/`}>Accueil</Link>
					</li>
					<li>
						<Link to={`/about`}>A propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
