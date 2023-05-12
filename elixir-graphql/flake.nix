{
  description = "Shell environment for development";

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
        node16Pkgs = import nixpkgs {
          inherit system;
          overlays = [(final: prev: { nodejs = prev.nodejs-16_x; })];
        };
      in pkgs.mkShell {
        nativeBuildInputs = [ pkgs.bashInteractive ];
        buildInputs = [
          # Node stuff
          node16Pkgs.nodejs
          node16Pkgs.yarn
          node16Pkgs.nodePackages.pnpm

          # Elixir
          pkgs.elixir
          # elixir-ls

          # System level deps
          pkgs.gnumake
          pkgs.gcc
          pkgs.readline
          pkgs.openssl
          pkgs.zlib
          pkgs.libxml2
          pkgs.curl
          pkgs.libiconv
          pkgs.glibcLocales
          pkgs.inotify-tools
          pkgs.sqlite
        ];

        shellHook = with pkgs; ''
          # this allows mix to work on the local directory
          mkdir -p .nix-mix
          mkdir -p .nix-hex
          export MIX_HOME=$PWD/.nix-mix
          export HEX_HOME=$PWD/.nix-hex
          export PATH=$MIX_HOME/bin:$PATH
          export PATH=$HEX_HOME/bin:$PATH
          export LANG=en_US.UTF-8
          export ERL_AFLAGS="-kernel shell_history enabled"
        '';
      };
    });
  };
}

