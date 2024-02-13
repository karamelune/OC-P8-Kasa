import { useState } from 'react';
import housing from '../../data/housing.json';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import bannerSrc from '../../assets/banners/banner-home.png';
import Pagination from '../../components/Pagination/Pagination'; // Importer le composant Pagination
import './Home.scss';

export default function Home() {
	const itemsPerPage = 6;
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(housing.length / itemsPerPage);

	const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

	const paginatedHousing = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return housing.slice(startIndex, endIndex);
	};

	return (
		<section id="home">
			{/* Bannière */}
			<Banner banner={bannerSrc} showHeading={true} />
			{/* Logements */}
			<div id="housingDiv">
				{paginatedHousing().map((housing) => (
					<Card key={housing.id} housing={housing} />
				))}
			</div>
			{/* Pagination */}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</section>
	);
}
