import { useEffect } from "react";
import moleHill from "../images/molehill.png";

export default function EmptySlot(props) {
  useEffect(() => {
    let randomSec = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randomSec);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <img src={moleHill} />
    </div>
  );
}
