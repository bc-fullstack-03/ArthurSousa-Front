import { UserCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { getAuthHeader, getProfile } from "../services/auth";
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

    const authHeader = getAuthHeader()
  useEffect(() => {
    async function getProfiles() {

      try {
        const { data } = await api.get('profiles', authHeader)
          setProfiles(data)
      } catch (error) {
        alert('Erro ao tentar os perfis.')
      }
    }

    getProfiles()
  }, [])
  async function handleFollow(profileId: string) {
    
    try {
     await api.post(`profiles/${profileId}/follow`,null , authHeader)
      setProfiles((profiles) => {
        const newProfiles= profiles.map(profile => {
            if(profile._id === profileId){
                !profile.followers.includes(getProfile()) &&  profile.followers.push(getProfile() ) 
            }
            return profile
          })
          return [...newProfiles]
      })  

    } catch (error) {
      alert('Erro ao tenta seguir PERFIL.')
    }
  }

  return (

    <div className="basis-5/6 overflow-y-auto scroll-smooth ">
      <Heading className="border-b border-slate-400 mt-4">
        <Text size="lg" className="text-xl font-extrabold ml-5 ">Amigos</Text>
      </Heading>


      {profiles && profiles.map((profile: Profile) => (
        <div key={profile._id} className="flex  flex-col my-5 ml-5 w-full max-w-sm ">
          <div className="flex items-center">
            <UserCircle className="text-slate-50" size={48} weight='thin' />
            <Text className="ml-2">{profile.name}</Text>
          </div>
          <div className="flex items-center mt-2  " >

            <Text className="text-gray-400">
              {profile.followers.length > 0 && `${profile.followers.length} Seguidores`}

            </Text>
          </div>
          <div className="flex items-center ml-2">
            <Text className="text-gray-400">

              {profile.following.length > 0 && `${profile.following.length} Seguidores`}
            </Text>
          </div>

          <Button 
          className="my-2 " 
          onClick={() => handleFollow(profile._id)}
          disabled={profile.followers.includes(getProfile())}
          > Seguir </Button>
        </div>
      ))}

    </div>
  )
}