import "./header.scss";
// import avatar from "../../img/Screenshot 2023-04-25 at 6.08.58 PM.png";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="left">
          {/* <div className="imageContainer">
          <img src={avatar} alt="Adam Del Castillo-Call" className="avatar" />
        </div> */}
          <h1>Adam Del Castillo-Call</h1>
        </div>
        <div className="right">
          <a href="/portfolio">Portfolio</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
