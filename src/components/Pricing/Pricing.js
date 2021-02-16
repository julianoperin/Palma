import React from "react";
import { Button } from "../../globalStyles";
import { RiShoppingCart2Line } from "react-icons/ri";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { BsPersonCheckFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { IoMdSpeedometer } from "react-icons/io";
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
                  <IoMdSpeedometer style={{ color: "#C91F51" }} />
                </PricingCardIcon>
                <PricingCardCost>Get Going</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Get step-by-step guidance on how to build and launch a
                    website with expert starter guides and planning tools.
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>See More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <HiOutlineStatusOnline style={{ color: "#C91F51" }} />
                </PricingCardIcon>
                <PricingCardCost>Get Online</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Get discovered with a professional website. Easily customize
                    with our free website builder.
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>See More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <RiShoppingCart2Line style={{ color: "#C91F51" }} />
                </PricingCardIcon>
                <PricingCardCost>Get Selling</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    All-in-one powerful eCommerce tools to simplify order
                    management, shipping, and payments.
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>See More</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
