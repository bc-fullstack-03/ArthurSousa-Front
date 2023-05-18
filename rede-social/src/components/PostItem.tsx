import { Chat, Heart, UserCircle } from "@phosphor-icons/react"
import { Post } from "../types/Post"
import { Heading } from "./Heading"
import { Text } from "./Text"

interface PostItemProps{
  post: Post
  
}
export function PostItem({ post }:PostItemProps){
  return(
      <div className="border-b  border-slate-400 " key={post.id}>
          <Heading className="flex items-center ml-5 my-4 ">
            <UserCircle  size={48} weight="light"/>
            <Text className="font-extrabold ml-2">{post?.nome}</Text>
            
          </Heading>
          <div className="flex flex-col gap-2 ">

          <Heading size="lg" className="font-extrabold ml-16 text-xl">{post?.titulo}</Heading>
          <Text asChild={false} className="font-sans ml-16 mt-3 w-60">{post?.conteudo}</Text>
          </div>

          <footer className="flex items-center ml-16 my-4 space-x-2">
            <Chat size={24} className="text-slate-50"/>
            <Text size='sm'>{post?.comentarios.length} </Text>
            <Heart size={24} className="text-slate-50 hover:bg-red-600 rounded-full transition-colors" />
            <Text size='sm'>{post.likes.length} </Text>

          </footer>
      </div>
  )
}