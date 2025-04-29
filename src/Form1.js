import React from "react";
import { useState } from "react";

export default function Form1(){
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <h1>{name}</h1>
        <label>
          Enter your name:
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </form>
    </div>
  );
}