import { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

export default function MoleContainer(props) {
  let [mole, setMole] = useState(false);

  let displayMole = mole ? (
    <Mole
      setScore={props.setScore}
      toggle={setMole}
      handleClick={handleClick}
    />
  ) : (
    <EmptySlot toggle={setMole} />
  );

  function handleClick(e) {
    props.setScore(props.score + 1);
    setMole(false);
  }
  return <div className="moleContainer">{displayMole}</div>;
}
