import "../styles/globals.scss";
import HeaderComponent from "../components/HeaderComponent";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <HeaderComponent />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
