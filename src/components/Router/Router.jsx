import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from '../../pages/Home/Home.jsx';
import About from '../../pages/About/About.jsx';
import Logements from '../../pages/Logements/Logements.jsx';
import ErrorPage from '../../pages/ErrorPage/ErrorPage.jsx';
import Footer from '../../layout/Footer/Footer.jsx';
import Header from '../../layout/Header/Header.jsx';

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<div id="mainContainer">
					<Header />
					<Outlet />
					<Footer />
				</div>
			),
			errorElement: <ErrorPage />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/about',
					element: <About />,
				},
				{
					path: '/logements/:id',
					element: <Logements />,
				},
				// ... autres routes
			],
		},
	]);

	return (
		<RouterProvider router={router}>
			<Outlet />
		</RouterProvider>
	);
};

export default Router;
