import React from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          By signing up, you are opting in to Attorney at Work's free practice
          tips newsletter and occasional emails with news and offers
        </FooterSubHeading>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Clients</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>The Firm</FooterLinkTitle>
            <FooterLink to="/">Attorneys</FooterLink>
            <FooterLink to="/">Awards</FooterLink>
            <FooterLink to="/">Case Results</FooterLink>
            <FooterLink to="/">Contact</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Areas Served</FooterLinkTitle>
            <FooterLink to="/">Bronx</FooterLink>
            <FooterLink to="/">Brooklyn</FooterLink>
            <FooterLink to="/">Long Island</FooterLink>
            <FooterLink to="/">Queens</FooterLink>
            <FooterLink to="/">Manhattan</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Legal</FooterLinkTitle>
            <FooterLink to="/">Privacy Policy</FooterLink>
            <FooterLink to="/">Disclaimer</FooterLink>
            <FooterLink to="/">Sitemap</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            PALMAS
          </SocialLogo>
          <WebsiteRights>All Rights Reserved © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="http://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="//www.instagram.com"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="//www.youtube.com"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="//www.twitter.com"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="//www.linkedin.com"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
