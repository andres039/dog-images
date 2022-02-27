import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Error from "./components/Error";
import Select from "./components/Select";
import getDogs from "./helpers/getDogs";

const initialDog = {
  image:
    "",
  breed: {
    id: "0",
    name: "Random",
  },
};
function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    updateDog(0);
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDogs(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false);
      })
      .catch((reason) => {
        console.error(reason);
        setError("Error al cargar un perro");
        setLoading(false);
      });
  };
  return (
    <div className="app">
      <Select updateDog={updateDog} />
      {error && <Error error={error} />}
      <Card dog={dog} updateDog={updateDog} loading={loading} />
    </div>
  );
}

export default App;
