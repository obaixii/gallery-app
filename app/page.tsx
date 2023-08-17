"use client";
import { useState } from "react"
import { CldImage, CldUploadButton } from 'next-cloudinary';

type UploadResult = {
  event: "success",
  info: {
    public_id: string
  }
}
export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <CldUploadButton uploadPreset="jdsaqgwe"
        onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id);
        }}
      />
      {
        imageId &&

        <CldImage
          width="500"
          height="500"
          blurFaces
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      }

    </main>
  )
}
