import { useCategoriesFetching } from '@/services/categories/queries';
import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
	const { isLoading, error, data } = useCategoriesFetching({ limit: 4 });

	if (isLoading) return 'Loading categories...';
	if (error || !data || !data.data) return 'Error fetching categories';

	const categories = data.data;

	return (
		<section className="container mx-auto px-8 py-12 flex flex-col gap-8">
			<div className="flex justify-between items-center">
				<h2 className="text-3xl font-semibold">Featured Categories</h2>
				<p className="text-sm text-gray-400 max-w-prose">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
				</p>
			</div>
			<ul className="flex flex-row items-start gap-4">
				{categories.map((category) => (
					<Link to={`/shop?category=${category.slug}`} className={`relative w-full aspect-[3/4] border rounded-lg overflow-hidden`} key={category._id}>
						<img src={category.image} alt={category.name} className="w-full h-full object-cover brightness-50" />
						<div className="absolute inset-0 flex flex-col justify-end items-start p-4">
							<p className="text-xl text-white font-semibold">{category.name}</p>
						</div>
					</Link>
				))}
			</ul>
		</section>
	);
};

export default FeaturedCategories;
