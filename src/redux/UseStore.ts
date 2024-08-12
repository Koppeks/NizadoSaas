import {create, StateCreator} from "zustand"
import { devtools, persist } from "zustand/middleware"
import { Calendar, CalendarSlice, User, UserSlice } from "./redux.types"


const createUserSlice : StateCreator<UserSlice> = (set, get, store) => ({
  user: null,
  addUser: (user: User) => set({user}),
  removeUser: () => set({user: null})
})

const createCalendarSlice: StateCreator<CalendarSlice> = (set,get,store) => ({
  userCalendars: [],
  addCalendar: (newCalendar: Calendar) =>{
    console.log(newCalendar)
    set(state => ({
      userCalendars: [...state.userCalendars, newCalendar]
    })) 
  }
})

const useStore = create<UserSlice & CalendarSlice >()(
  devtools(
    persist(
      (set, get, store) => ({
        ...createUserSlice(set, get, store),
        ...createCalendarSlice(set, get, store)
      }), {name: "user-persist-storage"}
    ),{name: "globalStore"}
  )
)

// Delete old storage
// const clearOldState = () => {
//   localStorage.removeItem('user-persist-storage');
//   localStorage.removeItem('globalStore');
// };

// clearOldState();

export default useStore