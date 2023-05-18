import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Auth, AuthForm } from "../components/AuthForm";
import { api } from "../lib/axios";


interface UserToken {
  userId: string;
  iat: number;
  exp: number;
}


export function Login() {
  const navigate = useNavigate();

  async function handleRegister(auth: Auth) {
    try {const { data } = await api.post('login', auth);
    const token = data;

    const decodeJwt = jwtDecode(token) as UserToken;
    const userId = decodeJwt.userId;

    localStorage.setItem('userId', userId);


      navigate("/home");
    } catch (error) {
      alert('Erro ao fazer login' + error);
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
