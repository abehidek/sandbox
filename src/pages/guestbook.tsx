import { NextPage } from "next";
import Base from "../components/Base";
import Giscus from "@giscus/react";

const Guestbook: NextPage = () => {
  return (
    <Base>
      <h1>Guestbook</h1>
      <Giscus
        id="comments"
        repo="abehidek/blog"
        repoId="R_kgDOHFmzhw"
        category="Guestbook"
        categoryId="DIC_kwDOHFmzh84CR0fY"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </Base>
  );
};

export default Guestbook;
