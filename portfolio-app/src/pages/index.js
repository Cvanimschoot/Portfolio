import NavBar from "@/components/NavBar"
import HeroPage from "@/components/HeroPage"

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div className="bg-black w-1/6"></div>
        <HeroPage />
        <div className="bg-[#2f2837] w-1/6"></div>
      </div>
    </>
  )
}
