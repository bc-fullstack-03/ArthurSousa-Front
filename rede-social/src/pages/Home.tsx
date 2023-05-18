
import { useEffect, useState } from "react";
import { Feed } from "../components/Feed";
import { MainScreen } from "../components/MainScreen";
import { apiPost } from "../lib/axios";
import { getAuthHeader } from "../services/auth";

export function Home() {
  const [posts, setPosts] = useState([])
  const authHeader = getAuthHeader()
  useEffect(() => {
    async function getPosts() {
      try {
        const { data } = await apiPost.get('postagens', authHeader)
        setPosts(data)

      } catch (error) {
        alert("Erro ao obter o Feed" + error)
      }
    }

    getPosts()
  }, [])

  return (

    <MainScreen>
      <Feed posts={posts} />
    </MainScreen>

  )
}