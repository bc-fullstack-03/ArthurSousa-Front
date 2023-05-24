import { UserCircle } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"
import { Post } from "../types/Post"
import { Heading } from "./Heading"
import { PostItem } from "./PostItem"
import { Text } from "./Text"

interface FeedProps {
  posts: Post[]
  handleLike: (postId: string) =>void
}

export function Feed({ posts, handleLike }: FeedProps) {
  const user = localStorage.getItem("user")

  return (
    <div className="basis-5/6 overflow-y-auto scroll-smooth ">
      <Heading className="border-b border-slate-400 mt-4">
        <Text size="lg" className="text-xl font-extrabold ml-5 ">Página Inicial</Text>

        <div className="flex items-center ml-5 my-4">
          <UserCircle size={48} weight='light' className="text-slate-50"/>
          <Text size="lg" className="font-extrabold ml-2"> {user} </Text>
        </div>
      </Heading>

      <section>
        {posts && posts.map((post: Post) => (
            <NavLink key={post._id} to={`/posts/${post._id}` } className="cursor-pointer">
                <PostItem  post={post} handleLike={handleLike}/>
            </NavLink>
        ))}

        
      </section>
    </div>
  )
}