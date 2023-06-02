import NavBar from "@/components/NavBar"
import HeroPage from "@/components/HeroPage"
import AboutSect from "@/components/AboutSect"
import ExperienceSect from "@/components/ExperienceSect"

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
      <div className='bg-white w-full'>
        <div className="relative w-full p-16  overflow-hidden">
          <div className="flex w-[calc(144px * 24)] animate-scroll">
            <img className="mr-5 w-[144px]" src='csharp.svg' />
            <img className="mr-5 w-[144px]" src='git.svg' />
            <img className="mr-5 w-[144px]" src='html5.svg' />
            <img className="mr-5 w-[144px]" src='javascript.svg' />
            <img className="mr-5 w-[144px]" src='json.svg' />
            <img className="mr-5 w-[144px]" src='nextdotjs.svg' />
            <img className="mr-5 w-[144px]" src='nodedotjs.svg' />
            <img className="mr-5 w-[144px]" src='npm.svg' />
            <img className="mr-5 w-[144px]" src='postgresql.svg' />
            <img className="mr-5 w-[144px]" src='react.svg' />
            <img className="mr-5 w-[144px]" src='rubyonrails.svg' />
            <img className="mr-5 w-[144px]" src='tailwindcss.svg' />
            <img className="mr-5 w-[144px]" src='csharp.svg' />
            <img className="mr-5 w-[144px]" src='git.svg' />
            <img className="mr-5 w-[144px]" src='html5.svg' />
            <img className="mr-5 w-[144px]" src='javascript.svg' />
            <img className="mr-5 w-[144px]" src='json.svg' />
            <img className="mr-5 w-[144px]" src='nextdotjs.svg' />
            <img className="mr-5 w-[144px]" src='nodedotjs.svg' />
            <img className="mr-5 w-[144px]" src='npm.svg' />
            <img className="mr-5 w-[144px]" src='postgresql.svg' />
            <img className="mr-5 w-[144px]" src='react.svg' />
            <img className="mr-5 w-[144px]" src='rubyonrails.svg' />
            <img className="mr-5 w-[144px]" src='tailwindcss.svg' />
          </div>
        </div>

      </div>

      {/* <div className="3xl:flex justify-center">
        <ExperienceSect />
      </div> */}
    </>
  )
}
