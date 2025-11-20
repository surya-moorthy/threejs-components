
import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef } from 'react'
const Cube = ({ position, size, color }) => {

  const ref = useRef();

  useFrame((state,delta) => {
    console.log(state)
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;
      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  })

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function App() {

  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5}/>
       <Cube position={[0,0,0]} size={[1,1,1]} color={"orange"}/>
    </Canvas>
  )
}

export default App
