'use client';

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { FC, Suspense } from 'react';

import CanvasLoader from '@/components/canvas-loader';

const Book: FC = () => {
  const model = useGLTF('./book/scene.gltf');

  return (
    <motion.primitive
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      object={model.scene}
      scale={3}
      position={[0, 0, 0]}
      rotation-y={0}
    />
  );
};

export const BookCanvas: FC = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        near: 0.1,
        far: 200,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={1.5} />
        <directionalLight intensity={1.5} position={[0, 0, 0.1]} />
        <directionalLight intensity={1.5} position={[0, 0, -1]} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.85}
          enablePan={false}
          enableZoom={false}
        />
        <Book />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};
