import Layout from '@/components/layout';
import { Outlet } from 'react-router-dom';

const Route = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};

export default Route;
