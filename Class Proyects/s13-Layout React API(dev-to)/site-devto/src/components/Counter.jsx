import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  useEffect(() => {
    console.log("me ejecuto cuando se monta el componente");
  }, []);

  useEffect(() => {
    console.log("me ejecuto cuando cambia counter");
  }, [counter]);

  useEffect(() => {
    console.log("me ejecuto cuando cambia counterTwo");
  }, [counterTwo]);

  useEffect(() => {
    console.log("me ejecuto siempre");
  });

  const modifyCounter = (action) => {
    if (action === "increment") {
      const newCounter = counter + 1;
      setCounter(newCounter);
      return;
    }
    const newCounter = counter - 1;
    setCounter(newCounter);
    return;
  };

  const modifyCounterTwo = (action) => {
    if (action === "increment") {
      const newCounter = counterTwo + 1;
      setCounterTwo(newCounter);
      return;
    }
    const newCounter = counterTwo - 1;
    setCounterTwo(newCounter);
    return;
  };

  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-12">
          <p>{counter}</p>
          <button
            onClick={() => modifyCounter("increment")}
            className="btn btn-success"
          >
            +
          </button>
          <button
            onClick={() => modifyCounter("decrement")}
            className="btn btn-danger"
          >
            -
          </button>
        </div>
        <div className="col-12">
          <p>{counterTwo}</p>
          <button
            onClick={() => modifyCounterTwo("increment")}
            className="btn btn-success"
          >
            +
          </button>
          <button
            onClick={() => modifyCounterTwo("decrement")}
            className="btn btn-danger"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
