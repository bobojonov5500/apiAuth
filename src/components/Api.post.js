import React, { useState } from "react";
import axios from "axios";
import "./FormStyle.css";

import {
  Box,
  Button,
  Input,
  InputGroup,
  IconButton,
  Heading,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const URL = "http://localhost:3000/auth/login";
const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL, {
        username: username,
        password: password,
      });
      console.log(response);
      if (response.status === 200) {
        const token = response.data.token;
        sessionStorage.setItem("authToken", token);
        window.location.href = "/user";
      }
    } catch (error) {
      alert("login yoki parol xatolik bor");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleLogin}>
        <Box width={60}>
          <Heading>Login</Heading>
          <Input
            marginTop={2}
            size="xs"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputGroup size="xs">
            <Input
              marginTop={2}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement>
              <IconButton
                marginTop={4}
                variant="link"
                aria-label={showPassword ? "Hide password" : "Show password"}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
          <Button size="sm" marginTop={2} colorScheme="teal" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};
export default Auth;
