import { ReactNode } from "react";
import { Menu } from "./Menu";

interface MainScreenProps{
  children: ReactNode
}

export function MainScreen({ children }:MainScreenProps){
  return(
    <div className="w-screen h-screen flex  ">
      <Menu/>
      {children}
    </div>
  )
}