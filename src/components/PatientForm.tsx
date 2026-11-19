import { useState, type FormEvent } from "react";
import {
  Box,
  Button,
  Field,
  Grid,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import type { PatientDetails } from "../types/patient";

interface PatientFormProps {
  onSubmit: (patient: PatientDetails) => void;
}

const PatientForm = ({ onSubmit }: PatientFormProps) => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dob = new Date(`${dateOfBirth}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!dateOfBirth || Number.isNaN(dob.getTime()) || dob > today) {
      setError("Enter a valid date of birth.");
      return;
    }

    const parsedWeight = Number(weight);
    const parsedHeight = height ? Number(height) : undefined;

    if (!weight || !Number.isFinite(parsedWeight) || parsedWeight <= 0) {
      setError("Enter a valid weight.");
      return;
    }

    if (
      height &&
      (parsedHeight === undefined ||
        !Number.isFinite(parsedHeight) ||
        parsedHeight <= 0)
    ) {
      setError("Enter a valid height.");
      return;
    }

    setError("");

    onSubmit({
      dateOfBirth,
      weight: parsedWeight,
      height: parsedHeight,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        as="form"
        p={{ base: 3, md: 4 }}
        borderWidth="1px"
        borderColor="border"
        borderRadius="lg"
        bg="bg"
      >
        <Box mb={3}>
          <Heading size="sm">Patient Information</Heading>
          <Text fontSize="xs" color="fg.muted" mt={1}>
            Enter basic patient details to personalise calculations.
          </Text>
        </Box>

        <Grid
          templateColumns={{ base: "1fr", md: "1.2fr 1fr 1fr auto" }}
          gap={3}
          alignItems="end"
        >
          <Field.Root required>
            <Field.Label fontSize="xs">Date of Birth</Field.Label>
            <Input
              type="date"
              size="sm"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </Field.Root>

          <Field.Root required>
            <Field.Label fontSize="xs">Weight (kg)</Field.Label>
            <Input
              type="number"
              size="sm"
              min="0"
              step="0.01"
              placeholder="e.g. 12.5"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label fontSize="xs">Height (cm)</Field.Label>
            <Input
              type="number"
              size="sm"
              min="0"
              step="0.1"
              placeholder="Optional"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Field.Root>

          <Button type="submit" size="sm" px={5}>
            Save
          </Button>
        </Grid>

        {error && (
          <Text color="red.500" fontSize="xs" mt={2}>
            {error}
          </Text>
        )}
      </Box>
    </form>
  );
};

export default PatientForm;
