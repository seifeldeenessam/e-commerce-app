import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

if (typeof window === 'undefined') throw new Error('Window object is not defined');

const root = window.document.getElementById('root');
if (!root) throw new Error('Root element is not defined');

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
