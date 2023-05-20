
import { useEffect, useState } from "react";
import { Feed } from "../components/Feed";
import { MainScreen } from "../components/MainScreen";
import { api } from "../lib/axios";
import { getAuthHeader } from "../services/auth";

export function Home() {
  const [posts, setPosts] = useState([])
  const authHeader = getAuthHeader()
  useEffect(() => {
    async function getPosts() {
      try {
        const { data } = await api.get('feed',authHeader)
        console.log(data)
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