import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from '../../pages/Home/Home.jsx';
import About from '../../pages/About/About.jsx';
import ErrorPage from '../../pages/ErrorPage/ErrorPage.jsx';
import Footer from '../../layout/Footer/Footer.jsx';
import Header from '../../layout/Header/Header.jsx';
import Housing from '../../pages/Housing/Housing.jsx';

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
			errorElement: (
				<div id="mainContainer">
					<Header />
					<ErrorPage />
					<Footer />
				</div>
			),
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
					path: '/housing/:id',
					element: <Housing />,
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
