import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const ParticleGroup = ({ count = 100, color = "#55c7ff" }) => {
  const mesh = useRef();
  
  const dummy = new THREE.Object3D();
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 40;
      const scale = Math.random() * 0.05 + 0.02;
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
    mesh.current.rotation.y += 0.0005;
    mesh.current.rotation.x += 0.0002;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </instancedMesh>
  );
};

export default function Universe() {
  return (
    <group>
      <ParticleGroup count={100} color="#55c7ff" />
      <ParticleGroup count={100} color="#087cff" />
      <ParticleGroup count={100} color="#9b7cff" />
      <ParticleGroup count={100} color="#d47cff" />
    </group>
  );
}

