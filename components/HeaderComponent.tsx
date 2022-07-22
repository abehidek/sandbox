import type { NextPage } from "next";

const HeaderComponent: NextPage = () => {
  return (
    <nav className="navbar">
      <div className="horizontal-padding">
        <h1>
          <a href="https://www.abehidek.me">abehidek</a>{" "}
          <a href="/">
            <span>blog</span>
          </a>
        </h1>
      </div>
    </nav>
  );
};

export default HeaderComponent;
