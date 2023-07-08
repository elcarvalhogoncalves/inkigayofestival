import Navbar from "@/components/ui/Navbar"
import Home from "@/components/landing-page/Home"
import Festival from "@/components/landing-page/Festival"
import Footer from "@/components/ui/Footer"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Home />
      <Festival />
      <Footer/>
    </>
  )
}
