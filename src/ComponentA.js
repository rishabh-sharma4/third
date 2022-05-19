import React,{useReducer} from 'react';

const reducer=(state,action)=>{
    switch(action.type){
        case "Increment":
            return {count: state.count +1, showText: state.showText};
        case "toggleShowText":
            return {count: state.count, showText: !state.showText};
        default: 
            return state;
    }
}
 const ComponentA = () =>{
    const [state,dispatch]= useReducer(reducer,{count:0,showText:true})
    return(
        <>
        <h1>Using Reducer Hook</h1>
        <h2>Count: {state.count}</h2>
        <button onClick={()=>{
            dispatch({type:"Increment"});
            dispatch({type:"toggleShowText"});
        }}>Click Here</button>
        {state.showText?<p>This is text comp</p>:""}
        </>
    )
}
export default ComponentA;