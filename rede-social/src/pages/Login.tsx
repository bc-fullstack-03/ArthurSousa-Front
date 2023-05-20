import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Auth, AuthForm } from "../components/AuthForm";
import { api } from "../lib/axios";


interface UserToken {
  profile: string;
  user: string;
}


export function Login() {
  const navigate = useNavigate();

  async function handleRegister(auth: Auth) {
    try {const { data } = await api.post('security/login',auth)
    
    const decodeJwt = jwtDecode(data.accessToken) as UserToken
      localStorage.setItem('profile', decodeJwt.profile)
      localStorage.setItem('user', decodeJwt.user)
      localStorage.setItem('token', data.accessToken)

      navigate("/home");
    } catch (error) {
      alert('Erro ao fazer login' + error)
    }
  }

  return (
    <AuthForm 
      authFormTitle="Faça login e comece a usar!"
      submitFormButtonText="Entrar na plataforma"
      routerName="/singup"
      texto="Não possui conta? Crie uma agora!"
      submitFormButtonAction={handleRegister}
    />
  );
}
