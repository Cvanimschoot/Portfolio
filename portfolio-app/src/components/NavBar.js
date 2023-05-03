import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="fixed bg-transparent w-full h-[3rem] flex">
      <div className="w-4/6"></div>
      <div className="w-2/6 flex px-20 items-center justify-around text-xl">
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