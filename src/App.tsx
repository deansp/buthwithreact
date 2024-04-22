import './App.css'

function App() {
const tipp:string = "Tipp: Baue diese Applikation in React nach. Beachte: Zahlen die durch 3, 5 und 3 und 5 teilbar sind, werden besonders angezeigt."
  return (
      <div className={"container"}>
          <h1>0</h1>
          <h2>0</h2>
          <div >
              <button className="buttton">+</button>
              <button className="buttton">-</button>
          </div>
          {tipp}
      </div>
  )
}

export default App
