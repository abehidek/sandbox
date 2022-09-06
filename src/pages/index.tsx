import type { NextPage } from "next";
import { useState } from "react";
import { trpc } from "@/src/utils/trpc";


const HomePage: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const users = trpc.useQuery(["articles.get-view"]);

  console.log(users.data?.users);

  return (
    <>
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
};

export default HomePage;
