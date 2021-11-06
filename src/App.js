import './App.css';
import ButtonCounter from "./components/buttonCounter";
import React, {useState, useEffect} from "react";
function App() {

  const [counter, setCounter] = useState(0);



  return (
    <div className="App Background">
      {counter < 5 && <ButtonCounter size="big" counter={counter} setCounter={setCounter}/>}
      {counter >= 5 && <ButtonCounter color="blue" counter={counter} setCounter={setCounter}/>}
      {counter > 10 && <ButtonCounter color="green" size="small" counter={counter} setCounter={setCounter}/>}
    </div>
  );
}

export default App;
