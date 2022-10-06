import type { NextPage } from "next";
import Base from "../components/Base";
import CardProjectComponent from "../components/CardProject";

const Projects: NextPage = () => {
  return (
    <Base>
      <div>
        <h1>Projects</h1>
        <CardProjectComponent
          name="Dotfiles"
          description="System configuration"
          url="https://github.com/abehidek/dotfiles"
          image="https://raw.githubusercontent.com/NixOS/nixos-artwork/521e1b0a899074ca7a701c17e357c63c13d54133/logo/nix-snowflake.svg"
        />
      </div>
    </Base>
  );
};

export default Projects;
