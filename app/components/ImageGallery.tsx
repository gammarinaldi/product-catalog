"use client"

import { useState } from "react"
import Image from "next/image"

export function ImageGallery({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="flex flex-col-reverse">
      {/* Main image */}
      <div className="aspect-w-1 aspect-h-1 w-full">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt="Product image"
          width={400}
          height={400}
          className="h-full w-full object-cover object-center rounded-lg"
        />
      </div>
      {/* Thumbnail images */}
      <div className="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
        <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
          {images.map((image, index) => (
            <button
              key={index}
              className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
              aria-controls={`tabs-${index}-panel`}
              role="tab"
              type="button"
              onClick={() => setCurrentImage(index)}
            >
              <span className="sr-only">Thumbnail {index + 1}</span>
              <span className="absolute inset-0 rounded-md overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt=""
                  width={200}
                  height={200}
                  className="w-full h-full object-cover object-center"
                />
              </span>
              <span
                className={`${
                  index === currentImage ? "ring-indigo-500" : "ring-transparent"
                } absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

