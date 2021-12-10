import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {

  const { feedback } = useContext(FeedbackContext);
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>
        <span className="numred"> {feedback.length} </span> Reviews
      </h4>
      <h4>
        Average Rating:{" "}
        <span className="numred">{isNaN(average) ? 0 : average}</span>{" "}
      </h4>
    </div>
  );
}

export default FeedbackStats;
