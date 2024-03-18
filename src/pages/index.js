import Image from "next/image";
import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="w-full h-screen relative">
      <Canvas  className={`w-full h-screen bg-transparent 
     
        `}
        camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader/>}>

          </Suspense>
      </Canvas>
    </section>
  );
}
