import React from "react";
import styled from "styled-components";
import YoutubeLogo from "../../assets/logo_1.png";
import MenuIcons from "../MenuIcons/MenuIcons";
import { Container, Wrapper, Logo, Img } from "./styled/Menu.styledcomponent";

function Menu() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={YoutubeLogo} alt="youtube logo" />
          Youtube
        </Logo>
        <MenuIcons />
      </Wrapper>
    </Container>
  );
}

export default Menu;
