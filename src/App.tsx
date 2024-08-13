import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy Loading

const router = createBrowserRouter([
	{
		path: '/auth',
		lazy: async () => ({ Component: (await import('@/routes/auth-route')).default }),
		children: [
			{
				index: true,
				path: '/auth/login',
				lazy: async () => ({ Component: (await import('@/pages/auth-login')).default })
			},
			{
				index: true,
				path: '/auth/register',
				lazy: async () => ({ Component: (await import('@/pages/auth-register')).default })
			}
		]
	},
	{
		path: '/',
		lazy: async () => ({ Component: (await import('@/routes/root-route')).default }),
		children: [
			{
				index: true,
				path: '/',
				lazy: async () => ({ Component: (await import('@/pages/home')).default })
			}
		]
	}
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
