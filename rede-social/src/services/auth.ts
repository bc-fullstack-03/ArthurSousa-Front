export function getAuthHeader(){


  const toke = localStorage.getItem('token')

  const authHeader = {
    headers:{
      Authorization:`Bearer ${toke}`
    }
  }

  return authHeader
}


export function getProfile():string {
  const profile = localStorage.getItem('profile') as string
  return profile

}

export function getUser():string{
  const user = localStorage.getItem('user') as string
  return user
}