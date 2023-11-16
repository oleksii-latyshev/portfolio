'use client';

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas, PrimitiveProps, useFrame } from '@react-three/fiber';
import { useMotionValue, useSpring } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { FC, Suspense, useEffect, useRef, useState } from 'react';

import CanvasLoader from '@/components/canvas-loader';
import { LG, MD, useWindowBreakpoint } from '@/hooks/use-window-breakpoint';

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
  const model = useGLTF('./ghost-cat/scene.gltf');

  const isMdBreakpoint = useWindowBreakpoint(MD);
  const isLgBreakpoint = useWindowBreakpoint(LG);

  const mouse = {
    x: useSpring(useMotionValue(0), mouseSpringOptions),
    y: useSpring(useMotionValue(0), mouseSpringOptions),
  };

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = e;

      const xConditionalValue = isMdBreakpoint ? -0.7 : -0.5;
      const yConditionalValue = isMdBreakpoint ? -0.4 : -0.5;

      const x = xConditionalValue + clientX / innerWidth;
      const y = yConditionalValue + clientY / innerHeight;
      mouse.x.set(x);
      mouse.y.set(y);
    };

    window.addEventListener('mousemove', manageMouseMove);

    return () => window.removeEventListener('mousemove', manageMouseMove);
  }, [isMdBreakpoint]);

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

  const conditionalScale = isLgBreakpoint ? 2.8 : 2.5;

  return (
    <motion.primitive
      ref={primitiveRef}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      object={model.scene}
      scale={conditionalScale}
      rotation-x={mouse.y}
      rotation-y={mouse.x}
      position-y={y}
    />
  );
};

export const GhostCatCanvas: FC = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        near: 0.1,
        far: 200,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.25} />
        <directionalLight intensity={1.5} position={[0, 0, 0.05]} />
        <OrbitControls
          enableRotate={false}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <GhostCat />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
