import { Box } from "@chakra-ui/react";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      w="100%"
      h="100%"
      justifyContent="flex-start"
      alignItems="center"
      gap="2rem"
    >
      <Summary />
      <TransactionsTable />
    </Box>
  );
}
