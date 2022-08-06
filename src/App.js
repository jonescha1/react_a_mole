import { useState } from "react";
import "./App.css";

// Import Components
import MoleContainer from "./components/MoleContainer";

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];

    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer setScore={setScore} score={score} key={i} />);
    }
    return <div className="gameContainer">{hills}</div>;
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>React-a-Mole!</h1>
        <h2>Score: {score}</h2>
      </div>

      <div className="bottom">{createMoleHill()}</div>
    </div>
  );
}

export default App;
