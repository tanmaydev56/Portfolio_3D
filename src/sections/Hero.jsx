import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'

import ReactLogoN from '../components/ReactLogoN'
import Cube from '../components/Cube'
import Rings from '../components/Ring'
import Herocamera from '../components/Herocamera'
import Button from '../components/Button'
import StarsCanvas from '../components/Stars'
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <>
    
    <section className='lg:h-screen h-[800px] lg:mt-0 mt-20 flex  flex-col w-full relative' id='home'>
      <div className='w-full mx-auto flex flex-col lg:mt-24 sm:px-10 px-5 gap-3 '>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
          Hi, I'm{' '}
          <span className='lg:text-[80px] text-[60px] bg-gradient-to-r from-purple-600 via-indigo-500 to-gray-800 bg-clip-text text-transparent'>
            Tanmay{' '}
          </span>
          , a web developer building modern, responsive websites.
        </p>
        <p className='hero_tag text-gray_gradient'>
          Crafting modern digital solutions for businesses.
        </p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        <Leva />
        <Canvas className='h-full w-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Herocamera isMobile={isMobile}>
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[-3.0, 0.4, -3.12]}
            />
            </Herocamera>
            <group>
              <Target position={sizes.targetPosition} rotation={[0, Math.PI / 5, 0]} scale={2} />
              <ReactLogoN position={sizes.reactLogoPosition} scale={0.7} />
              <Cube position={sizes.cubePosition} scale={1}/>
              <Rings position={sizes.ringPosition} scale={1}/>
            </group>
           
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 translate-y-6 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
    </>
  )
}

export default Hero
