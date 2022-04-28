# shell.nix
{ pkgs ? import <nixpkgs> {} }:
let
  unstable = import (fetchTarball https://nixos.org/channels/nixos-unstable/nixexprs.tar.xz) { };
  my-python = pkgs.python310;
  python-with-my-packages = my-python.withPackages (p: with p; [
    pygame
  ]);
in
pkgs.mkShell {
  buildInputs = [
    python-with-my-packages
  ];
  shellHook = ''
    export PYTHONPATH=${python-with-my-packages}/${python-with-my-packages.sitePackages}
  '';
}

