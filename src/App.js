import {React} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';

export default function App() {
  return (
    <>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Route exact path="/">
              <FeedbackForm  />
              <FeedbackStats />
              <FeedbackList />
            </Route>
            <Route path="/about" component={About} />

            <AboutIcon />
          </div>
        </Router>
      </FeedbackProvider>
    </>
  );
}
