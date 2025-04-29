import React, { useState } from "react";

export default function Form2() {
  const [math, setMath] = useState("");
  const [physics, setPhysics] = useState("");
  const [average, setAverage] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const mathScore = parseFloat(math);
    const physicsScore = parseFloat(physics);

    if (!isNaN(mathScore) && !isNaN(physicsScore)) {
      const avg = (mathScore + physicsScore) / 2;
      setAverage(avg.toFixed(2)); 
    } else {
      setAverage("Invalid input");
    }
  };

  return (
    <div>
      <form onSubmit={handleCalculate}>
        <div>
          <label>Điểm Toán:</label>
          <input 
            type="number" 
            value={math} 
            onChange={(e) => setMath(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Điểm Lý:</label>
          <input 
            type="number" 
            value={physics} 
            onChange={(e) => setPhysics(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">OK</button>
      </form>

      {average !== null && (
        <h2>Điểm trung bình: {average}</h2>
      )}
    </div>
  );
}
