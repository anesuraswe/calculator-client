
import { IconButton } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ColorModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleColorMode = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <IconButton
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      variant="outline"
      borderRadius="full"
      borderColor="border"
      color="fg"
      onClick={toggleColorMode}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </IconButton>
  );
};

export default ColorModeToggle;
