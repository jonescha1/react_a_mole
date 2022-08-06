import { useEffect } from "react";
import moleImg from "../images/mole.png";

export default function Mole(props) {
  useEffect(() => {
    let randomSec = Math.ceil(Math.random() * 10000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randomSec);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <img src={moleImg} onClick={props.handleClick} />
    </div>
  );
}
