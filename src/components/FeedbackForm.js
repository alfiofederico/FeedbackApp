import { useState, useContext, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./Card"
import Button from "./Button"
import FeedbackContext from "../context/FeedbackContext"



function FeedbackForm() {

 
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] =useState('')
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if(feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {

    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !=='' && text.trim().length <= 9) {
      setBtnDisabled(true);
      setMessage('Text is too short');
    } else if (text !== "" && text.trim().length >= 100) {
      setBtnDisabled(true);
      setMessage("Text is too long");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 9) {
      const newFeedback = {
        text,
        rating
      }


      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.edit.id, newFeedback)
      } else {
          addFeedback(newFeedback);
      }
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate this service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input  onChange={handleTextChange} type="text" placeholder=" Write your review" value={text} />
          <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
        </div>

        {message && <div className='message'>{message}</div> }
      </form>
    </Card>
  )
}




export default FeedbackForm
