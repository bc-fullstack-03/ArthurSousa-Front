export function getAuthHeader(){


  const toke = localStorage.getItem('token')

  const authHeader = {
    headers:{
      Authorization:`Bearer ${toke}`
    }
  }

  return authHeader
}