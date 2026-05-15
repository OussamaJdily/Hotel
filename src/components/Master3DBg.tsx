import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import type * as THREE from 'three';

function MorphingBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!meshRef.current) return;
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.position.y = Math.sin(time * 0.4) * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere ref={meshRef} args={[1, 48, 48]} scale={2.2}>
        <MeshDistortMaterial
          color="#C8A96B"
          speed={1.5}
          distort={0.25}
          radius={1}
          metalness={0.6}
          roughness={0.35}
        />
      </Sphere>
    </Float>
  );
}

export function Master3DBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-30 transition-opacity duration-700 dark:opacity-15">
      <Canvas
        dpr={[1, 1.25]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
        frameloop="always"
      >
        <ambientLight intensity={0.45} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.35} color="#FDFBF7" />
        <MorphingBlob />
      </Canvas>
    </div>
  );
}
