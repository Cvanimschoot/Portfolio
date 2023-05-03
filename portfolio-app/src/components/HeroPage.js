import Image from "next/image"
import HeroImage from '../../public/HeroPage.svg'

export default function HeroPage() {
  return (
    <Image src={HeroImage} alt='Hero Page Image' width='100%' />
  )
}