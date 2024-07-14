import {create, StateCreator} from "zustand"
import { devtools, persist } from "zustand/middleware"
import { User, UserSlice } from "./redux.types"


const createUserSlice : StateCreator<UserSlice> = (set, get, store) => ({
  user: null,
  addUser: (user: User) => set({user}),
  removeUser: () => set({user: null})
})

const useStore = create<UserSlice>()(
  devtools(
    persist(
      (set, get, store) => ({
        ...createUserSlice(set, get, store)
      }), {name: "user-persist-storage"}
    ),{name: "userStore"}
  )
)

// Delete old storage
// const clearOldState = () => {
//   localStorage.removeItem('user-persist-storage');
//   localStorage.removeItem('userStore');
// };

// clearOldState();

export default useStore