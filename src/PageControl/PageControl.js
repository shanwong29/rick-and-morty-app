import React from "react";

const PageControl = ({ dataInfo, setPage, setShowSecondPart, page }) => {
  //   console.log("page control");
  const { count } = dataInfo;

  const numberOfBtns = Math.ceil(count / 10);

  let btnDisplay = [];

  for (let i = 1; i <= numberOfBtns; i++) {
    let targetPage = Math.ceil(i / 2);

    let callbackFn = () => {
      setPage(targetPage);
      setShowSecondPart(false);
    };
    if (i % 2 === 0) {
      callbackFn = () => {
        setShowSecondPart(true);
      };

      if (targetPage !== page) {
        callbackFn = () => {
          setPage(targetPage);
          setShowSecondPart(true);
        };
      }
    }
    btnDisplay.push(
      <button key={i} onClick={callbackFn}>
        {i}
      </button>
    );
  }

  return <div>{btnDisplay}</div>;
};

export default React.memo(PageControl);
