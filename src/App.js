import React, { useState } from "react";
import "./styles.css";

function App() {
  let [userInput, setUserInput] = useState("");

  function inpHandler(event) {
    //  console.log(event.target.value);
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>Inside Out!!!</h1>
      <input className="inp" onChange={inpHandler}></input>

      <div
        style={{
          marginTop: "100px",
          marginLeft: "auto",
          marginRight: "auto",
          border: "2px solid skyblue",
          width: "fit-content",
          textAlign: "center",
          padding: "15px",
          fontSize: "20px",
          fontWeight: "600"
        }}
      >
        Welcome <span style={{ color: "darkblue" }}>{userInput}</span>
      </div>
    </div>
  );
}

export default App;

/*
Viser = View -> Interact -> stateUpdate -> Render(react).
 */
