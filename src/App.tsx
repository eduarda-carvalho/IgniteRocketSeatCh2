import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Box
        w="100vw"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDir="column"
        bgColor="gray.100"
      >
        <Header onNewTransactionOpen={handleOpenNewTransactionModal} />
        <TransactionModal
          isNewTransactionOpen={isModalOpen}
          onNewTransactionClose={handleCloseNewTransactionModal}
        />
        <Dashboard />
      </Box>
    </TransactionsProvider>
  );
}
