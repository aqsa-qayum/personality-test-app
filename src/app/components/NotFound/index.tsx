// src/app/components/NotFound/index.tsx
import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        color={"blue.400"}
        _hover={{
            bg: "blue.500",
        }}
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>
      <Button
        bg={"blue.400"}
        color={"white"}
        _hover={{
            bg: "blue.500",
        }}
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
