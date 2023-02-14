import { Box, Button, Icon } from "@chakra-ui/react";

interface RadioBoxProps {
  icon: any;
  onClick: () => void;
  label: string;
  isActive: boolean;
  buttonColor: string;
}

export function RadioBox({
  icon,
  label,
  onClick,
  isActive,
  buttonColor,
}: RadioBoxProps) {
  return (
    <Box>
      <Button
        variant="unstyled"
        onClick={onClick}
        bgColor={isActive ? buttonColor : "transparent"}
      >
        {label}
        <Icon as={icon} />
      </Button>
    </Box>
  );
}
