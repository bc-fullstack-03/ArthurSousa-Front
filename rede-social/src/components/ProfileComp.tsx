import { UserCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Text } from "./Text";


export function ProfileComp() {
  const navigate = useNavigate()
  const user = localStorage.getItem("user")

  function handleLogout(){
    localStorage.clear()
    navigate("/")

  }
  return (
    <div className="basis-5/6 overflow-y-auto scroll-smooth ">
      <Heading className="border-b border-slate-400 mt-4">
        <Text size="lg" className="text-xl font-extrabold ml-5 ">Profile</Text>

        <div className=" ml-5 my-4 gap-2 max-w-sm" >
          <div className="flex flex-1 items-center ">
            <UserCircle size={48} weight='light' className="text-slate-50" />
            <Text size="lg" className="font-extrabold ml-2"> {user} </Text>
          </div>
          <Button onClick={handleLogout} className="mt-4  ">Sair</Button>
        </div>
      </Heading>
    </div>
  )
}