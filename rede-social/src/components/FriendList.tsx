import { UserCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { getAuthHeader } from "../services/auth";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Text } from "./Text";



interface Profile {
  _id: string
  name: string
  followers: string[];
  following: string[];
}

export function FriendList() {
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect(() => {
    const authHeader = getAuthHeader()
    async function getProfiles() {

      try {
        const { data } = await api.get('profiles', authHeader)
        console.log(profiles)
        setProfiles(data)
      } catch (error) {
        alert('Erro ao tentar os perfis.')
      }
    }

    getProfiles()
  }, [])
  return (
   
      <div className="basis-5/6 overflow-y-auto scroll-smooth ">
        <Heading className="border-b border-slate-400 mt-4">
          <Text size="lg" className="text-xl font-extrabold ml-5 ">Amigos</Text>

          <div className="flex items-center ml-5 my-4">
            <UserCircle size={48} weight='light' className="text-slate-50" />
            <Text size="lg" className="font-extrabold ml-2"> Fulano Da  Silva  </Text>
          </div>
        </Heading>


        {profiles && profiles.map((profile: Profile) => (
          <div key={profile._id} className="flex flex-col ml-5 w-full max-w-sm ">
            <div className="flex items-center">
              <UserCircle className="text-slate-50" size={48} weight='thin' />
              <Text className="ml-2">{profile.name}</Text>
            </div>
            <div className="flex items-center mt-2  " >

              <Text className="text-gray-400">
                {profile.followers.length > 0 && `${profile.followers} Seguidores`}

              </Text>
            </div>
            <div className="flex items-center ml-2">
              <Text className="text-gray-400">

                {profile.following.length > 0 && `${profile.following} Seguidores`}
              </Text>
            </div>

            <Button className="my-2 "> Seguir </Button>
          </div>
        ))}

      </div>
      )
}