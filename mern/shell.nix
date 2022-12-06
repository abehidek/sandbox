# shell.nix
{ pkgs ? import <nixpkgs> { } }:
let
  unstable = import
    (fetchTarball "https://nixos.org/channels/nixos-unstable/nixexprs.tar.xz")
    { };
in pkgs.mkShell {
  buildInputs = [
    unstable.nodejs
    unstable.nodePackages.live-server
    unstable.nodePackages.typescript
    unstable.yarn
  ];
  shellHook = "";
}
