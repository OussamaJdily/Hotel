import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, useScroll } from '@react-three/drei';
import * as THREE from 'three';

function MorphingBlob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      
      // Reactive to scroll
      const scrollOffset = scroll?.offset || 0;
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.2 - scrollOffset * 2;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#C8A96B"
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

export function Master3DBg() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20 transition-opacity duration-1000">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FDFBF7" />
        <MorphingBlob />
      </Canvas>
    </div>
  );
}
