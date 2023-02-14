import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import { theme } from "./styles/theme";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Internet",
          type: "withdraw",
          category: "Despesas",
          amount: 99.9,
          createdAt: new Date("2023-02-11 12:57:00"),
        },
        {
          id: 2,
          title: "DinDin",
          type: "deposit",
          category: "Ganho",
          amount: 999.9,
          createdAt: new Date("2023-02-11 12:57:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "/api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", { ...data, createdAt: new Date() });
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
