

export type User = {
  id: string,
  username: string,
  email: string,
  avatar: string,
  subscription: string,
  verified: boolean,
  created_at: string,
  updated_at: string,
}

export interface UserSlice {
  user: User | null
  addUser: (user : User) => void
  removeUser: () => void
}

export type TokenStatus = {
  token: string | null,
  valid: boolean
}

export interface TokenSlice {
  status: TokenStatus
  addToken: (status : TokenStatus) => void
  getToken:() => string | null
  checkTokenStatus: () => boolean
  removeToken: () => void
}