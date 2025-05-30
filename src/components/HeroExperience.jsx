import { Canvas } from "@react-three/fiber";
import { Mewa } from "../../public/models/Mewa";
import { useEffect, useState } from "react";
import { Mezam } from "../../public/models/Mezam";
import Loader from "./Loader";

const HeroExperience = () => {
  const [showMe3, setShowMe3] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMe3(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Loader visible={showMe3} />
      <Canvas>
        <ambientLight />
        <directionalLight
          position={[-2, 0, 3]}
          intensity={3}
          color={"#FF28D5"}
        />
        <directionalLight
          position={[2, 0, 3]}
          intensity={3}
          color={"#1C34FF"}
        />

        <group>
          <Mewa scale={9} position={[-0.3, -15, -11]} />
          <Mezam scale={9} position={[0.2, -14.8, -0.5]} />
        </group>
      </Canvas>
    </>
  );
};

export default HeroExperience;
