{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.php
    pkgs.php80Packages.composer
    # Needs to configure mysql in your system
    # keep this line if you use bash
    pkgs.bashInteractive
  ];
}
