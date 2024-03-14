import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

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
                More about WalletWatch!
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Find us on github!</Heading>
                        <FooterLink href="https://github.com/nsettyy">
                            Nick
                        </FooterLink>
                        <FooterLink href="https://github.com/TorresBones">
                            Jonathan
                        </FooterLink>
                        <FooterLink href="https://github.com/BorzoiBurrow">
                            Brad
                        </FooterLink>
                        <FooterLink href="https://github.com/savannahjk02">
                          Savannah
                        </FooterLink>
                        <FooterLink href="https://github.com/nguyent0275">
                            Toan
                        </FooterLink>
                        <FooterLink href="https://github.com/nsettyy/wallet-watch">
                        Project github
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Find us on LinkedIn!</Heading>
                        <FooterLink href="https://www.linkedin.com/in/toan-nguyen-2498a1293/">
                            Toan
                        </FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/nicholas-settembrino-504760187/">
                            Nick
                        </FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/bradley-reeser-834681252/">
                            Brad
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;