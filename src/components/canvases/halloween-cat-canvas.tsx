'use client';

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { FC, Suspense } from 'react';

import CanvasLoader from '@/components/canvas-loader';
import { LG, useWindowSize } from '@/hooks/use-window-size';
import { cn } from '@/lib/utils';

const HalloweenCat: FC = ({}) => {
  const { width } = useWindowSize();
  // const model = useGLTF('./planet/scene.gltf');
  const model = useGLTF('./halloween-cat/scene.gltf');

  const conditionalScale = width ? (width < LG ? 2.5 : 2.8) : 2.8;

  return (
    <motion.primitive
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      object={model.scene}
      // scale={conditionalScale}
      scale={2.3}
      position={[0, -1.2, 0]}
      rotation-y={0}
    />
  );
};

type HalloweenCatCanvasProps = {
  className?: string;
};

export const HalloweenCatCanvas: FC<HalloweenCatCanvasProps> = ({ className }) => {
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
