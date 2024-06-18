import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Box, Button, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Box bg="blue.500" p={4} color="white">
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Box fontSize="xl" fontWeight="bold">SecureGuard Insurance</Box>
          <Button colorScheme="blue" variant="outline">Login</Button>
        </Flex>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
