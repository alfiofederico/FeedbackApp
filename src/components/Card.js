import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Card({children}) {

  const { mode } = useContext(ThemeContext)
  

  return (
    <div className={`card ${mode}`} >
      {children}
    </div>
  );
} 

Card.defaultProps = {
  dark: false,
}

export default Card
