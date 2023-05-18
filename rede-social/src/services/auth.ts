export function getAuthHeader(){


  const toke = localStorage.getItem('userId')

  const authHeader = {
    headers:{
      Authorization:`Bearer ${toke}`
    }
  }

  return authHeader
}