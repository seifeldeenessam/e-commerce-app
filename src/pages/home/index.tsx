import FeaturedCategories from './partials/featured-categories';
import FeaturedProducts from './partials/featured-products';
import HeroSection from './partials/hero-section';

const Home = () => {
	return (
		<main>
			<HeroSection />
			<FeaturedProducts />
			<FeaturedCategories />
		</main>
	);
};

export default Home;
