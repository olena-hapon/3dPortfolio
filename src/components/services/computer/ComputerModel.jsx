import { useGLTF } from "@react-three/drei";

const ComputerModel = (props) => {
  const { scene } = useGLTF("/macbook.glb"); 

  return <primitive object={scene} {...props} />;
}

export default ComputerModel

