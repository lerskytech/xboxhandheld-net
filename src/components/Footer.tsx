import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} XboxHandheld.net. All rights reserved.</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><Link href="/about" className="hover:text-green-400 transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
