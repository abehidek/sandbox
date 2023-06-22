{
  description = "Shell environments for development";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    stable.url = "github:nixos/nixpkgs/nixos-22.11";
  };
  outputs = {
    self,
    nixpkgs,
    stable,
    ...
  } @ inputs: let
    inherit (self) outputs;
    supportedSystems = [ "x86_64-linux" ];
    forAllSystems = nixpkgs.lib.genAttrs supportedSystems;
  in rec {
    devShells = forAllSystems (system: {
      default = let
        pkgs = nixpkgs.legacyPackages.${system};
        node18Pkgs = import nixpkgs {
          inherit system;
          config = { allowUnfree = true; };
          overlays = [(final: prev: { nodejs = prev.nodejs_18; })];
        };
      in pkgs.mkShell {
        nativeBuildInputs = [ pkgs.bashInteractive ];

        buildInputs = with pkgs; [
          node18Pkgs.nodejs
          node18Pkgs.nodePackages.prisma
          node18Pkgs.nodePackages.pnpm

          pkgs.sqlite

          pkgs.go
          pkgs.gotools
          pkgs.gopls # LSP
          pkgs.go-outline
          pkgs.gocode # Autocomplete daemon
          pkgs.gopkgs # List avaiable go pkgs
          pkgs.gocode-gomod
          pkgs.godef # Print where symbols are defined in go source code
          pkgs.golint # Go linter
        ];

        PRISMA_MIGRATION_ENGINE_BINARY = "${pkgs.prisma-engines}/bin/migration-engine";
        PRISMA_QUERY_ENGINE_BINARY = "${pkgs.prisma-engines}/bin/query-engine";
        PRISMA_QUERY_ENGINE_LIBRARY = "${pkgs.prisma-engines}/lib/libquery_engine.node";
        PRISMA_INTROSPECTION_ENGINE_BINARY = "${pkgs.prisma-engines}/bin/introspection-engine";
        PRISMA_FMT_BINARY = "${pkgs.prisma-engines}/bin/prisma-fmt";
      };
    });
  };
}
