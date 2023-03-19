import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex justify-around bg-amber-400 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 dark:text-white">
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
        <Image src="https://flowbite.com/docs/images/logo.svg" alt="logo" className="h-6 mr-3 sm:h-9" width={100} height={100}/>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-700  font-serif font-bold hover:text-blue-600">
           Home
          </Link>
        </li>
        <li>
          <Link href="/Contactus" className="hover:text-gray-700 font-serif font-bold hover:text-blue-600 ">
        Contact Us
          </Link>
        </li>
        <li>
          <Link href="/About" className="hover:text-gray-700 font-serif font-bold  hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/cart" className="hover:text-gray-700 font-serif font-bold  hover:text-blue-600">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
