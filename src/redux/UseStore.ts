import {create, StateCreator} from "zustand"
import { devtools, persist } from "zustand/middleware"
import { TokenSlice, TokenStatus, User, UserSlice } from "./redux.types"


const createUserSlice : StateCreator<UserSlice> = (set, get, store) => ({
  user: null,
  addUser: (user: User) => set({user}),
  removeUser: () => set({user: null})
})


const initialStateToken: TokenStatus = {
  token: null,
  valid: false
}

const createTokenSlice: StateCreator<TokenSlice> = (set, get, store) => ({
  status: initialStateToken,
  addToken: (status: TokenStatus) => set({status}),
  getToken: () => get().status.token,
  checkTokenStatus: () => get().status.valid,
  removeToken: () => {
    set({status: initialStateToken})
    useStore.getState().removeUser()
  }
})

const useStore = create<UserSlice & TokenSlice>()(
  devtools(
    persist(
      (set, get, store) => ({
        ...createUserSlice(set, get, store),
        ...createTokenSlice(set, get, store)
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