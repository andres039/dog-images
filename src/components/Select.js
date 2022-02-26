import React, { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";

const initialBreeds = [
  { id: 1, name: "boxer" },
  { id: 2, name: "husky" },
];

const Select = () => {
  const [breeds, setBreeds] = useState(initialBreeds);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds()
      .then((newBreeds) => setBreeds(newBreeds))
      .catch((reason) => console.error(reason));
  };
  return (
    <select onChange={() => alert('change happens')}>
      {breeds.map((breed) => (
        <option key={breed.id} value={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
