/* eslint-disable @next/next/no-head-element */

import { Counter } from "./client";
import { Templated } from "./server";


function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Next.js</h1>
      <Counter />
      <Templated />
      {children}
    </>
  );
}
