import { Envelope, Lock } from "@phosphor-icons/react";
import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import logo from '../assets/logo.svg';
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Text } from './Text';
import { TextInput } from "./TextInput";


const zod = z.object({
  user: z.string(),
  password: z.string().min(6),
})

interface AuthFormElements extends HTMLFormControlsCollection {
  user: HTMLInputElement;
  password: HTMLInputElement;
}
export interface Auth {
  user: string;
  name?: string;
  password: string;
}


interface AuthFormElement extends HTMLFormElement {
  readonly elements: AuthFormElements;
}

interface PropsAuthForm {
  authFormTitle: string;
  submitFormButtonText: string;
  routerName: string;
  texto: string;
  submitFormButtonAction: (auth: Auth) => void;
}

export function AuthForm({
  authFormTitle,
  submitFormButtonText,
  routerName,
  texto,
  submitFormButtonAction,
}: PropsAuthForm) {

  const handleSubmit = async (event: FormEvent<AuthFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    const auth = {
      user: form.elements.user.value,
      password: form.elements.password.value,
    };
      console.log(auth);
      
     zod.parse(auth)
     submitFormButtonAction(auth);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <img src={logo} alt="Logo" />
        <Heading size="lg" className="mt-4">
          Sysmap Parrot
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          {authFormTitle}
        </Text>
      </header>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        <label className="flex flex-col gap-3 w-full" htmlFor="email">
          <Text size="lg" className="font-semibold">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="user"
              type="text"
              placeholder="Digite seu email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="senha" className="flex flex-col gap-3">
          <Text className="font-semibold" size="lg">
            Digite sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="************"
          
            />
          </TextInput.Root>
        </label>
        <Button type="submit" className="mt-4">
          {submitFormButtonText}
        </Button>
      </form>

      <footer className="mt-8">
        <Text asChild size='sm'>
          <Link to={routerName} className="text-gray-400 underline hover:text-gray-200">
            {texto}
          </Link>
        </Text>
      </footer>
    </div>
  );
}
