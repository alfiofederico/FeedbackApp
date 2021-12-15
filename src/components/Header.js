import { Link } from "react-router-dom";

function Header({ text, bgcolor, textcolor }) {
  const headerStyles = {
    backgroundColor: bgcolor,
    color: textcolor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/">
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
  bgcolor: "rgba(0,0,0,0.4)",
  textcolor: "#ff6a95",
};
export default Header;
