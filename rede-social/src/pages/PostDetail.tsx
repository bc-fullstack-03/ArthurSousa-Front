import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainScreen } from "../components/MainScreen";
import { PostDetailItem } from "../components/PostDetailItem";
import { api } from "../lib/axios";
import { getAuthHeader } from "../services/auth";
import { Post } from "../types/Post";

export function PostDetail(){

  const {postId} = useParams()
  const [postDaetail , setPostDaetail] = useState<Post>()
  
  useEffect(() =>{
      async function getPostDaetail() {
          try {
            const {data} = await api.get(`posts/${postId}`, getAuthHeader())
            setPostDaetail(data)
          } catch (error) {
            alert('Erro ao tentar obter os dados detalhado do post.')
          }
      }
      getPostDaetail()
  },[])
  return(
    <div>
      <MainScreen>
      {postDaetail && <PostDetailItem post={postDaetail} setPostDetail={setPostDaetail} />}
      </MainScreen>
    </div>
  )
}