import type { NextPage } from "next";
import { useState } from "react";
import { trpc } from "@/src/utils/trpc";


const HomePage: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
};

export default HomePage;
