"use client"

import { Navbar } from "@/containers/navbar/navbar";
import "../sass/pages/home.scss"
import useStore from "@/redux/UseStore";

export default function Home() {

  const {checkTokenStatus} = useStore()

  return (
    <main className="Home_Container">
      <Navbar userLoged={checkTokenStatus()}/>
    </main>
  );
}
