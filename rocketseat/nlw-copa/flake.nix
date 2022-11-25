{
  description = "A prisma test project";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/master";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
      devPkgs = import nixpkgs {
        inherit system;
        config = { allowUnfree = true; };
        overlays = [(
          final: prev: {
            nodejs = prev.nodejs-16_x;
          }
        )];
      };
    in {
      devShell = pkgs.mkShell {
        nativeBuildInputs = [ pkgs.bashInteractive ];
        buildInputs = with devPkgs; [
          nodePackages.prisma
          pkgs.nodePackages.mermaid-cli
          nodePackages.expo-cli
          nodejs
          sqlite
          yarn
        ];
        shellHook = with pkgs; ''
          export PRISMA_MIGRATION_ENGINE_BINARY="${prisma-engines}/bin/migration-engine"
          export PRISMA_QUERY_ENGINE_BINARY="${prisma-engines}/bin/query-engine"
          export PRISMA_QUERY_ENGINE_LIBRARY="${prisma-engines}/lib/libquery_engine.node"
          export PRISMA_INTROSPECTION_ENGINE_BINARY="${prisma-engines}/bin/introspection-engine"
          export PRISMA_FMT_BINARY="${prisma-engines}/bin/prisma-fmt"
          export PUPPETEER_EXECUTABLE_PATH="${pkgs.chromium}/bin/chromium"
        '';
        # devPkgs
      };
    });
}