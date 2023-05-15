import { Envelope, Lock } from '@phosphor-icons/react'
import logo from './assets/logo.svg'
import { Button } from './components/Button'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/globo.css'
export function App() {

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-100">

      <header className="flex flex-col items-center">
        <img src={logo} alt="Logo" />

        <Heading size="lg" className="mt-4">Sysmap Parrot   </Heading>

        <Text size="lg" className="text-gray-400 mt-1" > Faça login e comece usar!</Text>

      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label className="flex flex-col gap-3 w-full" htmlFor="email">

          <Text size='lg' className="font-semibold"> Endereço de-email </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id='email' placeholder="Digite seu email" />
          </TextInput.Root>

        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold" size="lg" > Digite sua senhar</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type="password" id='password' placeholder="************" />
          </TextInput.Root>
        </label>
        <Button type="submit" className="mt-4"> Entrar na plataforma</Button>
      </form>

      <footer className="mt-8">
        <Text asChild size='sm'>
          <a href="" className="text-gray-400 underline hover:text-gray-200"> Não possui conta? Crie uma agora! </a>
        </Text>
      </footer>
    </div>
  )


}


