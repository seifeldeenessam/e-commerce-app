import { MagnifyingGlass } from '@phosphor-icons/react';

const HeroSection = () => {
	return (
		<section className="relative h-screen border overflow-hidden">
			<img
				src="https://images.unsplash.com/photo-1545039740-225984c91db8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Hero"
				className="absolute inset-0 object-cover z-[-1] brightness-50"
			/>
			<div className="w-full h-full flex flex-col justify-center items-center gap-4 text-white">
				<h1 className="max-w-[28ch] text-5xl font-semibold text-center">Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!</h1>
				<p className="max-w-prose text-center text-sm text-gray-300">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat
				</p>
				<form className="flex flex-row justify-start items-center p-2 border rounded-full mt-4">
					<input type="text" name="search" placeholder="Search An Item" className="min-w-[25ch] bg-transparent text-gray-300 pl-2" />
					<button className="flex p-2 rounded-full bg-[#00000080] transition hover:bg-black">
						<MagnifyingGlass size={24} />
					</button>
				</form>
			</div>
		</section>
	);
};

export default HeroSection;
