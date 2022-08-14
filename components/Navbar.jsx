import Link from "next/link";

const Navbar = ({ props }) => {
  return (
    <>
      <nav className="navbar">
        <Link href="/">Home</Link>
        {/* <Link href="/">
          <a className="nav-item">Home</a>
        </Link> */}
        
        <Link href="/organ-systems">Organ Systems</Link>
        <Link href="/organs">Organs</Link>
        <Link href="/cell-categories">Cell Categories</Link>
        <Link href="/cells">Cells</Link>
        <Link href="/organelles">Organelles</Link>
      </nav>
      <style jsx>{`
        a {
          margin: 0 10px 0 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;
