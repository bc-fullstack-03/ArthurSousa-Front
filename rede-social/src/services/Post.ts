import { api } from "../lib/axios";
import { Post } from "../types/Post";
import { getAuthHeader } from "./auth";


export async function  likePost (post:Post,profile:string):Promise<Post> {
  api.post(`posts/${post._id}/like`, null, getAuthHeader())

  return like(post, profile)
}

function like(post:Post , profile:string) {
  post.likes.push(profile)
  return post
}


export async function  unLikePost (post:Post,profile:string):Promise<Post> {
  api.post(`posts/${post._id}/unlike`, null, getAuthHeader())

  return unlike(post, profile)
}

function unlike(post:Post , profile:string) {
  const index = post.likes.indexOf(profile)
  post.likes.splice(index,1)
  return post
}