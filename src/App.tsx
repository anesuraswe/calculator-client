
import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import PatientForm from "./components/PatientForm";
import PatientSummary from "./components/PatientSummary";
import CalculatorDashboard from "./components/CalculatorDashboard";

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

      <Container maxW="1000px" py={{ base: 10, md: 16 }}>
        <VStack align="stretch" gap={8}>
          <PatientForm onSubmit={setPatient} />

          {patient && <PatientSummary patient={patient} />}
        </VStack>
      </Container>

      <CalculatorDashboard
        onSelectCalculator={setSelectedCalculator}
      />

      {selected && (
        <Box py={16} id="selected-calculator">
          <Container maxW="1000px">
            <Heading size="xl">{selected.title}</Heading>

            <Text color="fg.muted" mt={3}>
              {selected.description}
            </Text>

            <Text mt={5} fontSize="sm" color="fg.muted">
              This calculator module is under development.
            </Text>
          </Container>
        </Box>
      )}
    </Box>
  );
}

export default App;
