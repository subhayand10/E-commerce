import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import {useHistory} from 'react-router-dom';
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  let history=useHistory();
  
  let userName=localStorage.getItem("username");


const clear=()=>{
  localStorage.clear();
  window.location.reload();
}


    return (
      <Box className="header">
      <Box className="header-title">
            {/* <img src="" alt="QKart-icon"></img> */}
            <h3 >Shop-Sub</h3>
        </Box>
        {children}
      {hasHiddenAuthButtons?(
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={(e)=>{history.push("/")}}
        >
          Back to explore
        </Button>
      ):(userName?(
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar alt={userName}  src="/public/avatar.png" />
          <h4> {userName}</h4>
          <Button  variant="contained"
          onClick={clear}
          >LOGOUT</Button></Stack>
        ):(
          <Stack direction="row" spacing={2}>
            <Button  variant="contained"
              onClick={(e)=>{history.push("/login")}}
            >LOGIN</Button>
          <Button  variant="contained" onClick={(e)=>{history.push("/register")}}>REGISTER</Button>
          </Stack>)
          )}
     </Box>
     
    );
};

export default Header;
