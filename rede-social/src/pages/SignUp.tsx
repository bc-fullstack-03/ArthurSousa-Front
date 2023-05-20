import { useNavigate } from "react-router-dom";
import { Auth, AuthForm } from "../components/AuthForm";
import { api } from "../lib/axios";



export function SignUp(){
  const navigate = useNavigate()
  
  async function handleRegister(auth:Auth) {
    
    try {
      await api.post('security/register',auth)
      console.log(auth)
 
      navigate("/")
    } catch (error) {
      alert('Erro na criação de usuário' + error)
    }
  }

  return <AuthForm 
  authFormTitle="Faça cadastro e comece usar!"
  submitFormButtonText="Cadastrar"
  submitFormButtonAction={handleRegister}
  routerName="/"
  texto=" Possui conta? Logue  agora!"
  />
}