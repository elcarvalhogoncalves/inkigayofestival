"use client"
import Loading from "@/app/loading"
import AcessDanied from "@/components/ui/AcessDanied"
import { signIn, signOut, useSession } from "next-auth/react"
import { redirect } from 'next/navigation'
import Navbar from "@/components/ui/Navbar"
import Profile from "@/components/profile/Profile"

export default function MyProfile() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('../');
    },
  })

  if (status === "loading") {
    return <Loading/>
  }

  return (
    <>
        <Navbar />
        <Profile />
    </>
  )
}
