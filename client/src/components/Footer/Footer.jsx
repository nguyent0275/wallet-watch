import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

import { FaGithub, FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";

// https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/

const Footer = () => {
  return (
    <Box style={{ justifyContent: "center" }}>
      <h1
        style={{
          color: "rgb(240, 175, 11)",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        More about the WalletWatch Team
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>Toan Nguyen</Heading>
            <h4 style={{ color: "white" }}>Frontend/Backend Developer</h4>
            <div className="icon-container">
              <FooterLink href="https://github.com/nguyent0275">
                <FaGithub size={40} />
              </FooterLink>
              <FooterLink href="https://www.linkedin.com/in/toan-nguyen-2498a1293/">
                <BsLinkedin size={40} />
              </FooterLink>
              <FooterLink href="https://stackoverflow.com/users/23471165/nguyent0275">
                <FaStackOverflow size={40} />
              </FooterLink>
            </div>
          </Column>
          <Column>
            <Heading>Nick Settembrino</Heading>
            <h4 style={{ color: "white" }}>Developer</h4>
            <div className="icon-container">
              <FooterLink href="https://github.com/nsettyy">
                <FaGithub size={40} />
              </FooterLink>
              <FooterLink href="https://www.linkedin.com/in/nicholas-settembrino-504760187/">
                <BsLinkedin size={40} />
              </FooterLink>
            </div>
          </Column>
          <Column>
            <Heading>Bradley Reeser</Heading>
            <h4 style={{ color: "white" }}>Developer</h4>
            <div className="icon-container">
              <FooterLink href="https://github.com/BorzoiBurrow">
                <FaGithub size={40} />
              </FooterLink>
              <FooterLink href="https://www.linkedin.com/in/bradley-reeser-834681252/">
                <BsLinkedin size={40} />
              </FooterLink>
            </div>
          </Column>
          <Column>
            <Heading>Savannah Klinger</Heading>
            <h4 style={{ color: "white" }}>Developer</h4>
            <div className="icon-container">
              <FooterLink href="https://github.com/savannahjk02">
                <FaGithub size={40} />
              </FooterLink>
            </div>
          </Column>
          <Column>
            <Heading>Jonathan Torres Bones</Heading>
            <h4 style={{ color: "white" }}>FrontEnd/BackEnd Developer</h4>
            <div className="icon-container">
              <FooterLink href="https://github.com/TorresBones">
                <FaGithub size={40} />
              </FooterLink>
              <FooterLink href="https://twitter.com/JohnnyTW10">
                <FaTwitter size={40} />
              </FooterLink>
            </div>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
