import "../styles/globals.scss";

import { AppProps } from "next/app";

import { Provider } from "../context/Products";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
