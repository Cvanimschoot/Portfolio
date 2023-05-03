import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="fixed w-full h-[3rem] flex invisible sm:visible 3xl:w-[90%]">
      <div className="w-0 md:w-1/3 lg:w-1/2"></div>
      <div className="w-full flex px-20 items-center justify-around text-sm md:w-2/3 md:text-xl lg:w-1/2">
        <div className="h-full flex justify-center w-1/3">
          <Link href='/' className="w-5/6 h-full flex items-center justify-center">Experience</Link>
        </div>
        <div className="h-full flex justify-center w-1/3">
          <Link href='/' className="w-5/6 h-full flex items-center justify-center">Projects</Link>
        </div>
        <div className="h-full flex justify-center w-1/3">
          <Link href='/' className="bg-[#824EBD] w-5/6 h-full flex items-center justify-center">About</Link>
        </div>
      </div>
    </nav>
  )
}