import React, { useState } from "react";

const Hypotenuse = () => {
  const [lenghtOfHypotenuse, setLengthOfHypotenuse] = useState("");
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const calSumOfSquares = (a, b) => {
    if (a < 0 || b < 0) {
      setErrorMsg("Please enter positive values");
      return false;
    }
    return a ** 2 + b ** 2;
  };

  const calHypotenuse = (e) => {
    setErrorMsg("");
    e.preventDefault();
    const sidesSquare = calSumOfSquares(Number(base), Number(height));
    if (sidesSquare) {
      setLengthOfHypotenuse(Math.sqrt(sidesSquare));
    }
  };
  return (
    <div className="d-flex flex-direction-column">
      <h1>Calculate Hypotenuse of a triangle</h1>
      <form
        onSubmit={(e) => calHypotenuse(e)}
        className="d-flex flex-direction-column"
      >
        <label className="mt-1">Enter one side value (a) =</label>
        <input
          required
          value={base}
          onChange={(e) => setBase(e.target.value)}
          type="number"
          className="input-box"
        />
        <label className="mt-1">Enter second side value (b) =</label>
        <input
          required
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="number"
          className="input-box"
        />
        <button type="submit" className="btn mt-1">
          Calculate Hypotenuse
        </button>
      </form>
      <h2>Hypotenuse formula</h2>
      <p>√(base² + height²)</p>
      {errorMsg && <p>{errorMsg}</p>}
      {lenghtOfHypotenuse && !errorMsg && (
        <p>{"The length of hypotenuse is " + lenghtOfHypotenuse.toFixed(2)} </p>
      )}
    </div>
  );
};
export default Hypotenuse;
