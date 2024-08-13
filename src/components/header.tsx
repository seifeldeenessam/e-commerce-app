import { Bag, User } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import LogoSVG from '../assets/logo';

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 flex flex-row justify-between items-center px-12 py-8 z-50 text-white">
			<Link to={'/'}>
				{/* Regular react component returning SVG element */}
				<LogoSVG />
			</Link>

			<nav className="absolute left-2/4 -translate-x-2/4">
				<ul className="flex flex-row justify-center items-center gap-8">
					<li>
						<Link to={'/'} className="tracking-wide">
							Home
						</Link>
					</li>
					<li>
						<Link to={'/shop'} className="tracking-wide">
							Shop
						</Link>
					</li>
					<li>
						<Link to={'/blog'} className="tracking-wide">
							Blog
						</Link>
					</li>
					<li>
						<Link to={'/contact'} className="tracking-wide">
							Contact
						</Link>
					</li>
				</ul>
			</nav>

			<ul className="flex flex-row items-center gap-2">
				<li>
					<Link to={'/cart'} className="flex p-2 rounded-full hover:bg-gray-100">
						<Bag weight="fill" size={24} />
					</Link>
				</li>
				<li>
					<Link to={'/account'} className="flex p-2 rounded-full hover:bg-gray-100">
						<User weight="fill" size={24} />
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
