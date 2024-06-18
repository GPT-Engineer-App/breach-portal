import { Container, Text, VStack, Box, Button, Heading, Flex, Icon } from "@chakra-ui/react";
import { FaRegHandshake, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">SecureGuard Insurance</Heading>
        <Text fontSize="xl">Your Shield Against Digital Threats</Text>
        <Text fontSize="md" color="gray.600">Instant Refunds | Human Client Service | Comprehensive Coverage</Text>
        <Flex justify="center" wrap="wrap" spacing={4}>
          <Box p={4} m={2} bg="blue.50" borderRadius="md" boxShadow="md" flex="1" minW="250px">
            <Icon as={FaMoneyBillWave} w={10} h={10} color="blue.500" />
            <Heading as="h3" size="md" mt={4}>Instant Refunds</Heading>
            <Text mt={2}>Get your money back instantly in case of any issues.</Text>
          </Box>
          <Box p={4} m={2} bg="blue.50" borderRadius="md" boxShadow="md" flex="1" minW="250px">
            <Icon as={FaRegHandshake} w={10} h={10} color="blue.500" />
            <Heading as="h3" size="md" mt={4}>Human Client Service</Heading>
            <Text mt={2}>Talk to real people who understand your needs.</Text>
          </Box>
          <Box p={4} m={2} bg="blue.50" borderRadius="md" boxShadow="md" flex="1" minW="250px">
            <Icon as={FaShieldAlt} w={10} h={10} color="blue.500" />
            <Heading as="h3" size="md" mt={4}>Comprehensive Coverage</Heading>
            <Text mt={2}>Protect yourself against all kinds of digital threats.</Text>
          </Box>
        </Flex>
        <Button colorScheme="blue" size="lg" mt={8}>Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;