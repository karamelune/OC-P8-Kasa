import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import About from './routes/About.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<div>
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
				element: <div>Logement</div>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
