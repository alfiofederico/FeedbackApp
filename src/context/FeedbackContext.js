import { createContext, useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";


const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {

  const [feedback, setFeedback] = useState([])
  const [ isLoading, setIsLoading] =useState(true)
  const [feedbackEdit, setFeedbackEdit] =useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  },[])

  const fetchFeedback = () => projectFirestore.collection('feedbacks').get().then((snapshot) => {
    let results = []
    snapshot.docs.forEach(doc => {
      results.push({id: doc.id, ...doc.data()})
    })
    setFeedback(results)
    setIsLoading(false)
  })

  const addFeedback = (newFeedback) => {
    
    const doc = newFeedback

    projectFirestore.collection('feedbacks').add(doc)
    
    setFeedback([newFeedback, ...feedback]);
    };

   const deleteFeedback = (id) => {
     if (window.confirm("Are you sure you want to delete it?")) {

      projectFirestore.collection('feedbacks').doc(id).delete()
       setFeedback(feedback.filter((item) => item.id !== id));
     }
   };


   const updateFeedback = (id, updItem) => {
     projectFirestore.collection("feedbacks").doc(id).update(updItem);
      setFeedback(feedback.map((item) => (item.id === id ?{...item, ...updItem } : item )))
   }

   const editFeedback = (item) =>{
     setFeedbackEdit({
       item,
       edit:true
     })
   }
  return <FeedbackContext.Provider value={{
    feedback,
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
    feedbackEdit,
  }}>
    {children}
  </FeedbackContext.Provider>
}


export default FeedbackContext