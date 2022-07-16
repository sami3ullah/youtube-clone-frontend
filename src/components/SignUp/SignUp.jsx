import React from "react";
import { Login, Button } from "./styled/SignUp.styledcomponent";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function SignUp() {
  return (
    <Login>
      Sign in to like videos, comment and subscribe.
      <Button>
        <AccountCircleOutlinedIcon /> SIGN IN
      </Button>
    </Login>
  );
}

export default SignUp;
