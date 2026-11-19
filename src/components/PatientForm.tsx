
import { useState, type FormEvent } from "react";
import {
  Box,
  Button,
  Field,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import type { PatientDetails } from "../types/patient";

interface PatientFormProps {
  onSubmit: (patient: PatientDetails) => void;
}

const PatientForm = ({ onSubmit }: PatientFormProps) => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [errors, setErrors] = useState<{
    dateOfBirth?: string;
    weight?: string;
    height?: string;
  }>({});

  // Get today's date in local YYYY-MM-DD format
  const today = (() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  })();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: typeof errors = {};

    if (!dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required.";
    } else {
      const birthDate = new Date(`${dateOfBirth}T00:00:00`);

      if (Number.isNaN(birthDate.getTime())) {
        newErrors.dateOfBirth = "Enter a valid date.";
      } else if (dateOfBirth > today) {
        newErrors.dateOfBirth = "Date of birth cannot be in the future.";
      }
    }

    const weightValue = Number(weight);

    if (!weight || !Number.isFinite(weightValue) || weightValue <= 0) {
      newErrors.weight = "Enter a valid weight greater than zero.";
    }

    const heightValue = Number(height);

    if (
      height.trim() !== "" &&
      (!Number.isFinite(heightValue) || heightValue <= 0)
    ) {
      newErrors.height = "Enter a valid height greater than zero.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    onSubmit({
      dateOfBirth,
      weight: weightValue,
      height: height.trim() ? heightValue : undefined,
    });
  };

  return (
    <Box
      id="patient"
      bg="bg"
      borderWidth="1px"
      borderColor="border"
      borderRadius="xl"
      p={{ base: 5, md: 8 }}
      w="100%"
    >
      <VStack align="stretch" gap={6}>
        <Box>
          <Text
            color="fg.muted"
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="widest"
          >
            PATIENT DETAILS
          </Text>

          <Heading size="lg" mt={2}>
            Patient Information
          </Heading>

          <Text color="fg.muted" fontSize="sm" mt={2}>
            Enter the patient's basic information to get started.
          </Text>
        </Box>

        <form onSubmit={handleSubmit}>
          <VStack align="stretch" gap={5}>
            <Field.Root invalid={!!errors.dateOfBirth} required>
              <Field.Label>Date of Birth</Field.Label>

              <Input
                type="date"
                value={dateOfBirth}
                max={today}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />

              <Field.ErrorText>
                {errors.dateOfBirth}
              </Field.ErrorText>
            </Field.Root>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              <Field.Root invalid={!!errors.weight} required>
                <Field.Label>Weight (kg)</Field.Label>

                <Input
                  type="number"
                  placeholder="e.g. 12.5"
                  min="0.01"
                  step="0.01"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />

                <Field.ErrorText>
                  {errors.weight}
                </Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={!!errors.height}>
                <Field.Label>Height (cm) - Optional</Field.Label>

                <Input
                  type="number"
                  placeholder="e.g. 85"
                  min="0.01"
                  step="0.1"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />

                <Field.ErrorText>
                  {errors.height}
                </Field.ErrorText>
              </Field.Root>
            </SimpleGrid>

            <Button
              type="submit"
              bg="fg"
              color="bg"
              size="lg"
              width="100%"
              _hover={{ opacity: 0.85 }}
            >
              Save Patient Information
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default PatientForm;
