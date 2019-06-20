import Link from 'next/link';

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Home Page</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About Page</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contact Page</a>
                </Link>
            </li>
        </ul>

    </nav>
);

export default Navbar;
