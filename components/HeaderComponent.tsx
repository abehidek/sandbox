import type { NextPage } from "next";
import Link from "next/link";

const HeaderComponent: NextPage = () => {
  return (
    <nav className="navbar">
      <div className="horizontal-padding">
        <h1>
          <a href="https://www.abehidek.me">abehidek</a>{" "}
          <Link href="/">
            <span>blog</span>
          </Link>
        </h1>
      </div>
    </nav>
  );
};

export default HeaderComponent;
