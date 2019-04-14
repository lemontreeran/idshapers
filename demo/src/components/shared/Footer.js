import React from "react";
import styled from "styled-components";

import { Container } from "../shared/grid";
import * as theme from "../shared/theme";
import UportLogo from "../../images/airport-logo.png";

// eslint-disable-next-line
const link = <a href="https://uport.me" target="_blank">uPort</a>;

class Footer extends React.Component {
  render() {
    return (<Wrapper>
      <Container>
        <Bar />
        <Center>
        </Center>
      </Container>
    </Wrapper>)
  }
}

const Wrapper = styled.footer`
  background-color: ${theme.footer.bg};
  color: ${theme.footer.textColor};
  font-size: 0.875rem;
  padding-top: 10px;
  position: relative;

  a {
    color: ${theme.footer.primary};
    font-weight: 600;
    text-decoration: none;
  }
`;
const Bar = styled.div`
  border-top: solid 1px ${theme.footer.separatorColor};
  height: 1px;
  left: 0;
  margin-top: 0.5em;
  position: absolute;
  right: 0;
  z-index: 2;
`;
const Center = styled.div`
  background-color: ${theme.footer.bg};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  width: 15em;
  z-index: 3;
`;
const Logo = styled.img`
  display: inline-block;
  margin-right: 10px;
`;

export default Footer;
