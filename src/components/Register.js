import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { config } from "../App";
import Footer from "./Footer";
import Header from "./Header";
import "./Register.css";
import { useHistory, Link } from "react-router-dom";

const Register = () => {

  let [loading,setLoading]=useState(false)
  // eslint-disable-next-line
  const { enqueueSnackbar } = useSnackbar();


  // TODO: CRIO_TASK_MODULE_REGISTER - Implement the register function
  /**
   * Definition for register handler
   * - Function to be called when the user clicks on the register button or submits the register form
   *
   * @param {{ username: string, password: string, confirmPassword: string }} formData
   *  Object with values of username, password and confirm password user entered to register
   *
   * API endpoint - "POST /auth/register"
   *
   * Example for successful response from backend for the API call:
   * HTTP 201
   * {
   *      "success": true,
   * }
   *
   * Example for failed response from backend for the API call:
   * HTTP 400
   * {
   *      "success": false,
   *      "message": "Username is already taken"
   * }
   */
  // eslint-disable-next-line
  let [userName,setUserName]=useState("")
  let [password,setPassword]=useState("")
  let [confirmPassword,setconfirmPassword]=useState("")
  const register = async (formData) => {

    console.log(formData)
    delete formData.confirmPassword
    console.log(formData)
    //console.log(config.endpoint)
    let url=config.endpoint+"/auth/register"
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    axios.post(url,formData).then((response)=>{
      console.log(response)
      enqueueSnackbar("Registered Successfully",{ variant: 'success' })
    }).catch((error)=>{
      console.log(error.response)
      if(error.response && error.response.status === 400)
        enqueueSnackbar("Username is already taken",{ variant: 'error' })
      else
        enqueueSnackbar("Something went wrong. Check that the backend is running, reachable and returns valid JSON.",{ variant: 'error' })
    })
  };

  // TODO: CRIO_TASK_MODULE_REGISTER - Implement user input validation logic
  /**
   * Validate the input values so that any bad or illegal values are not passed to the backend.
   *
   * @param {{ username: string, password: string, confirmPassword: string }} data
   *  Object with values of username, password and confirm password user entered to register
   *
   * @returns {boolean}
   *    Whether validation has passed or not
   *
   * Return false if any validation condition fails, otherwise return true.
   * (NOTE: The error messages to be shown for each of these cases, are given with them)
   * -    Check that username field is not an empty value - "Username is a required field"
   * -    Check that username field is not less than 6 characters in length - "Username must be at least 6 characters"
   * -    Check that password field is not an empty value - "Password is a required field"
   * -    Check that password field is not less than 6 characters in length - "Password must be at least 6 characters"
   * -    Check that confirmPassword field has the same value as password field - Passwords do not match
   */
  // eslint-disable-next-line
  const validateInput = (data) => {
    let count=0
    if(data.username==='')
      {
        enqueueSnackbar("Username is a required field",{ variant: 'warning' })
        count++
      }
      else if(data.username.length<6 && data.username!=='')
      {
        enqueueSnackbar("Username must be at least 6 characters",{ variant: 'warning' })
        count++
      }
      else if(data.password==='')
      {
        enqueueSnackbar("Password is a required field",{ variant: 'warning' })
        count++
      }
      else if(data.password.length<6 && data.password!=='')
      {
        enqueueSnackbar("Password must be at least 6 characters",{ variant: 'warning' })
        count++
      }
      else if(data.password!==data.confirmPassword)
      {
        enqueueSnackbar("Passwords do not match",{ variant: 'warning' })
        count++
      }
      return count
    
  };

  let buttonJSX=(
    <Button className="button" variant="contained" onClick={(e)=>{
      // e.preventDefault()
       let count=validateInput({ username: userName, password: password, confirmPassword: confirmPassword})
       if(count===0)
         register({ username: userName, password: password, confirmPassword: confirmPassword})
      }}>
       Register Now
      </Button>
  )

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Header hasHiddenAuthButtons />
      <Box className="content">
        <Stack spacing={2} className="form">
          <h2 className="title">Register</h2>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            title="Username"
            name="username"
            placeholder="Enter Username"
            fullWidth
          onChange={(e)=>{
            //console.log(e.target.value)
            setUserName(e.target.value)
          }}/>
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            helperText="Password must be atleast 6 characters length"
            fullWidth
            placeholder="Enter a password with minimum 6 characters"
            onChange={(e)=>{
              //console.log(e.target.value)
              setPassword(e.target.value)
            }}
          />
          <TextField
            id="confirmPassword"
            variant="outlined"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            onChange={(e)=>{
              //console.log(e.target.value)
              setconfirmPassword(e.target.value)
            }}
          />
           {loading?<CircularProgress />:buttonJSX}
          <p className="secondary-action">
            Already have an account?{" "}
             <a className="link" href="https://www.youtube.com/">
              Login here
             </a>
          </p>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Register;
