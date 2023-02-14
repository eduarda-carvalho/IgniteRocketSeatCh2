import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useTransactions } from "../../hooks/useTransactions";

import { Transacao } from "./Transacao";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Box bgColor="white" w="50%" display="flex">
      <Table>
        <Thead>
          <Tr>
            <Th fontSize="xl">Título</Th>
            <Th fontSize="xl">Valor</Th>
            <Th fontSize="xl">Categoria</Th>
            <Th fontSize="xl">Data</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions?.map((transaction) => (
            <Transacao
              id={transaction.id}
              title={transaction.title}
              amount={transaction.amount}
              type={transaction.type}
              category={transaction.category}
              date={new Date(transaction.createdAt)}
            />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
