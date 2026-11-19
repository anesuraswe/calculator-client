
import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  NativeSelect,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  Activity,
  HeartPulse,
  Wind,
} from "lucide-react";

import { observationRanges } from "../data/observations";

const Observations = () => {
  const [selectedAge, setSelectedAge] = useState("1-year");

  const selectedRange = observationRanges.find(
    (item) => item.id === selectedAge
  );

  if (!selectedRange) return null;

  const observationCards = [
    {
      title: "Heart Rate",
      abbreviation: "HR",
      icon: HeartPulse,
      min: selectedRange.heartRate.min,
      max: selectedRange.heartRate.max,
      unit: "beats/min",
    },
    {
      title: "Respiratory Rate",
      abbreviation: "RR",
      icon: Wind,
      min: selectedRange.respiratoryRate.min,
      max: selectedRange.respiratoryRate.max,
      unit: "breaths/min",
    },
    {
      title: "Systolic Blood Pressure",
      abbreviation: "SBP",
      icon: Activity,
      min: selectedRange.systolicBP.min,
      max: selectedRange.systolicBP.max,
      unit: "mmHg",
    },
  ];

  return (
    <Box id="observations" py={{ base: 10, md: 16 }}>
      <Container maxW="1100px">
        <VStack align="stretch" gap={8}>
          {/* Heading */}
          <Box>
            <Text
              fontSize="xs"
              color="fg.muted"
              fontWeight="bold"
              letterSpacing="widest"
            >
              CLINICAL REFERENCES
            </Text>

            <Heading size="2xl" mt={2}>
              Observations
            </Heading>

            <Text color="fg.muted" mt={3} maxW="650px">
              View published acceptable reference ranges for
              paediatric heart rate, respiratory rate and systolic
              blood pressure.
            </Text>
          </Box>

          {/* Age selection */}
          <Box
            borderWidth="1px"
            borderColor="border"
            borderRadius="xl"
            p={5}
            bg="bg"
          >
            <VStack align="stretch" gap={3}>
              <Heading size="md">
                Select an age reference
              </Heading>

              <NativeSelect.Root>
                <NativeSelect.Field
                  value={selectedAge}
                  onChange={(event) =>
                    setSelectedAge(event.target.value)
                  }
                >
                  {observationRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.ageLabel}
                    </option>
                  ))}
                </NativeSelect.Field>

                <NativeSelect.Indicator />
              </NativeSelect.Root>

              <Text fontSize="xs" color="fg.muted">
                Selected reference: {selectedRange.ageLabel}
              </Text>
            </VStack>
          </Box>

          {/* Reference cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
            {observationCards.map((item) => {
              const Icon = item.icon;

              return (
                <Box
                  key={item.abbreviation}
                  borderWidth="1px"
                  borderColor="border"
                  borderRadius="xl"
                  p={6}
                  bg="bg"
                >
                  <VStack align="stretch" gap={5}>
                    <HStack justify="space-between">
                      <Box
                        bg="bg.muted"
                        p={3}
                        borderRadius="lg"
                      >
                        <Icon size={22} />
                      </Box>

                      <Text
                        fontSize="xs"
                        color="fg.muted"
                        fontWeight="bold"
                      >
                        {item.abbreviation}
                      </Text>
                    </HStack>

                    <Box>
                      <Text color="fg.muted" fontSize="sm">
                        {item.title}
                      </Text>

                      <Heading size="2xl" mt={2}>
                        {item.min}–{item.max}
                      </Heading>

                      <Text color="fg.muted" fontSize="xs" mt={2}>
                        {item.unit}
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              );
            })}
          </SimpleGrid>

          {/* Clinical note */}
          <Box
            borderWidth="1px"
            borderColor="border"
            borderRadius="lg"
            p={5}
          >
            <Heading size="sm" mb={2}>
              Clinical note
            </Heading>

            <Text color="fg.muted" fontSize="sm" lineHeight="1.8">
              These are acceptable reference ranges for unwell
              children from the selected guideline. They are not
              diagnostic thresholds. Interpret observations in
              the context of the child's clinical condition and
              repeated measurements.
            </Text>
          </Box>

          <Text color="fg.muted" fontSize="xs">
            Source: Royal Children's Hospital Melbourne —
            Acceptable ranges for physiological variables.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Observations;
