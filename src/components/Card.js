
import { FaLightbulb } from "react-icons/fa";


function Card({children, dark}) {
 const addclass = () => {
   document.querySelector("#changeclass").classList.toggle("dark");
 }; 

  return (
    <div className={`card ${dark && "dark"}`} id="changeclass">
      <FaLightbulb size={30} onClick={addclass} />

      {children}
    </div>
  );
} 

Card.defaultProps = {
  dark: false,
}

export default Card
