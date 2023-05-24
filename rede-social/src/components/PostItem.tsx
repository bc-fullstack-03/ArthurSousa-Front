import { Chat, Heart, UserCircle } from "@phosphor-icons/react"
import { getProfile } from "../services/auth"
import { Post } from "../types/Post"
import { Heading } from "./Heading"
import { Text } from "./Text"

interface PostItemProps {
  post: Post
  handleLike: (postId: string) => void


}
export function PostItem({ post, handleLike }: PostItemProps) {

  return (
    <div className="border-b  border-slate-400 " key={post._id}>
      <Heading className="flex items-center ml-5 my-4 ">
        <UserCircle size={48} weight="light" />
        <Text className="font-extrabold ml-2">{post.profile.name}</Text>

      </Heading>
      <div className="flex flex-col gap-2 ml-5 ">

        <Heading size="lg" className="font-extrabold ml-16 text-xl">{post.title}</Heading>
        {post.image ? (
          <img
            src={post.description}
            className="max-w-lg text-white rounded-lg"

          />
        ) : (
          <Text size="md" className="text-gray-light">
            {post.description}
          </Text>
        )}

      </div>


      <footer className="flex items-center ml-16 my-4 space-x-2">
        <Chat size={24} weight="fill" className="text-cyan-700 hover:bg-cyan-200 rounded-full transition-colors" />
        <Text size='sm'>{post.comments.length} </Text>


        {post.likes.includes(getProfile()) ? 
        (
          <Heart size={24} weight="fill" className="cursor-pointer text-red-700 hover:bg-red-500 rounded-full transition-colors" onClick={() => handleLike(post._id)} />

        ) : <Heart size={24} className="cursor-pointer text-slate-50 hover:bg-red-600 rounded-full transition-colors" onClick={() => handleLike(post._id)} />
        }

        <Text size='sm'>{post.likes.length} </Text>

      </footer>
    </div >
  )
}
