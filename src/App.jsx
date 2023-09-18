import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Map from "./Map";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("dee");
  const [input, setInput] = useState("awesome");
  const [show, setShow] = useState("false");

  const [ink, setInk] = useState("purple");

  const changeInput = (e) => {
    setInput(e.target.value);
    setInk("red");
  };

  return (
    <>
      <h1>Vite + React + Event</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div>
        <p> my name is {name} </p>
      </div>
      {ink}{" "}
      <input
        type="text"
        className=""
        placeholder="type!"
        onChange={(e) => changeInput(e)}
      />
      <div> i am {show ? "on" : "off"} </div>
      <button onClick={() => setShow(!show)}>
        turn {!show ? "on" : "off"}{" "}
      </button>
      <Map />
    </>
  );
}

export default App;
