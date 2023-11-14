'use client';

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas, PrimitiveProps, useFrame } from '@react-three/fiber';
import { useMotionValue, useSpring } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { FC, Suspense, useEffect, useRef, useState } from 'react';

import CanvasLoader from '@/components/canvas-loader';
import { LG, MD, useWindowSize } from '@/hooks/use-window-size';
import { cn } from '@/lib/utils';

const mouseSpringOptions = {
  damping: 20,
};
const jumpingSpringOptions = { stiffness: 300, damping: 25 };

// ? I couldn't find the right type that would also include the properties that the ThreeJS library provides
export type PrimitiveMotionProps = PrimitiveProps & {
  position: {
    y: number;
  };
};

const GhostCat: FC = ({}) => {
  const primitiveRef = useRef<PrimitiveMotionProps>(null);
  const [direction, setDirection] = useState(1);
  const { width } = useWindowSize();
  const cat = useGLTF('./ghost-cat/scene.gltf');

  const mouse = {
    x: useSpring(useMotionValue(0), mouseSpringOptions),
    y: useSpring(useMotionValue(0), mouseSpringOptions),
  };

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = e;

      const xConditionalValue = width ? (width > MD ? -0.7 : -0.5) : -0.5;
      const yConditionalValue = width ? (width > MD ? -0.4 : -0.5) : -0.5;

      const x = xConditionalValue + clientX / innerWidth;
      const y = yConditionalValue + clientY / innerHeight;
      mouse.x.set(x);
      mouse.y.set(y);
    };

    window.addEventListener('mousemove', manageMouseMove);

    return () => window.removeEventListener('mousemove', manageMouseMove);
  }, [width]);

  const y = useSpring(0, jumpingSpringOptions);

  useFrame(() => {
    if (primitiveRef.current) {
      y.set(primitiveRef.current.position.y + 0.02 * direction);

      if (primitiveRef.current.position.y > 0.3) {
        setDirection(-1);
      } else if (primitiveRef.current.position.y < -0.3) {
        setDirection(1);
      }
    }
  });

  const conditionalScale = width ? (width < LG ? 2.5 : 2.8) : 2.8;

  return (
    <motion.primitive
      ref={primitiveRef}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      object={cat.scene}
      scale={conditionalScale}
      rotation-x={mouse.y}
      rotation-y={mouse.x}
      position-y={y}
    />
  );
};

type GhostCatCanvasProps = {
  className?: string;
};

export const GhostCatCanvas: FC<GhostCatCanvasProps> = ({ className }) => {
  return (
    <div className={cn('h-fit w-fit', className)}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          // fov: 45,
          near: 0.1,
          far: 200,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[0, 0, 0.05]} />
          <OrbitControls
            enableRotate={false}
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <GhostCat />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};