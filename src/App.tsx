import './App.css'
import {useState} from "react";

function App() {
    const tipp:string = "Tipp: Baue diese Applikation in React nach. Beachte: Zahlen die durch 3, 5 und 3 und 5 teilbar sind, werden besonders angezeigt."
    const [count, setCount] = useState<number>(0)

    function changeCountPos(){
        setCount(count+1)
    }
    function changeCountNeg(){
        if(count >0)setCount(count-1)
    }

    return (
      <div className={"container"}>
          <h1>{count}</h1>
          <h3>{count}</h3>
          <div>
              <button onClick={changeCountNeg} className="buttton">-</button>
              <button onClick={changeCountPos} className="buttton">+</button>
          </div>
          {tipp}
      </div>
    )
}

export default App
