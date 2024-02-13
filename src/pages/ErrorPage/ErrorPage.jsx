import { Link } from 'react-router-dom';

import './ErrorPage.scss';

export default function ErrorPage() {
	return (
		<section id="error-page">
			<h1>404</h1>
			<p>Oups! La page que vous demandez n&apos;existe pas.</p>
			<Link to="/">Retourner sur la page d&apos;accueil</Link>
		</section>
	);
}
