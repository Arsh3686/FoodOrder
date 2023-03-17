import React from "react";

const GetCardsData = ({ states }) => {
  // console.log(states);
  return (
    <>
      {states.map((elem) => {
        return (
          <>
            {/* <h1>{elem.name}</h1> */}
          </>
        );
      })}
    </>
  );
};

export default GetCardsData;
