import Navbar from "@/components/ui/Navbar"
import Home from "@/components/landing-page/Home"
import Festival from "@/components/landing-page/Festival"
import Footer from "@/components/ui/Footer"
import Galeria from "@/components/landing-page/Galeria"
import FAQ from "@/components/landing-page/FAQ"
import LineUp from "@/components/landing-page/LineUp"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Home />
      <Festival />
      <LineUp />
      <Galeria />
      <FAQ />
      <Footer />
    </>
  )
}
