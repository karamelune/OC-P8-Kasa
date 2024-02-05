import './Banner.scss';

export default function Banner({ banner }) {
	return (
		<div className="banner">
			<img src={banner} alt="Bannière" />
			<h1>Chez vous, partout et ailleurs</h1>
		</div>
	);
}
