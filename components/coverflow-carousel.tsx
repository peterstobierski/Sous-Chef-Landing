"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CoverflowCarouselProps {
  videos: {
    src: string
    alt: string
  }[]
}

export function CoverflowCarousel({ videos }: CoverflowCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      }
    })
  }, [currentIndex])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }
  }

  const getVisibleVideos = () => {
    const visible = []
    const total = videos.length

    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + total) % total
      visible.push({ index, position: i })
    }

    return visible
  }

  return (
    <div className="relative w-full py-8 md:py-16">
      <div
        className="relative h-[400px] md:h-[500px] flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
          {getVisibleVideos().map(({ index, position }) => {
            const isCurrent = position === 0
            const isLeft = position === -1
            const isRight = position === 1

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-out"
                style={{
                  transform: isCurrent
                    ? "translateX(0) scale(1) rotateY(0deg)"
                    : isLeft
                      ? "translateX(-350px) scale(0.7) rotateY(25deg)"
                      : "translateX(350px) scale(0.7) rotateY(-25deg)",
                  opacity: isCurrent ? 1 : 0.5,
                  zIndex: isCurrent ? 30 : 10,
                  transformStyle: "preserve-3d",
                  pointerEvents: isCurrent ? "auto" : "none",
                  display: !isCurrent && window.innerWidth < 768 ? "none" : "block",
                }}
              >
                <div className="w-[280px] md:w-[280px] bg-black rounded-xl overflow-hidden shadow-2xl border-2 border-stone-200">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={videos[index].src}
                    controls={isCurrent}
                    playsInline
                    autoPlay={isCurrent}
                    muted
                    loop
                    className="w-full h-auto"
                  />
                </div>
                {isCurrent && <p className="text-center mt-3 text-stone-700 font-medium">{videos[index].alt}</p>}
              </div>
            )
          })}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white z-40 w-10 h-10 md:w-12 md:h-12"
          onClick={goToPrevious}
          aria-label="Previous video"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white z-40 w-10 h-10 md:w-12 md:h-12"
          onClick={goToNext}
          aria-label="Next video"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-gold w-8" : "bg-stone-300 hover:bg-stone-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
