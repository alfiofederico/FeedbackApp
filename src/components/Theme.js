import { FaLightbulb } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


function Theme() {
const { changeMode, mode } = useContext(ThemeContext);

const toggleMode = () => {
  changeMode(mode === "dark" ? "light" : "dark")
}

  return (
    <div className="mode">
      <FaLightbulb onClick={toggleMode} size={30} />
    </div>
  );
}

export default Theme;
