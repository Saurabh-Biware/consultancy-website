'use client'

import dynamic from 'next/dynamic'

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
)

export default function LottiePlayer({ src }: { src: string }) {
  return <Player autoplay loop src={src} className="w-full h-full" />
}
