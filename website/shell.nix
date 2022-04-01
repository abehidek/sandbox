{ pkgs ? import <nixpkgs> {} }:
let
    unstable = import (fetchTarball https://nixos.org/channels/nixos-unstable/nixexprs.tar.xz) { };
in
pkgs.mkShell {
  buildInputs = [
    unstable.nodejs
    unstable.nodePackages.vls
    # keep this line if you use bash
    pkgs.bashInteractive
  ];
}
