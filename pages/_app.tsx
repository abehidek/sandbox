import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center bg-bg h-auto min-h-screen">
      <div className="w-2/3 py-5">
        <Header />
        <main className="py-2">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
