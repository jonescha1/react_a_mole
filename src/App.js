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
    return <div>{hills}</div>;
  };

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
