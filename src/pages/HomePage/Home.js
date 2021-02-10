import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />

      <Pricing />
    </>
  );
}

export default Home;
