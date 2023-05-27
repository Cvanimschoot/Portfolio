import Image from "next/image"
import beach_image from "../../public/beach-bgi.jpg"

export default function ExperienceSect() {
  return (
    <div className="bg-black w-full h-[800px]">
      <div className="h-full w-full">
        <Image src={beach_image} width={0} height={0} sizes='100vw' />
      </div>
    </div>
  )
}