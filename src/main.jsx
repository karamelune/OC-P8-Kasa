import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router/Router.jsx';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
);
