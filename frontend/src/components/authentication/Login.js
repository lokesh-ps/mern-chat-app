import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const submitHandler = async () => {
    setLoading(true);

    if (!email || !password) {
      toast({
        title: "Please fill all the fields.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = axios.post("/api/user/login", { email, password }, config);
      toast({
        title: "Login Success.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      data.then((res) => {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      });
      setLoading(false);
      history.push("/chats");
    } catch (err) {
      console.log("err", err);

      toast({
        title: "Error occured!",
        description: err.response.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            value={password}
            type={show ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={() => submitHandler()}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("guestuser@example.com");
          setPassword("123456");
        }}
      >
        Guest User
      </Button>
    </VStack>
  );
};

export default Login;
