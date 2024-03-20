import Image from "next/image";
import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "@/components/Loader";
import { Island } from "@/models/Island";
import Sky from "@/models/sky";
import { Bird } from "@/models/Bird";
import { Plane } from "@/models/Plane";
import HomeInfoPage from "@/components/HomeInfoPage";
// import sakura from 'sakura.mp3';
import { soundoff, soundon } from "../../assets/icons";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
 
  const [currentStage, setCurrentStage] = useState(1);
  const [IsRotating,setIsRotating]= useState(false);
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    let rotation= [0.1,4.7,0]
    if (typeof window !== "undefined"){
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }
  }
    return [screenScale, screenPosition,rotation];
  };
  
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;
if(typeof window !== "undefined"){
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

  }
    return [screenScale, screenPosition];
  };
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale,islandPosition,islandRotation]= adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
           <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfoPage currentStage={currentStage} />}
      </div>
      <Canvas  className={`w-full h-screen bg-transparent 
     ${IsRotating?'cursor-grabbing':'cursor-grab'}
        `}
        camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader/>}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skycolor="#b1e1ff" groundColor="#000000" intensity={1}/>
        <Sky/>
        <Island
        position={islandPosition}
        scale={islandScale}
        rotation={islandRotation}
        isRotating={IsRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
        />
        <Bird/>
        <Plane
        isRotating={IsRotating}
        scale={biplaneScale}
        position={biplanePosition}
        rotation={[0,20,0]}
        />
          </Suspense>
      </Canvas>
      
    </section>
  );
}
