import Link from "next/link";
import Button from "./Button";

const Navber = () => {
  return (
    <header className="h-20 bg-light fixed top-0 left-0 right-0 border-b">
      <div className="h-full w-full flex justify-between items-center">
        <nav className="nav-start">
          <Link href="/" className="link-item text-2xl font-semibold">
            goBuy
          </Link>
        </nav>
        <nav className="nav-middle font-medium">
          <ul className="flex gap-5 capitalize">
            <li>
              <Link href="/" className="link-item">
                home
              </Link>
            </li>
            <li>
              <Link href="/products" className="link-item">
                products
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                about
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-item">
                contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-end">
          <Button href="/signin" placeholder="signin" color="teal" />
        </nav>
      </div>
    </header>
  );
};

export default Navber;
