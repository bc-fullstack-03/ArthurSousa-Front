import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

interface MenuItemProps {
 
  children: ReactNode
}


export function MenuItemRoot({ children }: MenuItemProps) {




  return (
    <li className='mt-5'>
      <div className="flex gap-2 items-center px-4 rounded-full hover:bg-cyan-400 ml-2">
        {children}
      </div>
    </li>

  )

}
export type MenuIconProps = {
  children: ReactNode;
}

function MenuItemIcon(props: MenuIconProps) {

  return (

    <Slot className='text-white '>
      {props.children}
    </Slot>
  )
}

export const MenuItem = {
  Root: MenuItemRoot,
  Icon: MenuItemIcon
}