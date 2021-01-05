import React, {useState} from 'react';
import './App.css';
import Event from './Components/EventPractice';
import Counter from './Components/Counter';
import Fetch from './Components/Fetch';
import Info from './Components/Info';
import Average from './Components/Average';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <button onClick={()=>{
      setVisible(!visible);
    }}>
      {visible ? 'hide' : 'show'}
    </button>
    {visible && <Info/>}
    <Average/>
    <Fetch/>
    </>
  );
}

export default App;
