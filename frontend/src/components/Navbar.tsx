import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex px-8 py-4 justify-between items-center border-b-2 border-border">
      <Link to="/">
        <img src="/Logo_Icon_Name.png" width={200} />
      </Link>

      <ul className="flex gap-8 items-center">
        <li>Features</li>
        <li>How it works</li>
        <li>
          <Link to="/login" className="border-l-2 border-border pl-8 py-2">
            Log in
          </Link>
        </li>
        <li>
          <Link to="/register" className="bg-action px-5 py-3 rounded-lg">
            Get started
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
