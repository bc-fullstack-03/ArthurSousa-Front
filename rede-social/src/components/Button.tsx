import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({children,asChild,className,...props}: PropsButton){
  const Comp = asChild ? Slot : 'button'

  return(
    <Comp
      className={clsx(
        ' py-3 px-4 bg-cyan-500 font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        className,
        )}
        {...props}
    >
      {children}
    </Comp>
  )
}