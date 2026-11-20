import { useEffect, useRef, useState } from 'react'
import { ChatIcon, SparkIcon } from './icons.jsx'

const VIDEO_URL = 'https://res.cloudinary.com/dvdbar9un/video/upload/v1786887774/hero-loop_uiaobx.mp4'

function LogoStrip() {
  return <div className="logos shell"><h2 className="sr-only">From farm to cup</h2><ul className="logos__row"><li><span><ChatIcon /></span>Farm fresh</li><li><span>✦</span>Araku grown</li><li><span>◌</span>Organic craft</li><li><span>⌁</span>Small batch</li></ul></div>
}

export default function Hero() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const play = video.play()
    if (play?.catch) play.catch(() => {})
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      setReady(true)
    }
  }, [])

  return <section className="hero" id="top">
    <div className="hero__media" aria-hidden="true"><video ref={videoRef} className={`hero__video ${ready ? 'is-ready' : ''}`} src={VIDEO_URL} autoPlay muted loop playsInline preload="auto" onCanPlay={() => setReady(true)} /><div className="hero__scrim" /></div>
    <div className="hero__body shell">
      <a className="pill" href="coffee.html"><span className="pill__icon"><ChatIcon /></span>Organic coffee & cocoa from Araku</a>
      <h1 className="hero__title">COCOBREW<span className="hero__title-alt">From farm to cup</span></h1>
      <p className="hero__sub">Handcrafted coffee, cocoa, and chocolate<br /> grown with care in the beautiful hills of Araku Valley</p>
      <div className="hero__cta"><a className="btn btn--solid" href="coffee.html">Explore our products</a><a className="btn btn--glass" href="#story"><SparkIcon />Our story</a></div>
      <p className="hero__fine">Organic ingredients. Thoughtful craft. Naturally good.</p>
    </div>
    <LogoStrip />
  </section>
}
