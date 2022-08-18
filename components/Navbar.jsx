import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* <Link href="/" className="nav-item">Home</Link> */}
        <Link href="/">
          <a className="nav-item">Home</a>
        </Link>

        <Link href="/organ-systems">
          <a className="nav-item">Organ Systems</a>
        </Link>
        <Link href="/organs">
          <a className="nav-item">Organs</a>
        </Link>
        <Link href="/cell-categories">
          <a className="nav-item">Cell Categories</a>
        </Link>
        <Link href="/cells">
          <a className="nav-item">Cells</a>
        </Link>
        <Link href="/organelles">
          <a className="nav-item">Organelles</a>
        </Link>
      </nav>
      <style jsx>{`
        .nav-item {
          margin-right: 20px;
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default Navbar;
