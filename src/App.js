import logo from './logo.svg';
import './App.css';
import {useRef,useEffect,useState} from 'react';
import ComponentA from './ComponentA';

function App() {
  const [count, setCount] = useState(0);
  const previousCount= useRef();
  useEffect(()=>{
    console.log('useEffect');
    previousCount.current = count;
  },[count]);
  return (
    <div className="App">
    {console.log("render")}
     <h1>Count : {count}, before :{previousCount.current}  </h1>
     <button onClick={()=>{setCount((count)=>count+1)}}>Increment</button>
     <ComponentA/>
    </div>
  );
}

export default App;
