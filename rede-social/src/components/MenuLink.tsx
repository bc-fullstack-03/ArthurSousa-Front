import { House, User, UsersThree } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { MenuItem, MenuItemRoot } from './MenuItem';
import { Text } from './Text';


export function MenuLink(){
  return (
    <>
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
    </>
  )
}