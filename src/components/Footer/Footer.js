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
            <FooterLinkTitle>Resources</FooterLinkTitle>
            <FooterLink to="/">Palmas Blog</FooterLink>
            <FooterLink to="/">Inspiration Center</FooterLink>
            <FooterLink to="/">Success Stories</FooterLink>
            <FooterLink to="/">Developer Docs</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Partners</FooterLinkTitle>
            <FooterLink to="/">Resellers</FooterLink>
            <FooterLink to="/">Affiliates</FooterLink>
            <FooterLink to="/">Designers</FooterLink>
            <FooterLink to="/">Education</FooterLink>
            <FooterLink to="/">Partnerships</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Company</FooterLinkTitle>
            <FooterLink to="/">About</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Terms</FooterLink>
            <FooterLink to="/">Privacy Policy</FooterLink>
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
