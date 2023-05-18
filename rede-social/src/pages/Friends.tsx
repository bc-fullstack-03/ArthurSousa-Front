import { FriendList } from "../components/FriendList";
import { MainScreen } from "../components/MainScreen";
import { Text } from "../components/Text";

export function Friends(){
  return (
    <MainScreen>
      <Text size="lg" className="text-xl"> Amigos</Text>
      <FriendList/>
    </MainScreen>
  )
}