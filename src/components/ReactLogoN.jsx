import { Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ReactLogoN = (props) => {
  const { nodes, materials } = useGLTF('models/react.glb');

  // Create a gradient-like effect with more bluish tones
  const gradientMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0.1, 0.1, 0.8), // Bluish-purple shade
    toneMapped: false,
  });

  // Adjust materials with more blue tones
  materials['Material.002'].color.set(new THREE.Color(0.2, 0.3, 0.9)); // Bluish-indigo shade

  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.3} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={gradientMaterial} // Apply the new gradient material here
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/react.glb');

export default ReactLogoN;
