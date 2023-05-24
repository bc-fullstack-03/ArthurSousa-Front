import { ReactNode } from "react";
import { Post } from "../types/Post";
import { Menu } from "./Menu";

interface MainScreenProps{
  children: ReactNode
  postCreadted?: (post: Post) => void 

}

export function MainScreen({ children , postCreadted }: MainScreenProps){
  
  return(
    <div className="w-screen h-screen flex  ">
      <Menu postCreadted={postCreadted}/>

      {children}
    </div>
  )
}