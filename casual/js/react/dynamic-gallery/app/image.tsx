'use client'
 
import Image from 'next/image'
 
const imageLoader = ({ src, width, quality }) => {
  return src; 
}
 
export default function Page(src: string) {
  return (
    <Image
      loader={imageLoader}
      src={src}
      alt="Picture of the author"
      width={500}
      height={500}
      className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
    />
  )
}
