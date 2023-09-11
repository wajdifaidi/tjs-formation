import React, { useState, useEffect } from 'react'
import Button from './components/Button/Button.jsx';
const App = (props) => {

  const [state, setState] = useState({ counter: -1, hello: "world" })
  useEffect(() => {
    console.log('dans le useEffect', state);

    // return () => {
    //   second
    // }
  }, [state])
  useEffect(() => {
    console.log('montage');
    setState({ ...state, counter: 0 })
  }, [])

  return <div className='App'>
    valeur de counter : {state.counter}<hr />
    <Button bgColor="tomato" onClick={() => {
      setState({ ...state, counter: state.counter - 1 });
      if (state.counter === 0) alert('on est a zero')
      console.log(state);
    }} >-</Button>
    <Button
      onClick={() => {
        setState({ ...state, counter: state.counter + 1 });
        console.log(state);

      }} >+</Button>
  </div>
};
export default App;