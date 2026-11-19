
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import type { PatientDetails } from "../types/patient";
import { calculateAge } from "../utils/calculateAge";

interface PatientSummaryProps {
  patient: PatientDetails;
}

const PatientSummary = ({ patient }: PatientSummaryProps) => {
  const age = calculateAge(patient.dateOfBirth);

  const ageLabel = [
    age.years > 0 ? `${age.years} years` : "",
    age.months > 0 ? `${age.months} months` : "",
    `${age.days} days`,
  ]
    .filter(Boolean)
    .join(", ");

  const details = [
    { label: "Age", value: ageLabel },
    { label: "Weight", value: `${patient.weight} kg` },
    {
      label: "Height",
      value: patient.height ? `${patient.height} cm` : "Not provided",
    },
  ];

  return (
    <Box
      bg="bg"
      borderWidth="1px"
      borderColor="border"
      borderRadius="xl"
      p={6}
      w="100%"
    >
      <VStack align="stretch" gap={5}>
        <Box>
          <Text
            fontSize="xs"
            color="fg.muted"
            fontWeight="semibold"
            letterSpacing="widest"
          >
            PATIENT SUMMARY
          </Text>

          <Heading size="lg" mt={2}>
            Patient Information Saved
          </Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
          {details.map((detail) => (
            <Box
              key={detail.label}
              bg="bg.muted"
              borderRadius="lg"
              p={4}
            >
              <Text fontSize="sm" color="fg.muted">
                {detail.label}
              </Text>

              <Text fontSize="lg" fontWeight="bold" mt={2}>
                {detail.value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default PatientSummary;
