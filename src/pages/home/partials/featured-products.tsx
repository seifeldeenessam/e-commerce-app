import { useProductsFetching } from '@/services/products/queries';
import { Plus } from '@phosphor-icons/react';

const FeaturedProducts = () => {
	const { isLoading, error, data } = useProductsFetching({ limit: 4 });

	if (isLoading) return 'Loading products...';
	if (error || !data || !data.data) return 'Error fetching products';

	const products = data.data;

	return (
		<section className="container mx-auto px-8 py-12 flex flex-col gap-8">
			<div className="flex justify-between items-center">
				<h2 className="text-3xl font-semibold">Featured Products</h2>
				<p className="text-sm text-gray-400 max-w-prose">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
				</p>
			</div>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{products.map((product) => (
					<li className="flex flex-col justify-start items-start gap-2" key={product.id}>
						<img src={product.imageCover} alt={product.title} className="w-full aspect-[4/6] object-cover rounded-md" />
						<div className="w-full flex flex-row justify-between items-center">
							<div className="flex flex-col justify-start items-start">
								<h6>{product.title}</h6>
								<p>{product.price}</p>
							</div>

							<button className="rounded-full border p-2">
								<Plus />
							</button>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default FeaturedProducts;
