import { useEffect, useState } from "react";
import {
  useMotionValue,
  motion,
  animate,
  useMotionTemplate,
} from "framer-motion";
import Header from "./Header";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AnimatedTree = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = "/yggdrasil.png";
  }, []);

  const backgroundImage = useMotionTemplate`url('/yggdrasil.png')`;

  return (
    <motion.section
      style={{
        backgroundImage: imageLoaded ? backgroundImage : "none",
        backgroundPosition: "center",
      }}
      className="relative w-full bg-gray-950 flex justify-start  items-center flex-col bg-cover min-h-screen place-content-center py-4 px-10 overflow-hidden   text-gray-200"
    >
      {!imageLoaded && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-950 text-gray-200">
          <div>Loading...</div>
        </div>
      )}

      {imageLoaded && (
        <>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
            className="w-full hidden md:block z-50 px-8 py-2 rounded-lg opacity-90 bg-red-100"
          >
            <Header />
          </motion.div>

          <div className="absolute inset-0 z-0">
            <Canvas>
              <Stars radius={50} count={2500} factor={4} fade speed={2} />
            </Canvas>
          </div>
        </>
      )}
    </motion.section>
  );
};
