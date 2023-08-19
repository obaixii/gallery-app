"use client";
import { useState } from "react"
import { CldImage, CldUploadButton } from 'next-cloudinary';


export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {
        imageId && (
          <CldImage
            width="500"
            height="300"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )
      }
    </main>
  )
}
