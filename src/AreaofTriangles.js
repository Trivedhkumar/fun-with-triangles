import React, { useState } from "react";

const AreaOfTriangle = () => {
  const [area, setArea] = useState("");
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const calAreaofTriangle = (e) => {
    setErrorMsg("");
    e.preventDefault();
    const baseValue = Number(base);
    const HeightValue = Number(height);
    if (baseValue < 0 || HeightValue < 0) {
      setErrorMsg("Please enter positive values");
      return;
    }
    setArea((1 / 2) * base * height);
  };
  return (
    <div className="d-flex flex-direction-column">
      <h1>Calculate Area of a triangle</h1>
      <form
        onSubmit={(e) => calAreaofTriangle(e)}
        className="d-flex flex-direction-column"
      >
        <label className="mt-1">Enter base value (a) =</label>
        <input
          required
          value={base}
          onChange={(e) => setBase(e.target.value)}
          type="number"
          className="input-box"
        />
        <label className="mt-1">Enter height value (b) =</label>
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
      <h2>Area formula</h2>
      <p>1/2*(base * height)</p>
      {errorMsg && <p>{errorMsg}</p>}
      {area && !errorMsg && (
        <p>{"The Area of Triangle is " + area.toFixed(2)} </p>
      )}
    </div>
  );
};
export default AreaOfTriangle;
