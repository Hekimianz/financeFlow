function Navbar() {
  return (
    <nav className="flex px-8 py-4 justify-between items-center border-b-2 border-border">
      <img src="/Logo_Icon_Name.png" width={200} />
      <ul className="flex gap-8 items-center">
        <li>Features</li>
        <li className="">How it works</li>
        <li className="border-l-2 border-border pl-8 py-2">Log in</li>
        <li className="bg-action px-5 py-3 rounded-lg">Get started</li>
      </ul>
    </nav>
  );
}

export default Navbar;
