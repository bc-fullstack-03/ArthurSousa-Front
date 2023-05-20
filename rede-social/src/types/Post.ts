export interface Post {
  _id: string,
  title: string,
  descripion: string,
  profile:{
    name: string,
  }
  comments: [],
  likes: [],
  image: boolean,
}