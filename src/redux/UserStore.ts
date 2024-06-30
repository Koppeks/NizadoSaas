import {create, StateCreator} from "zustand"

interface UserSlice {
  username: string
  addUser: () => void
  removeUser: () => void
}


const createUserSlice : StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
  username: "",
  addUser: () => set((state) => ({username: state.username})),
  removeUser: () => set(() => ({username: ""}))
})


