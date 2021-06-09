import React, { useEffect, useState } from "react";

function AppConverter() {
  const [USD, setUSD] = useState(0);
  const [MXN, setMXN] = useState(0);

  return (
    <div className="bg-dark rounded align-items-center p-5">
      <form>
        <div className="form-group col-12">
          <label className="text-white" htmlFor="USDInput">
            USD
          </label>
          <input
            type="number"
            className="form-control"
            id="USDInput"
            aria-describedby="emailHelp"
            placeholder="Enter USD"
            value={Number(USD)}
            onChange={(event) => {
              setUSD(event.target.value);
              setMXN(event.target.value * 19.84);
            }}
          />
        </div>
        <div className="form-group col-12">
          <label className="text-white" htmlFor="MXNInput">
            MXN
          </label>
          <input
            type="number"
            className="form-control"
            id="MXNInput"
            placeholder="Enter MXN"
            value={Number(MXN)}
            onChange={({ target: { value } }) => {
              setUSD(value / 19.84);
              setMXN(value);
            }}
          />
        </div>
      </form>
      <h1>{Number(USD)}</h1>
    </div>
  );
}

export default AppConverter;
