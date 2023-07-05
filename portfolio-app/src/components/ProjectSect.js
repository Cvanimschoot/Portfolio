export default function ProjectSect() {
  return (
    <div className="bg-black w-full h-auto">
      <div className="h-[800px] flex">
        <div className="w-1/3 px-24 py-10">
          <div className="bg-[#2f2837] h-5/6 rounded-lg p-1 flex flex-col items-center">
            <img className="mb-2 rounded-lg" src='ExpatHomePage.gif' />
            <p className="text-2xl">Expat-ations</p>
          </div>
        </div>
        <div className="w-1/3 px-24 py-10">
          <div className="h-1/6"></div>
          <div className="bg-[#2f2837] h-5/6 rounded-lg"></div>
        </div>
        <div className="w-1/3 px-24 py-10">
          <div className="bg-[#2f2837] h-5/6 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}