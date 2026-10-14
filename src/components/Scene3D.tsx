import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Mesh } from "three";

const GOLD = "#d6a85c";
const DEPTH = 60;

function Particles() {
  const positions = useMemo(() => {
    const n = 2600,
      a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      a[i * 3] = (Math.random() - 0.5) * 26;
      a[i * 3 + 1] = (Math.random() - 0.5) * 16;
      a[i * 3 + 2] = 6 - Math.random() * (DEPTH + 10);
    }
    return a;
  }, []);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={GOLD}
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  );
}

function Shape({
  kind,
  position,
}: {
  kind: number;
  position: [number, number, number];
}) {
  const ref = useRef<Mesh>(null);
  useFrame((s, d) => {
    const m = ref.current;
    if (!m) return;
    const boost = 1 + Math.hypot(s.pointer.x, s.pointer.y) * 2;
    m.rotation.x += d * 0.18 * boost;
    m.rotation.y += d * 0.26 * boost;
  });
  return (
    <mesh ref={ref} position={position}>
      {kind === 0 && <icosahedronGeometry args={[1.7, 1]} />}
      {kind === 1 && <torusGeometry args={[1.5, 0.45, 14, 48]} />}
      {kind === 2 && <octahedronGeometry args={[1.8, 0]} />}
      {kind === 3 && <torusKnotGeometry args={[1.1, 0.34, 120, 14]} />}
      {kind === 4 && <dodecahedronGeometry args={[1.7, 0]} />}
      <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.4} />
    </mesh>
  );
}

function Rig() {
  useFrame((s) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    const c = s.camera;
    c.position.z += (5 - p * (DEPTH - 8) - c.position.z) * 0.06;
    c.position.x += (s.pointer.x * 1.2 - c.position.x) * 0.05;
    c.position.y += (s.pointer.y * 0.8 - c.position.y) * 0.05;
    c.lookAt(c.position.x * 0.3, c.position.y * 0.3, c.position.z - 10);
  });
  return null;
}

export default function Scene3D() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        eventSource={document.getElementById("root") as HTMLElement}
        eventPrefix="client"
      >
        <fog attach="fog" args={["#060606", 6, 38]} />
        <Rig />
        <Particles />
        {[0, 1, 2, 3, 4].map((i) => (
          <Shape
            key={i}
            kind={i}
            position={[i % 2 ? 4.2 : -4.2, i % 2 ? -0.8 : 0.9, -9 - i * 10]}
          />
        ))}
      </Canvas>
    </div>
  );
}
