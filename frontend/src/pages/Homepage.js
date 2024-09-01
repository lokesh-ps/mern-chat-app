import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Homepage = () => {
  const history = useHistory();
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      if (user) {
        history.push("/chats");
      }
    } catch (err) {}
  }, [history]);
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="work sans" color="black">
          Talk-A-Tive
        </Text>
      </Box>
      <Box
        p={4}
        w="100%"
        bg="white"
        borderRadius="lg"
        color="black"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login />}</TabPanel>
            <TabPanel>{<Signup />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
