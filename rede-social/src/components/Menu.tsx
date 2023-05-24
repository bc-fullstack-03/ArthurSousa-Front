import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import parrot from '../assets/parrot.svg';
import { Post } from '../types/Post';
import { CreatePostButton } from './CreatePostButton';
import { CreatePostDialog } from './CreatePostDiaolog';
import { MenuLink } from './MenuLink';
import { Text } from './Text';

interface MenuProps{
  postCreadted: (post: Post) => void | undefined
}

export function Menu({postCreadted}:MenuProps) {

  const [open , setOpen] = useState(false)
  
  function postCreated(post: Post){
    setOpen(false)
    postCreadted && postCreadted(post)

  }
  return (
    <div className="basis-1/6 border-r border-slate-400  ml-4 pt-4 " >
      <div className="flex items-center ">
        <img src={parrot} alt="Logo do menu" className="h-[76px] w-[33.01px]" />
        <Text className="text-white text-xl font-extrabold ml-4">
          Parrot
        </Text>
      </div>

      <ul className='pr-2 '>
        <MenuLink/>

      </ul>

      <footer className='flex flex-col items-center '>
        <Dialog.Root open={open}  onOpenChange={setOpen}>
          <CreatePostButton />
          <CreatePostDialog postCreated={postCreated}/>
        </Dialog.Root>
      </footer>
    </div>

  )
}