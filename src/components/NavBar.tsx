
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";

import { Activity } from "lucide-react";
import ColorModeToggle from "./ColorModeToggle";

const NavBar = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Calculators", href: "#calculators" },
    { label: "About", href: "#about" },
  ];

  return (
    <Box
      as="nav"
      bg="bg"
      borderBottomWidth="1px"
      borderColor="border"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Container maxW="1200px" py={4}>
        <Flex align="center" justify="space-between">
          {/* Logo */}
          <HStack gap={2}>
            <Flex
              bg="fg"
              color="bg"
              w="38px"
              h="38px"
              borderRadius="lg"
              align="center"
              justify="center"
            >
              <Activity size={21} />
            </Flex>

            <Box>
              <Heading size="md" color="fg">
                PaedCalc
              </Heading>
              <Text fontSize="xs" color="fg.muted">
                Paediatric Calculator
              </Text>
            </Box>
          </HStack>

          {/* Navigation links */}
          <HStack
            gap={8}
            display={{ base: "none", md: "flex" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                color="fg.muted"
                fontWeight="medium"
                fontSize="sm"
                _hover={{
                  color: "fg",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          {/* Theme toggle */}
          <ColorModeToggle />
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
