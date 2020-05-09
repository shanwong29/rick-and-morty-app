import React from "react";
import BasicInfoCards from "./components/BasicInfoCards/BasicInfoCards";
import DetailCard from "./components/DetailCard/DetailCard";
import PageControl from "./components/PageControl/PageControl";
import QueryInput from "./components/QueryInput/QueryInput";
import * as Styled from "./App.styles";
import GlobalStateProvider from "./store/GlobalStateProvider";

function App() {
  console.log("APP");

  return (
    <GlobalStateProvider>
      <Styled.AppWrapper>
        <QueryInput />
        <BasicInfoCards />
        <DetailCard />
        <PageControl />
      </Styled.AppWrapper>
    </GlobalStateProvider>
  );
}

export default App;
