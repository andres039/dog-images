import React, { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";
import Error from "./Error";

const initialBreeds = [
  { id: 1, name: "boxer" },
  { id: 2, name: "husky" },
];

const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setError] = useState(null);
  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds()
      .then((newBreeds) => setBreeds(newBreeds))
      .catch((reason) => {
        console.error(reason);
        setError("Error al cargar las razas");
      });
  };
  return (
    <>
    <select onChange={(e) => updateDog(e.target.value)}>
      {breeds.map((breed) => (
        <option key={breed.id} value={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
    {error && <Error error={error}/>  }
    
    </>
  );
};

export default Select;
