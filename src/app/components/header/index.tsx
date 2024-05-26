// import {
//   Box,
//   Flex,
//   Button,
//   useColorModeValue,
//   Stack,
//   useColorMode,
// } from "@chakra-ui/react";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// export default function Nav() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <>
//       <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
//         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//           <Box fontSize={"2xl"} fontWeight={"bolder"} fontFamily={"italic"}>
//             PERSONALITY TEST APP
//           </Box>
//           <Flex alignItems={"center"}>
//             <Stack direction={"row"} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//               </Button>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }

import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      width="100%"
      bg="blue.400" // Set your desired header background color
      p={4}
      color="white"
      textAlign="center"
    >
      <Heading size="lg">Personality Test</Heading>
    </Box>
  );
};

export default Header;
