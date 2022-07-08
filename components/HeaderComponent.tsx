import type { NextPage } from "next";

const HeaderComponent: NextPage = () => {
  return (
    <header className="">
      <h1 className="text-3xl font-bold text-white">
        <a href="https://www.abehidek.me" className="hover:text-blue-300">
          abehidek
        </a>{" "}
        <a href="/">
          <span className="text-blue-500">blog</span>
        </a>
      </h1>
    </header>
  );
};

export default HeaderComponent;
