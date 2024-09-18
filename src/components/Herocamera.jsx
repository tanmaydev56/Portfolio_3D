import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import { easing } from 'maath';
import Target from './Target';
const Herocamera = ({children,isMobile}) => {
    const groupRef = useRef();
    useFrame((state,delta)=>{
        easing.damp3(state.camera.position,[0,0,30],0.25,delta);


    
    if(!isMobile){
        easing.dampE(groupRef.current.rotation,[-state.pointer.y/3,state.pointer.x/5,0],.25,delta);
    }
})
  return (

    <group ref={groupRef} scale={isMobile ? 1.5 : 1} >
      {children}
    </group>
  )
}

export default Herocamera
