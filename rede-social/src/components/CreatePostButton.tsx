import * as Dialog from '@radix-ui/react-dialog';


export function CreatePostButton() {
  return (
    <Dialog.Trigger className='py-3 px-12 mt-6 font-sans bg-cyan-400 hover:bg-cyan-200' >
      Novo Post
    </Dialog.Trigger>

  )
}