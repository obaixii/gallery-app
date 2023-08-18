"use client"

import { UploadResult } from "@/types/types";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export default function Gallery() {

    const [imageId, setImageId] = useState("")
    return (
        <section >
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <CldUploadButton
                        onUpload={(result: UploadResult) => {
                            // setImageId(result.info.public_id);
                        }}
                        uploadPreset="giomsr4s"
                    />
                </div>

                {/* <SearchForm initialSearch={search} /> */}

                {/* <GalleryGrid images={results.resources} /> */}
            </div>
        </section>
    )
}