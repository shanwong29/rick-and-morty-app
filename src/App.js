import React, { useState, useEffect } from "react";
import "./App.css";
import getData from "./service/getData";
import InfoCard from "./InfoCard/InforCard";

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [error, setError] = useState("");

  const fetchCharacterData = async () => {
    try {
      const response = await getData(
        `https://rickandmortyapi.com/api/character/`
      );

      if (response.error) {
        console.log("Err returned from API:", response.error);
        return setError(response.error);
      }

      setCharacterData(response.results);
    } catch (err) {
      console.log("Err from fetching", err);
      return setError(err);
    }
  };

  useEffect(() => {
    fetchCharacterData();
  }, []);

  return (
    <div className="App">
      <InfoCard characterData={characterData} />
    </div>
  );
}

export default App;
