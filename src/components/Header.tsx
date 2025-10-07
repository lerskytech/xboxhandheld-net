import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
          Xbox Handheld
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/news" className="hover:text-green-400 transition-colors">News</Link></li>
            <li><Link href="/reviews" className="hover:text-green-400 transition-colors">Reviews</Link></li>
            <li><Link href="/accessories" className="hover:text-green-400 transition-colors">Accessories</Link></li>
            <li><Link href="/deals" className="hover:text-green-400 transition-colors">Deals</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
