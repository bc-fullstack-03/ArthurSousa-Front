
import { useEffect, useState } from "react";
import { Feed } from "../components/Feed";
import { MainScreen } from "../components/MainScreen";
import { api } from "../lib/axios";
import { likePost, unLikePost } from "../services/Post";
import { getAuthHeader, getProfile } from "../services/auth";
import { Post } from "../types/Post";

export function Home() {
  const profile = getProfile()
  const [posts, setPosts] = useState<Post[]>([])
  const authHeader = getAuthHeader()
  useEffect(() => {
    async function getPosts() {
      try {
        const { data } = await api.get('feed', authHeader)
        console.log(data)
        setPosts(data)

      } catch (error) {
        alert("Erro ao obter o Feed" + error)
      }
    }

    getPosts()
  }, [])

  async function postCreated(post: Post) {

    try {
      const {data} = await api.get(`posts/${post._id}`, authHeader)
      setPosts((posts) => [data, ...posts])
      
    } catch (error) {
      alert('Erro ao tentar obter post salvo.')
    }
   
  }

  async function handleLike(postId:string){
    const [post] = posts.filter((post) => post._id === postId)

    try {
      if(post && !post.likes.includes(profile)){
          const newPost = await likePost(post , profile)
          changePosts(newPost)
      }else{
        const newPost = await unLikePost(post,profile)
        changePosts(newPost)
      }
    } catch (error) {
      alert('Erro ao tentar da like.')
    }
  }

  function changePosts(newPost:Post){
    setPosts((posts) => {
          
      const index = posts.indexOf(newPost)
      posts[index] = newPost
      return [...posts]
    })
  }
  return (

    <MainScreen postCreadted={postCreated}>
      <Feed posts={posts} handleLike={handleLike} />
    </MainScreen>

  )
}