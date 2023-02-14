import { Box } from "@chakra-ui/react";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { TbCoin } from "react-icons/tb";
import { useTransactions } from "../../hooks/useTransactions";
import { Boxes } from "./Boxes";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === "deposit") {
        accumulator.deposits += transaction.amount;
        accumulator.total += transaction.amount;
      } else {
        accumulator.withdraws += transaction.amount;
        accumulator.total -= transaction.amount;
      }
      return accumulator;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Box
      w="1500px"
      display="grid"
      gridTemplateColumns="repeat(3,1fr)"
      gap="1rem"
      mt="-7rem"
    >
      <Boxes
        label="Entradas"
        icon={BsFillArrowUpCircleFill}
        value={summary.deposits}
        color="green"
        bgColor="white"
      />
      <Boxes
        label="Saídas"
        icon={BsFillArrowDownCircleFill}
        value={summary.withdraws}
        color="red"
        bgColor="white"
      />
      <Boxes
        label="Total"
        icon={TbCoin}
        value={summary.total}
        bgColor={summary.total >= 0 ? "green.200" : "red.200"}
      />
    </Box>
  );
}
