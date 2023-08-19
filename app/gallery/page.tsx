
import UploadButton from "./components/UploadButton";

export default function Gallery() {

    return (
        <section >
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                </div>
                <UploadButton />
                {/* <SearchForm initialSearch={search} /> */}

                {/* <GalleryGrid images={results.resources} /> */}
            </div>
        </section>
    )
}