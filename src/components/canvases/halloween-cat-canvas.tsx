'use client';

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { FC, Suspense } from 'react';

import CanvasLoader from '@/components/canvas-loader';

const HalloweenCat: FC = () => {
  const model = useGLTF('./halloween-cat/scene.gltf');

  return (
    <motion.primitive
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      object={model.scene}
      scale={2.3}
      position={[0, -1.2, 0]}
      rotation-y={0}
    />
  );
};

export const HalloweenCatCanvas: FC = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={1.5} />
        <directionalLight intensity={1} position={[0, 0, 0.1]} />
        <pointLight intensity={0.5} position={[5, 5, 5]} />
        <directionalLight intensity={1} position={[0, 0, -1]} />
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <HalloweenCat />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};
