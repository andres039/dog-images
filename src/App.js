import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Select from "./components/Select";
import getDogs from "./helpers/getDogs";

const initialDog = {
  image:
    "https://www.gannett-cdn.com/presto/2020/06/12/PTAL/ce24bfcd-a8ac-46f8-bcd1-131d0f03609d-Everett_update.jpg?width=660&height=538&fit=crop&format=pjpg&auto=webp",
  breed: {
    id: "1",
    name: "Labrador",
  },
};
function App() {
  const [dog, setDog] = useState(initialDog);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = () => {
    getDogs()
      .then((newDog) => {
        setDog(newDog);
      })
      .catch((reason) => console.error(reason));
  };
  return (
    <div className="app">
      <Select />
      <Card dog={dog} />
    </div>
  );
}

export default App;
