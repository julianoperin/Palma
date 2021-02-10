import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiLovers } from "react-icons/gi";
import { GiRock } from "react-icons/gi";
import { BsPersonCheckFill } from "react-icons/bs";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardCost>Strength</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    We’re on your side and will not stop fighting until your
                    story has been heard, respected, and justly awarded
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiLovers />
                </PricingCardIcon>
                <PricingCardCost>Compassion</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Our client-focused commitment has earned our firm more than
                    200 five-star reviews from those we've served
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <BsPersonCheckFill />
                </PricingCardIcon>
                <PricingCardCost>Leadership</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    With decades of trial experience insurance companies know we
                    won't settle for unfair compensation
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
