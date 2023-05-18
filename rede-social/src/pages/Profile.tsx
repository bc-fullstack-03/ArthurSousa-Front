import { MainScreen } from "../components/MainScreen";
import { ProfileComp } from "../components/ProfileComp";
import { Text } from "../components/Text";

export function Profile(){

  return(
    <MainScreen>
      <Text size="lg" className="text-xl"> Profile</Text>
      <ProfileComp/>
    </MainScreen>
  )
}