import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { FormEvent, useContext, useState } from "react";
import { RadioBox } from "./RadioBox";
import { useTransactions } from "../../hooks/useTransactions";

interface TransactionModalProps {
  isNewTransactionOpen: boolean;
  onNewTransactionClose: () => void;
}

export function TransactionModal({
  isNewTransactionOpen,
  onNewTransactionClose,
}: TransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitulo] = useState("");
  const [amount, setValor] = useState(0);
  const [category, setCategoria] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitulo("");
    setValor(0);
    setCategoria("");
    setType("deposit");
    onNewTransactionClose();
  }
  return (
    <Modal isOpen={isNewTransactionOpen} onClose={onNewTransactionClose}>
      <ModalOverlay />
      <form onSubmit={handleCreateNewTransaction}>
        <ModalContent>
          <ModalHeader>Cadastrar transação</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Input
                placeholder="Título"
                value={title}
                onChange={(event) => setTitulo(event.target.value)}
              />
              <Input
                placeholder="Valor"
                type="number"
                value={amount}
                onChange={(event) => setValor(Number(event.target.value))}
              />
              <Box display="flex">
                <RadioBox
                  isActive={type === "deposit"}
                  onClick={() => {
                    setType("deposit");
                    console.log("entrada", type);
                  }}
                  label="Entrada"
                  icon={BsFillArrowUpCircleFill}
                  buttonColor="green.200"
                />
                <RadioBox
                  isActive={type === "withdraw"}
                  onClick={() => {
                    setType("withdraw");
                    console.log("saida", type);
                  }}
                  label="Saída"
                  icon={BsFillArrowDownCircleFill}
                  buttonColor="red.200"
                />
              </Box>
              <Input
                placeholder="Categoria"
                value={category}
                onChange={(event) => setCategoria(event.target.value)}
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">Cadastrar</Button>
            <Button onClick={onNewTransactionClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
