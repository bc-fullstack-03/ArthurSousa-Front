import { House, User, UsersThree } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import parrot from '../assets/parrot.svg';
import { Button } from './Button';
import { MenuItem, MenuItemRoot } from './MenuItem';
import { Text } from './Text';


export function Menu() {
  return (
    <div className="basis-1/6 border-r border-slate-400  ml-4 pt-4 " >
      <div className="flex items-center ">
        <img src={parrot} alt="Logo do menu" className="h-[76px] w-[33.01px]" />
        <Text className="text-white text-xl font-extrabold ml-4">
          Parrot
        </Text>
      </div>

      <ul className='pr-2 '>
        <MenuItemRoot>
          <MenuItem.Icon>
            <House size={48} weight='fill' />
          </MenuItem.Icon>

          <NavLink to="/home">
            <Text className="text-xl">Página Inicial </Text>
          </NavLink>

        </MenuItemRoot>

        <MenuItemRoot>
          <MenuItem.Icon>
            <User size={48} weight='fill' />
          </MenuItem.Icon>
          <NavLink to="/profile">
            <Text className="text-xl">
              Perfil
            </Text>
          </NavLink>
        </MenuItemRoot>

        <MenuItemRoot>
          <MenuItem.Icon>
            <UsersThree size={48} weight='fill' />
          </MenuItem.Icon>

          <NavLink to="/friends">
          <Text className="text-xl">Amigos</Text>

          </NavLink>
        </MenuItemRoot>

      </ul>


      <Button className="w-80  mt-10  m-[39px]">Novo Post </Button>
    </div>

  )
}