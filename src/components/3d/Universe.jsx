import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const ParticleGroup = ({ count = 50 }) => {
  const mesh = useRef();
  
  const dummy = new THREE.Object3D();
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      const scale = Math.random() * 0.1 + 0.05;
      temp.push({ x, y, z, scale });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      dummy.position.set(particle.x, particle.y, particle.z);
      dummy.scale.set(particle.scale, particle.scale, particle.scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.rotation.y += 0.001;
    mesh.current.rotation.x += 0.0005;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#06b6d4" transparent opacity={0.4} roughness={0.1} />
    </instancedMesh>
  );
};

export default function Universe() {
  return (
    <group>
      <ParticleGroup count={100} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[2, 32, 32]} position={[5, 2, -5]}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.6} roughness={0.1} metalness={0.1} />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <Sphere args={[1.5, 32, 32]} position={[-4, -3, -8]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.3} roughness={0.2} />
        </Sphere>
      </Float>
    </group>
  );
}
