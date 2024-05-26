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
      bg="gray.100" // Set background color for the page
    >
      <Box
        bg="white" // Set background color for the card
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxW="600px"
        width="100%"
        textAlign="center"
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          mb={4}
        >
          Your Personality Trait
        </Heading>
        <Text color={"gray.500"} fontSize={"3xl"} mb={6}>
          {username}, you are an {trait}.
        </Text>
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
