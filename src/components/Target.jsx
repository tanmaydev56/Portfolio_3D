import {  useGLTF } from '@react-three/drei'
import  { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Target = (props) => {
   const targetref = useRef();
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
useGSAP(()=>{
    gsap.to(targetref.current.position,{
        y:targetref.current.position.y + 0.5,
        duration:1.5,
        repeat:-1,
        yoyo:true
    })
})

  return (

    <mesh {...props} ref={targetref}>
        <primitive object={scene}/>

    </mesh>
  )
}

export default Target
