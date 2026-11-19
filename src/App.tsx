
import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import PatientForm from "./components/PatientForm";
import PatientSummary from "./components/PatientSummary";
import CalculatorDashboard from "./components/CalculatorDashboard";
import Observations from "./components/Observations";

import type { PatientDetails } from "./types/patient";
import { calculators } from "./data/calculators";

function App() {
  const [patient, setPatient] = useState<PatientDetails | null>(null);
  const [selectedCalculator, setSelectedCalculator] = useState<string | null>(
    null
  );

  const selected = calculators.find(
    (calculator) => calculator.id === selectedCalculator
  );

  return (
    <Box minH="100vh" bg="bg" color="fg">
      <NavBar />

      <Container maxW="1400px" py={{ base: 6, md: 10 }}>
        <VStack align="stretch" gap={6}>
          <PatientForm onSubmit={setPatient} />

          {patient && <PatientSummary patient={patient} />}

          {/* Dashboard and calculator panel */}
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "2fr 1fr",
            }}
            gap={6}
            alignItems="start"
          >
            {/* Left: Calculator dashboard */}
            <Box minW="0">
              <CalculatorDashboard
                onSelectCalculator={setSelectedCalculator}
              />
            </Box>

            {/* Right: Selected calculator */}
            <Box
              minW="0"
              position={{ base: "static", lg: "sticky" }}
              top="100px"
              borderWidth="1px"
              borderColor="border"
              borderRadius="xl"
              bg="bg"
              p={{ base: 4, md: 5 }}
              minH="300px"
            >
              {selected ? (
                selectedCalculator === "observations" ? (
                  <Observations />
                ) : (
                  <VStack align="stretch" gap={3}>
                    <Heading size="lg">{selected.title}</Heading>
                    <Text color="fg.muted" fontSize="sm">
                      {selected.description}
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                      This calculator module is under development.
                    </Text>
                  </VStack>
                )
              ) : (
                <VStack
                  justify="center"
                  align="center"
                  textAlign="center"
                  minH="260px"
                  gap={3}
                >
                  <Heading size="md">Select a calculator</Heading>
                  <Text color="fg.muted" fontSize="sm" maxW="250px">
                    Choose a calculator from the dashboard to view it here.
                  </Text>
                </VStack>
              )}
            </Box>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
