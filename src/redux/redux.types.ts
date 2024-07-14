

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