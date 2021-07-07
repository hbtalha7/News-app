import React  from 'react';
import './index.css';
import {BrowserRouter ,Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import Feedbackscreen from './Screens/Feedbackscreen';
import Newscontent from './Screens/Newscontent';
function App() {
  return (
    <>
    <BrowserRouter>      
      <Route path="/feedback" component={Feedbackscreen}></Route>
      <Route path="/newcontent/:id" component={Newscontent}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
    </BrowserRouter>
    </>
  );
}

export default App;
