import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(6);

  const handleAdd=()=>{
    axios("")
    .then(({data})=>{
      
    })
  }
  return (
    <div className="App">
       <h2>The count is {count}</h2>
       <button 
       className='addCounter'
       onClick={()=>setCount(count+1)}>ADD</button>
       <button 
        className='redCounter'
       onClick={()=>setCount(count-1)}>SUB</button>
    </div>
  );
}

export default App;
