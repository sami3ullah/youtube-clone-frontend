import React from "react";
import { Button } from "../../utils/styled/StyledComponents";
import {
  Container,
  Wrapper,
  Search,
  Input,
} from "./styled/Navbar.styledcomponent";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" aria-label="search" />
          <SearchOutlinedIcon />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
