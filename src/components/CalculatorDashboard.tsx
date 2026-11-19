
import {
  Box,
  Container,
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
    <Box
      id="calculators"
      bg="bg.muted"
      py={{ base: 14, md: 20 }}
    >
      <Container maxW="1200px">
        <VStack align="stretch" gap={10}>
          {/* Section heading */}
          <Box>
            <Text
              color="fg.muted"
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="widest"
            >
              CALCULATOR LIBRARY
            </Text>

            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              mt={3}
            >
              Explore Calculators
            </Heading>

            <Text
              color="fg.muted"
              mt={3}
              maxW="600px"
              lineHeight="1.8"
            >
              Browse the available paediatric clinical reference
              categories and calculation tools.
            </Text>
          </Box>

          {/* Calculator cards */}
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            gap={6}
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
      </Container>
    </Box>
  );
};

export default CalculatorDashboard;
