function Card({children, dark}) {
  return (
      <div className={`card ${dark && "dark"}`}>
         
        {children}
        </div>
  
  );
}

Card.defaultProps = {
  dark: false,
}

export default Card
