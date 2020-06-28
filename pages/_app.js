import "./index.css";
import PizzaContextProvider from "../components/PizzaContext";

function MyApp({ Component, pageProps }) {
  return (
    <PizzaContextProvider>
      <Component {...pageProps} />
    </PizzaContextProvider>
  );
}

export default MyApp;
