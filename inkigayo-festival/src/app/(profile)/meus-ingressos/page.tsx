"use client"
import Loading from "@/app/loading"
import AcessDanied from "@/components/ui/AcessDanied"
// import { signIn, signOut, useSession } from "next-auth/react"
// import { redirect } from 'next/navigation'
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import Profile from "@/components/profile/Profile"

export default function MyProfile() {
  // const { data: session, status } = useSession()


  // if (status === "loading") {
  //   return <Loading/>
  // }

  // if(status === "unauthenticated"){
  //   redirect('../')
  // }

  return (
    <>
        <Navbar />
        <Profile />
        <Footer />
    </>
  )
}
