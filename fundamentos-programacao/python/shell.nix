# shell.nix
# Esse arquivo é usado para preparar o ambiente de python em sistemas UNIX como o Linux e o OSX (da Apple), no entanto, para sistemas Windows, é necessário utilizar outras ferramentas como o venv
{ pkgs ? import <nixpkgs> {} }:
let
  my-python = pkgs.python38;
  python-with-my-packages = my-python.withPackages (p: with p; [
    pygame
    tkinter
  ]);
in
pkgs.mkShell {
  buildInputs = [
    python-with-my-packages
    pkgs.pfetch
  ];
  shellHook = ''
    PYTHONPATH=${python-with-my-packages}/${python-with-my-packages.sitePackages}
    # maybe set more env-vars
  '';
}
