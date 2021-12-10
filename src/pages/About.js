import Card from "../components/Card"
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About this App</h1>
        <p>Simple React app to add a review to any product.</p>

        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default About
