import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

const ResultScreen: React.FC = () => {
  const location = useLocation();
  const { trait, username } = location.state;
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxW="600px"
        width="100%"
        textAlign="center"
      >
        <Heading
          fontWeight={300}
          fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
          lineHeight={"110%"}
          mb={4}
        >
          Your Personality Trait
        </Heading>
        <Box justifyContent={"center"} display={"flex"}>
        <Text color={"gray.500"} fontSize={"3xl"} mb={6} mr={2}>
          {username}, you are an
          </Text>
          <Text fontSize={"3xl"} mb={6}>{trait}.</Text>
        </Box>
        
        <Button
          colorScheme="blue"
          bg="blue.400"
          px={6}
          _hover={{
            bg: "blue.500",
          }}
          onClick={() => navigate("/")}
        >
          Finish Test
        </Button>
      </Box>
    </Box>
  );
};

export default ResultScreen;
