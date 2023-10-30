import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// eslint-disable-next-line
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"

const Header = ({ children, hasHiddenAuthButtons }) => {
  let user=localStorage.getItem("username")
  console.log(user)
  let defaultJSX=(
    <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        <Link to="/">
          <Button
            className="explore-button"
            startIcon={<ArrowBackIcon />}
            variant="text"
          >
            Back to explore
          </Button>
        </Link>
      </Box>

  );

  let loggedInHeader=(
    <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        <div>
          <img src="avatar.png" alt="/crio.do/i"></img>
          <Button variant="text">
            {user}
          </Button>
          <Link to="/">
            <Button variant="text" onClick={()=>{
              localStorage.removeItem("username")
              localStorage.removeItem("balance")
              localStorage.removeItem("token")
              window.location.reload()
            }}>
              LOGOUT
            </Button>
          </Link>
          </div>
      </Box>
  );

  let notLoggedInHeader=(
    <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        <div>
          <Link to="/login">
            <Button variant="text">
              LOGIN
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="text">
              REGISTER
            </Button>
          </Link>
          </div>
      </Box>
  );
  console.log(hasHiddenAuthButtons)
    return (
      <>
      {hasHiddenAuthButtons?  (defaultJSX)  : (localStorage.getItem("username")?loggedInHeader:notLoggedInHeader) } 
      </>
    );
};

export default Header;
