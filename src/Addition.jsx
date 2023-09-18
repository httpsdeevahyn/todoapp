import React, { useState } from "react";

export default function Addition() {
  const [total, setTotal] = useState(0);
  const [firstValue, setfirstValue] = useState(0);
  const [secondValue, setsecondValue] = useState(0);

  //   const addMaths = () => {
  //     setCount(count + 1);
  //   };

  const getTotal = (firstValue, secondValue) => {
    const a = Number(firstValue);
    const b = Number(secondValue);

    setTotal(a + b);
  };
  return (
    <div>
      <div>Addition</div>
      {/* <button onClick={(addMaths)}>increment value is : {count}</button> */}

      <input
        type="number"
        placeholder="firstValue"
        onChange={(e) => setfirstValue(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="secondValue"
        onChange={(e) => setsecondValue(e.target.value)}
      />

      <button onClick={() => getTotal(firstValue, secondValue)}>
        add up bro!
      </button>

      <button>total is {total}</button>
    </div>
  );
}
