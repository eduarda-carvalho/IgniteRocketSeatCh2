import { Td, Tr } from "@chakra-ui/react";

interface TransacaoProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  date: any;
}

export function Transacao(props: TransacaoProps) {
  return (
    <Tr key={props.id} fontSize="xl">
      <Td>{props.title}</Td>
      <Td color={props.type === "deposit" ? "green.600" : "red.600"}>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props.amount)}
      </Td>
      <Td>{props.category}</Td>
      <Td>{new Intl.DateTimeFormat("pt-BR").format(props.date)}</Td>
    </Tr>
  );
}
