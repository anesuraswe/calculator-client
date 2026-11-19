
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box minH="100vh" bg="bg" color="fg">
      <NavBar />

      <Box id="home" py={{ base: 16, md: 24 }}>
        <Container maxW="1200px">
          <VStack align="flex-start" gap={5}>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="fg.muted"
              letterSpacing="widest"
            >
              PAEDIATRIC CLINICAL TOOLS
            </Text>

            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              maxW="750px"
              lineHeight="1.15"
            >
              Clinical calculations, made simpler.
            </Heading>

            <Text color="fg.muted" fontSize="lg" maxW="600px">
              A central workspace for paediatric reference information
              and calculation tools.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Box id="calculators" py={16} borderTopWidth="1px" borderColor="border">
        <Container maxW="1200px">
          <Heading size="xl">Calculators</Heading>
          <Text color="fg.muted" mt={2}>
            Our calculation tools will appear here.
          </Text>
        </Container>
      </Box>

      <Box id="about" py={16} borderTopWidth="1px" borderColor="border">
        <Container maxW="1200px">
          <Heading size="xl">About PaedCalc</Heading>
          <Text color="fg.muted" mt={2}>
            An educational prototype for paediatric calculation tools.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
