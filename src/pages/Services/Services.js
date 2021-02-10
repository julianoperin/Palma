import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from "./Data";

function Services() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />

      <Pricing />
    </>
  );
}

export default Services;
