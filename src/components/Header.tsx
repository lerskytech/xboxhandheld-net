import Link from 'next/link';
import { FaNewspaper, FaStar, FaShoppingBag, FaTag } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-xbox-dark text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-3xl font-bold text-xbox-green hover:text-xbox-light-green transition-colors">
          Xbox Handheld
        </Link>
        <nav>
          <ul className="flex items-center space-x-8 text-lg">
            <li><Link href="/news" className="flex items-center gap-2 hover:text-xbox-green transition-colors"><FaNewspaper /><span>News</span></Link></li>
            <li><Link href="/reviews" className="flex items-center gap-2 hover:text-xbox-green transition-colors"><FaStar /><span>Reviews</span></Link></li>
            <li><Link href="/accessories" className="flex items-center gap-2 hover:text-xbox-green transition-colors"><FaShoppingBag /><span>Accessories</span></Link></li>
            <li><Link href="/deals" className="flex items-center gap-2 hover:text-xbox-green transition-colors"><FaTag /><span>Deals</span></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
