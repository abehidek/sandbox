import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center">
      <div className="w-2/3">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
