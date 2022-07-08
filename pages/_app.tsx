import "../styles/globals.css";
import HeaderComponent from "../components/HeaderComponent";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center bg-bg h-auto min-h-screen">
      <div className="w-3/5 py-5">
        <HeaderComponent />
        <main className="mt-6">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
