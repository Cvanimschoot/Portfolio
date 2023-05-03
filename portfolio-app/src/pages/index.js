import NavBar from "@/components/NavBar"
import HeroPage from "@/components/HeroPage"

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="3xl:flex justify-center">
        <HeroPage />
      </div>
    </>
  )
}
