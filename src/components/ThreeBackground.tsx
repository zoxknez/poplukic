"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  return (
    <group>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
    </group>
  );
}

function FloatingWoodChips() {
  const count = 25;
  const mesh = useRef<THREE.InstancedMesh>(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 10 + Math.random() * 40;
      const speed = 0.005 + Math.random() / 500;
      const xFactor = -40 + Math.random() * 80;
      const yFactor = -40 + Math.random() * 80;
      const zFactor = -40 + Math.random() * 80;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      dummy.position.set(
        xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 15,
        yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 15,
        zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 15
      );
      dummy.scale.set(s * 0.5, s * 0.5, s * 0.5);
      dummy.rotation.set(s * 2, s * 2, s * 2);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial color="#5e3829" roughness={0.9} metalness={0.1} />
    </instancedMesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <fog attach="fog" args={['#050505', 10, 40]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#e1bf95" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4a825b" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Particles />
          <FloatingWoodChips />
        </Float>
      </Canvas>
      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
    </div>
  );
}
