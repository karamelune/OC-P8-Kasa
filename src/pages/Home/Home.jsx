import { useState } from 'react';
import logements from '../../data/logements.json';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import bannerSrc from '../../assets/banners/banner-home.png';
import Pagination from '../../components/Pagination/Pagination'; // Importer le composant Pagination
import './Home.scss';

export default function Home() {
	const itemsPerPage = 6;
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(logements.length / itemsPerPage);

	const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

	const paginatedLogements = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return logements.slice(startIndex, endIndex);
	};

	return (
		<section id="home">
			<Banner banner={bannerSrc} />
			<div id="logementsDiv">
				{paginatedLogements().map((logement) => (
					<Card key={logement.id} logement={logement} />
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</section>
	);
}
