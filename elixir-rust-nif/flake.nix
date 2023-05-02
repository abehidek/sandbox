{
  description = "Shell environment for development";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    stable.url = "github:nixos/nixpkgs/nixos-22.11";
    rust-overlay.url = "github:oxalica/rust-overlay";
  };

  outputs = {
    self,
    nixpkgs,
    stable,
    rust-overlay,
    ...
  } @ inputs: let
    inherit (self) outputs;
    supportedSystems = [ "x86_64-linux" ];
    forAllSystems = nixpkgs.lib.genAttrs supportedSystems;
  in rec {
    devShells = forAllSystems (system: {
      default = let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ (import rust-overlay) ];
        };
        rust = pkgs.rust-bin.stable.latest.default.override {
          extensions = [ "rust-src" ];
        };
        # pkgs = nixpkgs.legacyPackages.${system};
        node16Pkgs = import nixpkgs {
          inherit system;
          overlays = [(final: prev: { nodejs = prev.nodejs-16_x; })];
        };
      in pkgs.mkShell {
        nativeBuildInputs = [ pkgs.bashInteractive ];
        buildInputs = [
          # Node stuff
          # node16Pkgs.nodejs
          # node16Pkgs.yarn
          # node16Pkgs.nodePackages.pnpm

          # Elixir
          pkgs.elixir
          # elixir-ls

          # Rust
          rust
          pkgs.rust-analyzer

          # System level deps
          pkgs.pkg-config
          pkgs.gnumake
          pkgs.gcc
          pkgs.readline
          pkgs.openssl
          pkgs.zlib
          pkgs.libxml2
          pkgs.curl
          pkgs.libiconv
          pkgs.glibc
          pkgs.gtk3
          pkgs.glibcLocales
          pkgs.inotify-tools
          pkgs.exiftool
          # pkgs.sqlite
        ];

        RUST_BACKTRACE=1;

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

