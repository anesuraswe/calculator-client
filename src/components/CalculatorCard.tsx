
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ArrowUpRight } from "lucide-react";
import type { Calculator } from "../data/calculators";

interface CalculatorCardProps {
  calculator: Calculator;
  onSelect: (id: string) => void;
}

const CalculatorCard = ({
  calculator,
  onSelect,
}: CalculatorCardProps) => {
  const Icon = calculator.icon;

  return (
    <Box
      border="1px solid"
      borderColor="border"
      bg="bg"
      borderRadius="xl"
      p={6}
      cursor="pointer"
      transition="all 0.2s ease"
      onClick={() => onSelect(calculator.id)}
      _hover={{
        borderColor: "fg",
        transform: "translateY(-4px)",
        shadow: "md",
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(calculator.id);
        }
      }}
    >
      <VStack align="stretch" gap={5}>
        <Flex justify="space-between" align="center">
          <Flex
            w="48px"
            h="48px"
            align="center"
            justify="center"
            borderRadius="lg"
            bg="fg"
            color="bg"
          >
            <Icon size={23} />
          </Flex>

          <ArrowUpRight size={20} />
        </Flex>

        <Box>
          <Text
            color="fg.muted"
            fontSize="xs"
            fontWeight="semibold"
            mb={2}
          >
            {calculator.category}
          </Text>

          <Heading size="md" mb={2}>
            {calculator.title}
          </Heading>

          <Text color="fg.muted" fontSize="sm" lineHeight="1.7">
            {calculator.description}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default CalculatorCard;
