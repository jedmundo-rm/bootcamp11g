import React from "react";

export default function Pet({ pet: { name, age }, index }) {
  console.log({ pet: { name, age }, index });
  return (
    <li key={index} className="list-group-item">
      Name: {name}, age: {age}
    </li>
  );
}
