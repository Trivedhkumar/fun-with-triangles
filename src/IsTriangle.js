import React, { useState } from "react";
import "./styles.css";
const IsTriangle = () => {
  const [angles, setAngles] = useState({
    angleOne: "",
    angleTwo: "",
    angleThree: ""
  });
  const [message, setMessage] = useState("");
  const calTriangle = () => {
    const angleKeys = Object.keys(angles);
    let angleSum = 0;
    for (let i = 0; i < angleKeys.length; i++) {
      angleSum += Number(angles[angleKeys[i]]);
    }
    return angleSum;
  };
  const validateIsTriangle = () => {
    const sumofAngles = calTriangle();
    if (sumofAngles === 180) {
      setMessage("Yay your angles form a triangle");
    } else {
      setMessage("Oh Oh! The angle doesn't form a triangle");
    }
  };
  return (
    <div className="d-flex flex-direction-column">
      <h1>Angles Of Triangle</h1>
      <label className="mt-1" for="angle-one">
        Angle 1
      </label>
      <input
        className="input-box"
        type="number"
        value={angles.angleOne}
        id="angle-one"
        onChange={(e) => setAngles({ ...angles, angleOne: e.target.value })}
      />
      <label className="mt-1" for="angle-two">
        Angle 2
      </label>
      <input
        className="input-box"
        type="number"
        value={angles.angleTwo}
        id="angle-two"
        onChange={(e) => setAngles({ ...angles, angleTwo: e.target.value })}
      />
      <label className="mt-1" for="angle-three">
        Angle 3
      </label>
      <input
        className="input-box"
        type="number"
        value={angles.angleThree}
        id="angle-three"
        onChange={(e) => setAngles({ ...angles, angleThree: e.target.value })}
      />
      <button className="mt-1 btn" onClick={validateIsTriangle}>
        Check
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};
export default IsTriangle;
