import { useGLTF } from "@react-three/drei";

const ComputerModel = (props) => {
  const { scene } = useGLTF(import.meta.env.BASE_URL + "./macbook.glb"); 

  return <primitive object={scene} {...props} />;
}

export default ComputerModel

