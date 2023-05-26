import Link from "next/link";
import { useScrollPosition } from "./helpers/useScrollPosition";

export default function NavBar() {

  const scrollPosition = useScrollPosition();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <nav
      className={classNames(
        scrollPosition >= 100 ? 'shadow-xl bg-[#2f2837]' : 'shadow-none bg-transparent',
        'transition-shadow fixed w-full h-[3rem] flex invisible md:visible'
      )}
    >
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