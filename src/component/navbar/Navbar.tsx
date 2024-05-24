import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Lama Dev</span>
        <div className="social">
          <a href="#">
            <img src="./linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="./instagram.png"  alt="" />
          </a>
          <a href="#">
            <img src="./github.png"  alt="" />
          </a>
          <a href="#">
            <img src="./youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
