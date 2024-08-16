import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
			},
			{
				index: true,
				path: 'shop',
				lazy: async () => ({ Component: (await import('@/pages/shop')).default })
			}
		]
	}
]);

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;
