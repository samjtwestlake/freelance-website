import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="p-3 flex justify-end text-xl">
        <ul className="flex gap-4 mb-0">
          <li>
            <Link href="/">
              <a className="hover:text-blue-400">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a className="hover:text-blue-400">
                Pricing
              </a>
            </Link>
          </li>
          <li>
            <Link href="/book">
              <a className="hover:text-blue-400">
                Book
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="hover:text-blue-400">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;