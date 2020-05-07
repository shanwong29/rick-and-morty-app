import React, { useState, useEffect } from "react";
import "./App.css";
import getData from "./service/getData";
import InfoCard from "./InfoCard/InforCard";
import PageControl from "./PageControl/PageControl";

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [showSecondPart, setShowSecondPart] = useState(false);

  console.log("APP");

  const fetchCharacterData = async (query = "") => {
    try {
      const response = await getData(
        `https://rickandmortyapi.com/api/character/${query}`
      );

      if (response.error) {
        console.log("Err returned from API:", response.error);
        return setError(response.error);
      }

      setCharacterData(response.results);
      // console.log("He");
      setDataInfo(response.info);
    } catch (err) {
      console.log("Err from fetching", err);
      return setError(err);
    }
  };

  useEffect(() => {
    fetchCharacterData();
  }, []);

  useEffect(() => {
    // console.log("PAGE USEEFFECT");
    fetchCharacterData(`?page=${page}`);
  }, [page]);

  return (
    <div className="App">
      <InfoCard
        characterData={characterData}
        showSecondPart={showSecondPart}
        page={page}
      />
      <PageControl
        dataInfo={dataInfo}
        setPage={setPage}
        setShowSecondPart={setShowSecondPart}
        page={page}
      />
    </div>
  );
}

export default App;
