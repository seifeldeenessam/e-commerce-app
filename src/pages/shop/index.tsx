import { useSearchParams } from 'react-router-dom';

const Home = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const category = searchParams.get('category');

	return <main>Shop Page - Category = {category}</main>;
};

export default Home;
