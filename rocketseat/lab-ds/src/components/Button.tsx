import { clsx } from 'clsx'
import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={
      clsx('py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white', {

      })
    }>
      {children}
    </Comp>
  )
}