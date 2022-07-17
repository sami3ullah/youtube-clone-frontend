import React from "react";
import { Login, Span } from "./styled/SignUp.styledcomponent";
import { Button } from "../../utils/styled/StyledComponents";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function SignUp() {
  return (
    <Login>
      <Span>Sign in to like videos, comment and subscribe.</Span>
      <Button>
        <AccountCircleOutlinedIcon /> SIGN IN
      </Button>
    </Login>
  );
}

export default SignUp;
