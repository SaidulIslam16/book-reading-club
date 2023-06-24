import { useState } from 'react';
import './App.css';
import Books from './components/Books/Books';
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [completedBtnText, setCompletedBtnText] = useState('Activity Completed');
  const [completedBtnClass, setCompletedBtnClass] = useState('complete-btn');

  const handleToastClick = () => {
    toast.success('You have completed the Reading');
    setCompletedBtnText('Completed')
    setCompletedBtnClass('completed')
  };

  const toastHandlr = {
    completedBtnText: completedBtnText,
    completedBtnClass: completedBtnClass,
    handleToastClick: handleToastClick
  }
  return (
    <div className="App">
      <Books toastHandlr={toastHandlr}></Books>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
