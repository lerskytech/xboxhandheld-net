import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-xbox-dark text-gray-400 py-8 mt-16">
      <div className="container mx-auto text-center">
        <p className="text-base">&copy; {new Date().getFullYear()} XboxHandheld.net. All rights reserved.</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><Link href="/about" className="hover:text-xbox-green transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-xbox-green transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-xbox-green transition-colors">Privacy Policy</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
