
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { calculators } from "../data/calculators";
import CalculatorCard from "./CalculatorCard";

interface CalculatorDashboardProps {
  onSelectCalculator: (id: string) => void;
}

const CalculatorDashboard = ({
  onSelectCalculator,
}: CalculatorDashboardProps) => {
  return (
    <Box id="calculators" w="100%">
      <VStack align="stretch" gap={6}>
        <Box>
          <Text
            color="fg.muted"
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="widest"
          >
            CALCULATOR LIBRARY
          </Text>

          <Heading fontSize={{ base: "2xl", md: "3xl" }} mt={2}>
            Explore Calculators
          </Heading>

          <Text color="fg.muted" mt={3} fontSize="sm">
            Select a category to access its tools.
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, sm: 2 }}
          gap={4}
        >
          {calculators.map((calculator) => (
            <CalculatorCard
              key={calculator.id}
              calculator={calculator}
              onSelect={onSelectCalculator}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default CalculatorDashboard;
