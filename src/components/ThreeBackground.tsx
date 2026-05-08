"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ pointer, viewport }) => {
    if (!meshRef.current) return;
    const tx = (pointer.x * viewport.width) / 2;
    const ty = (pointer.y * viewport.height) / 2;
    meshRef.current.position.x += (tx * 0.3 - meshRef.current.position.x) * 0.02;
    meshRef.current.position.y += (ty * -0.3 - meshRef.current.position.y) * 0.02;
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[2.2, 0.6, 256, 32]} />
        <MeshDistortMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.15}
          distort={0.15}
          speed={2}
          roughness={0.3}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 600 }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const c = new THREE.Color().setHSL(0.1, 0.5, 0.3 + Math.random() * 0.3);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ pointer }) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0003;
    ref.current.rotation.x += pointer.y * 0.0001;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          args={[points.positions, 3]}
          attach="attributes-position"
          count={count}
        />
        <bufferAttribute
          args={[points.colors, 3]}
          attach="attributes-color"
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function Grid() {
  return (
    <gridHelper
      args={[30, 30, "#2a2826", "#1a1816"]}
      position={[0, -4, 0]}
    />
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#f59e0b" />
        <TorusKnot />
        <Particles />
        <Grid />
      </Canvas>
    </div>
  );
}
