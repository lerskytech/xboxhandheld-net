import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-xbox-dark text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-3xl font-bold text-xbox-green hover:text-xbox-light-green transition-colors">
          Xbox Handheld
        </Link>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li><Link href="/news" className="hover:text-xbox-green transition-colors">News</Link></li>
            <li><Link href="/reviews" className="hover:text-xbox-green transition-colors">Reviews</Link></li>
            <li><Link href="/accessories" className="hover:text-xbox-green transition-colors">Accessories</Link></li>
            <li><Link href="/deals" className="hover:text-xbox-green transition-colors">Deals</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
