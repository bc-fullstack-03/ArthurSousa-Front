import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent, useState } from 'react';
import { api } from '../lib/axios';
import { getAuthHeader } from '../services/auth';
import { Post } from '../types/Post';
import { Button } from './Button';
import { Dropzone } from './DropZone';
import { Text } from './Text';
import { TextInput } from './TextInput';

interface CreatePostDialogProps {
  postCreated: (post: Post) => void;
}

export function CreatePostDialog({ postCreated }: CreatePostDialogProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const authHeader = getAuthHeader();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      const { data } = await api.post('posts', formData, authHeader);
      postCreated && postCreated(data);
      console.log(data);
      console.log(selectedFile);
    } catch (error) {
      alert('Error while saving the post.');
    }

    setTitle('')
    setDescription('')
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
      <Dialog.Content className='fixed flex justify-center flex-col bg-[#121214] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1 -translate-y-1/2 rounded-lg w-96 shadow-black/25'>
        <Dialog.Description className='text-gray-400'>Create and share a post with friends!</Dialog.Description>
        <Dialog.Title className='mt-4 font-extrabold text-xl'>New Post</Dialog.Title>

        <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-10'>
          <label className='flex flex-col gap-3 w-full mb-5'>
            <Text size='lg'>Post Title</Text>
            <TextInput.Root>
              <TextInput.Input
                type='text'
                id='title'
                placeholder='Enter the post title'
                value={title}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              />
            </TextInput.Root>
          </label>

          <div>
            <Text size='lg' className='mt-3'>Post Description</Text>
            <TextInput.TextArea
              id='description'
              spellCheck={false}
              placeholder='Digite seu post aqui.'
              value={description}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
              className='ml-2  w-full bg-transparent text-lg h-40 p-2 rounded-lg mt-2 font-bold outline-none focus:focus-within:ring-2 ring-cyan-300'
            />
          <Dropzone onFileUploaded={setSelectedFile} />
          </div>


          <div className='mt-4 flex justify-end gap-4'>
            <Dialog.Close type='button' className='bg-zinc-500 px-5 h-12 rounded-md hover:bg-zinc-700'>
              Fechar
            </Dialog.Close>
            <Button type='submit' className='w-13'>Post</Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
