import { Box, Icon, Heading, Text } from "@chakra-ui/react";

interface BoxesProps {
  label: string;
  value: number;
  icon: any;
  color?: string;
  bgColor?: string;
}

export function Boxes(props: BoxesProps) {
  return (
    <Box
      mx="1rem"
      display="flex"
      flexDirection="column"
      px="2rem"
      py="2rem"
      borderRadius="md"
      bgColor={props.bgColor}
      justifyContent="space-around"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        py="1rem"
        lineHeight="1rem"
        fontSize="xl"
      >
        <Text>{props.label}</Text>
        <Icon as={props.icon} color={props.color} />
      </Box>
      <Heading>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props.value)}
      </Heading>
    </Box>
  );
}
