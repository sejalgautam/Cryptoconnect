import { Box } from "@chakra-ui/react";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./components/HomePage";
import Cryptocurrencies from "./pages/cryptocurrencies/Cryptocurrencies";
import { useGetCryptosQuery } from "./services/cryptoApi";
import { useEffect, useRef } from "react";
import News from "./pages/news/News";
import CryptoDetails from "./pages/cryptocurrencies/CryptoDetails";
import { Support } from "./pages/support/Support";

function App() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const cryptos = useRef([]);

  useEffect(() => {
    // console.log(cryptosList?.data?.coins);
    cryptos.current = data?.data?.coins;
  }, [data?.data]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/",
          title: "Dashboard",
          element: <Homepage cryptos={data?.data?.coins} />,
        },
        {
          path: "/cryptocurrencies",
          title: "Crptocurrencies",
          element: <Cryptocurrencies />,
        },
        {
          path: "/news",
          title: "News",
          element: <News />,
        },
        {
          path: "/crypto/:coinId",
          title: "Details Of Cryptocurrency",
          element: <CryptoDetails />,
        },
        {
          path: "/support",
          title: "Support",
          element: <Support />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
