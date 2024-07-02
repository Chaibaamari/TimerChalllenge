import { useRef, useState } from "react";

export default function Player() {
  const PlayerName = useRef("")
  const [inputValue, setInputValue] = useState(null);
  function handleClicked() {
    setInputValue(PlayerName.current.value);
    PlayerName.current.value = ""
  }
  return (
    <section id="player">
      <h2>Welcome {inputValue ??  "Unkoun"}</h2>
      <p>
        <input
          ref={PlayerName}
          type="text"
        />
        <button onClick={handleClicked}>Set Name</button>
      </p>
    </section>
  );
}
