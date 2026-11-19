
import { useState } from "react";
import { Box, Container, VStack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import PatientForm from "./components/PatientForm";
import PatientSummary from "./components/PatientSummary";

import type { PatientDetails } from "./types/patient";

function App() {
  const [patient, setPatient] = useState<PatientDetails | null>(null);

  return (
    <Box minH="100vh" bg="bg" color="fg">
      <NavBar />

      <Container maxW="1000px" py={{ base: 10, md: 16 }}>
        <VStack align="stretch" gap={8}>
          <PatientForm onSubmit={setPatient} />

          {patient && <PatientSummary patient={patient} />}
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
