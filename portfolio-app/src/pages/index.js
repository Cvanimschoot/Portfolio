import NavBar from "@/components/NavBar"
import HeroPage from "@/components/HeroPage"
import AboutSect from "@/components/AboutSect"

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="3xl:flex justify-center">
        <HeroPage />
      </div>
      <div className="3xl:flex justify-center">
        <AboutSect />
      </div>
    </>
  )
}
