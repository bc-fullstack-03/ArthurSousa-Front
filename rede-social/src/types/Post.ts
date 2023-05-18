export interface Post {
  id: string,
  nome:string,
  titulo: string,
  conteudo: string,
  dataDaPublicacao: Date,
  comentarios: [],
  likes: [],
}