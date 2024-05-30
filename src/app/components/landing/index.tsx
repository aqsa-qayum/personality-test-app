import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const LandingScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (username.trim()) {
      navigate("/questions", { state: { username } });
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <Flex minH={"60vh"} align={"center"} justify={"center"}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Enter Name To Start Test
        </Heading>
        <FormControl id="email">
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={handleStart}
          >
            Start
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default LandingScreen;
