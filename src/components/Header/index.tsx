import { Box, Text, Icon, Button, Heading } from "@chakra-ui/react";
import { TbCoin } from "react-icons/tb";

interface HeaderProps {
  onNewTransactionOpen: () => void;
}
export function Header({ onNewTransactionOpen }: HeaderProps) {
  return (
    <>
      <Box
        w="100%"
        p="2rem 2rem 10rem"
        bgColor="blue.800"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          w="70%"
          alignItems="center"
        >
          <Box
            color="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap=".5rem"
            fontSize="3xl"
            fontWeight="600"
          >
            <Icon
              fontSize="4xl"
              as={TbCoin}
              bgColor="green"
              borderRadius="50%"
            />
            <Text>dt money</Text>
          </Box>
          <Button
            p="1.8rem"
            bgColor="blue.600"
            border="2px solid transparent"
            color="white"
            fontSize="2xl"
            fontWeight="600"
            _hover={{
              border: "2px solid",
              borderColor: "blue.500",
            }}
            borderRadius="md"
            onClick={onNewTransactionOpen}
          >
            Nova transação
          </Button>
        </Box>
      </Box>
    </>
  );
}
