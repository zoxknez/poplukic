"use client";

import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, Line, useTexture } from "@react-three/drei";

/* 1 jedinica = 100 mm. EUR paleta 1200 × 800 × 144 mm. */

type Part = {
  pos: [number, number, number];
  size: [number, number, number];
  delay: number;
  kind: "board" | "boardZ" | "block";
};

const BOARD_T = 0.22;
const BLOCK_H = 0.78;
const PALLET_H = BOARD_T * 3 + BLOCK_H; // 1.44

const DUR = 0.9;
const CRATE_START = 2.0;
const DIMS_AT = 3.6;

function palletParts(): Part[] {
  const parts: Part[] = [];
  const xs = [-5.275, 0, 5.275];
  const zs = [-3.275, 0, 3.275];

  // donje daske (duž X)
  [
    [-3.275, 1.0],
    [0, 1.45],
    [3.275, 1.0],
  ].forEach(([z, w], i) =>
    parts.push({
      pos: [0, BOARD_T / 2, z],
      size: [12, BOARD_T, w],
      delay: 0.05 * i,
      kind: "board",
    }),
  );

  // 9 kocki
  let k = 0;
  for (const x of xs)
    for (const z of zs)
      parts.push({
        pos: [x, BOARD_T + BLOCK_H / 2, z],
        size: [1.45, BLOCK_H, 1.45],
        delay: 0.35 + 0.045 * k++,
        kind: "block",
      });

  // poprečne daske (duž Z)
  xs.forEach((x, i) =>
    parts.push({
      pos: [x, BOARD_T * 1.5 + BLOCK_H, 0],
      size: [1.45, BOARD_T, 8],
      delay: 0.85 + 0.07 * i,
      kind: "boardZ",
    }),
  );

  // gornji pod: 5 dasaka
  [
    [-3.275, 1.45],
    [-1.64, 1.0],
    [0, 1.45],
    [1.64, 1.0],
    [3.275, 1.45],
  ].forEach(([z, w], i) =>
    parts.push({
      pos: [0, BOARD_T * 2.5 + BLOCK_H, z],
      size: [12, BOARD_T, w],
      delay: 1.15 + 0.07 * i,
      kind: "board",
    }),
  );

  return parts;
}

/* Gajbica 600 × 400 × 240 mm - EUR modul (2 × 2 po sloju). */
const CW = 5.9;
const CD = 3.9;
const CH = 2.4;
const ST = 0.12;

function crateParts(): {
  pos: [number, number, number];
  size: [number, number, number];
  post?: boolean;
}[] {
  const p: { pos: [number, number, number]; size: [number, number, number]; post?: boolean }[] = [];
  [-1.3, 0, 1.3].forEach((z) => p.push({ pos: [0, ST / 2, z], size: [CW, ST, 1.0] }));
  [0.5, 1.28, 2.06].forEach((y) => {
    p.push({ pos: [0, y, CD / 2 - ST / 2], size: [CW, 0.6, ST] });
    p.push({ pos: [0, y, -CD / 2 + ST / 2], size: [CW, 0.6, ST] });
    p.push({ pos: [CW / 2 - ST / 2, y, 0], size: [ST, 0.6, CD - ST * 2] });
    p.push({ pos: [-CW / 2 + ST / 2, y, 0], size: [ST, 0.6, CD - ST * 2] });
  });
  for (const sx of [-1, 1])
    for (const sz of [-1, 1])
      p.push({
        pos: [sx * (CW / 2 - ST - 0.16), CH / 2 - 0.02, sz * (CD / 2 - ST - 0.16)],
        size: [0.32, CH - 0.04, 0.32],
        post: true,
      });
  return p;
}

const crateSlots: { pos: [number, number, number]; delay: number }[] = (() => {
  const out: { pos: [number, number, number]; delay: number }[] = [];
  let i = 0;
  for (const layer of [0, 1])
    for (const [x, z] of [
      [-3, -2],
      [3, -2],
      [-3, 2],
      [3, 2],
    ])
      out.push({ pos: [x, PALLET_H + layer * CH, z], delay: CRATE_START + i++ * 0.16 });
  return out;
})();

/* ── Proceduralne teksture ─────────────────────────────────── */

function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function woodTexture(seed: number, base: string, rotate = false) {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 128;
  const g = c.getContext("2d")!;
  const rand = mulberry32(seed);

  g.fillStyle = base;
  g.fillRect(0, 0, 512, 128);

  for (let i = 0; i < 80; i++) {
    const y = rand() * 128;
    const amp = 1.5 + rand() * 5;
    const freq = 0.004 + rand() * 0.012;
    const phase = rand() * 10;
    g.strokeStyle = `rgba(140, 96, 52, ${0.05 + rand() * 0.2})`;
    g.lineWidth = 0.4 + rand() * 1.6;
    g.beginPath();
    for (let x = 0; x <= 512; x += 8) {
      const yy = y + Math.sin(x * freq + phase) * amp;
      if (x === 0) g.moveTo(x, yy);
      else g.lineTo(x, yy);
    }
    g.stroke();
  }

  for (let n = 0; n < 2; n++) {
    if (rand() < 0.55) {
      const kx = rand() * 512;
      const ky = 24 + rand() * 80;
      const r = 3 + rand() * 5;
      const grd = g.createRadialGradient(kx, ky, 0, kx, ky, r * 2.4);
      grd.addColorStop(0, "rgba(98, 60, 28, 0.8)");
      grd.addColorStop(1, "rgba(98, 60, 28, 0)");
      g.fillStyle = grd;
      g.beginPath();
      g.ellipse(kx, ky, r * 2.4, r * 1.2, 0, 0, Math.PI * 2);
      g.fill();
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  if (rotate) {
    tex.center.set(0.5, 0.5);
    tex.rotation = Math.PI / 2;
  }
  return tex;
}

function stampTexture() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 256;
  const g = c.getContext("2d")!;
  g.clearRect(0, 0, 512, 256);
  g.strokeStyle = "rgba(20, 22, 34, 0.82)";
  g.fillStyle = "rgba(20, 22, 34, 0.82)";
  g.lineWidth = 10;
  g.strokeRect(22, 22, 468, 212);
  g.lineWidth = 4;
  g.beginPath();
  g.moveTo(22, 128);
  g.lineTo(490, 128);
  g.stroke();
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.font = "bold 66px Arial, sans-serif";
  g.fillText("POP-LUKIĆ", 256, 78);
  g.font = "bold 56px Arial, sans-serif";
  g.fillText("HT · BVS", 256, 182);

  // istrošen otisak
  const rand = mulberry32(7);
  g.globalCompositeOperation = "destination-out";
  for (let i = 0; i < 900; i++) {
    g.fillStyle = `rgba(0,0,0,${rand() * 0.7})`;
    g.fillRect(rand() * 512, rand() * 256, 1 + rand() * 4, 1 + rand() * 3);
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* ── Easing ────────────────────────────────────────────────── */

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeOutBack = (x: number) => {
  const c1 = 1.25;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};

/* ── Scena ─────────────────────────────────────────────────── */

function useClockStart(skip: boolean) {
  const start = useRef<number | null>(null);
  return (elapsed: number) => {
    if (skip) return 99;
    if (start.current === null) start.current = elapsed;
    return elapsed - start.current;
  };
}

function Pallet({ reduced }: { reduced: boolean }) {
  const parts = useMemo(palletParts, []);
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const time = useClockStart(reduced);

  const mats = useMemo(() => {
    const boardTex = [11, 23, 37].map((s) => woodTexture(s, "#e6cb9c"));
    const boardZTex = woodTexture(51, "#dfc290", true);
    const blockTex = woodTexture(67, "#cfa873");
    return {
      board: boardTex.map(
        (map) => new THREE.MeshStandardMaterial({ map, roughness: 0.78, metalness: 0 }),
      ),
      boardZ: new THREE.MeshStandardMaterial({ map: boardZTex, roughness: 0.8 }),
      block: new THREE.MeshStandardMaterial({ map: blockTex, roughness: 0.85, color: "#f1dcc0" }),
    };
  }, []);

  const stamp = useMemo(() => stampTexture(), []);

  useFrame((state) => {
    const t = time(state.clock.elapsedTime);
    parts.forEach((part, i) => {
      const m = refs.current[i];
      if (!m) return;
      const p = clamp01((t - part.delay) / DUR);
      const e = easeOutBack(p);
      const lift = (1 - e) * 7;
      m.position.set(part.pos[0], part.pos[1] + lift, part.pos[2] + (1 - e) * (i % 2 ? 1.2 : -1.2));
      m.rotation.set((1 - e) * 0.5 * (i % 3 === 0 ? 1 : -1), 0, (1 - e) * 0.35);
      m.visible = p > 0;
    });
  });

  return (
    <group>
      {parts.map((part, i) => (
        <mesh
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          position={part.pos}
          material={
            part.kind === "block"
              ? mats.block
              : part.kind === "boardZ"
                ? mats.boardZ
                : mats.board[i % mats.board.length]
          }
        >
          <boxGeometry args={part.size} />
          {part.kind === "block" && part.pos[2] > 3 && (
            <mesh position={[0, 0, 0.726]}>
              <planeGeometry args={[1.25, 0.62]} />
              <meshBasicMaterial map={stamp} transparent depthWrite={false} toneMapped={false} />
            </mesh>
          )}
        </mesh>
      ))}
    </group>
  );
}

function Crate({
  slot,
  index,
  reduced,
  logo,
}: {
  slot: (typeof crateSlots)[number];
  index: number;
  reduced: boolean;
  logo: THREE.Texture;
}) {
  const ref = useRef<THREE.Group>(null);
  const parts = useMemo(crateParts, []);
  const time = useClockStart(reduced);

  const mats = useMemo(
    () => ({
      slat: new THREE.MeshStandardMaterial({
        map: woodTexture(100 + index, "#ecd6ad"),
        roughness: 0.8,
      }),
      post: new THREE.MeshStandardMaterial({
        map: woodTexture(200 + index, "#c99d64"),
        roughness: 0.85,
      }),
    }),
    [index],
  );

  useFrame((state) => {
    const g = ref.current;
    if (!g) return;
    const t = time(state.clock.elapsedTime);
    const p = clamp01((t - slot.delay) / 0.75);
    const e = easeOutBack(p);
    g.position.set(slot.pos[0], slot.pos[1] + (1 - e) * 9, slot.pos[2]);
    g.rotation.y = (1 - e) * (index % 2 ? 0.6 : -0.6);
    g.visible = p > 0;
  });

  const front = slot.pos[2] > 0;

  return (
    <group ref={ref} position={slot.pos}>
      {parts.map((part, i) => (
        <mesh key={i} position={part.pos} material={part.post ? mats.post : mats.slat}>
          <boxGeometry args={part.size} />
        </mesh>
      ))}
      {front && (
        <mesh position={[0, 1.28, CD / 2 + 0.002]}>
          <planeGeometry args={[0.56, 0.6]} />
          <meshStandardMaterial map={logo} roughness={0.6} polygonOffset polygonOffsetFactor={-2} />
        </mesh>
      )}
    </group>
  );
}

function Crates({ reduced }: { reduced: boolean }) {
  const logo = useTexture("/images/logo.png");
  logo.colorSpace = THREE.SRGBColorSpace;
  return (
    <>
      {crateSlots.map((slot, i) => (
        <Crate key={i} slot={slot} index={i} reduced={reduced} logo={logo} />
      ))}
    </>
  );
}

type Dim = {
  from: [number, number, number];
  to: [number, number, number];
  at: [number, number, number];
  label: string;
};

const DIMS: Dim[] = [
  { from: [-6, 0, 4.7], to: [6, 0, 4.7], at: [0, 0, 4.7], label: "1200 mm" },
  { from: [6.7, 0, -4], to: [6.7, 0, 4], at: [6.7, 0, 0], label: "800 mm" },
  {
    from: [6.7, 0, 4.7],
    to: [6.7, PALLET_H, 4.7],
    at: [6.7, PALLET_H + 0.9, 4.7],
    label: "144 mm",
  },
];

type LabelRefs = React.RefObject<(HTMLSpanElement | null)[]>;

function Rig({
  reduced,
  labels,
  children,
}: {
  reduced: boolean;
  labels: LabelRefs;
  children: React.ReactNode;
}) {
  const group = useRef<THREE.Group>(null);
  const dims = useRef<THREE.Group>(null);
  const shown = useRef(false);
  const v = useMemo(() => new THREE.Vector3(), []);
  const time = useClockStart(reduced);
  const { size } = useThree();
  const compact = size.width < 520;

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const t = time(state.clock.elapsedTime);
    const show = t > DIMS_AT;

    const targetY =
      -0.62 + state.pointer.x * 0.28 + Math.sin(state.clock.elapsedTime * 0.25) * 0.06;
    const targetX = state.pointer.y * -0.06;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 3, delta);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 3, delta);
    g.updateMatrixWorld();
    if (dims.current) dims.current.visible = show;

    // Projekcija kota na DOM oznake (bez drei <Html>, stabilno uz React 19)
    DIMS.forEach((d, i) => {
      const el = labels.current?.[i];
      if (!el) return;
      v.set(...d.at);
      g.localToWorld(v);
      v.project(state.camera);
      const x = (v.x * 0.5 + 0.5) * state.size.width;
      const y = (-v.y * 0.5 + 0.5) * state.size.height;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (show !== shown.current) el.style.opacity = show ? "1" : "0";
    });
    shown.current = show;
  });

  return (
    <group ref={group} scale={compact ? 0.9 : 1} position={[0, -2.4, 0]}>
      {children}
      <group ref={dims} visible={false}>
        {DIMS.map((d) => (
          <Line
            key={d.label}
            points={[d.from, d.to]}
            color="#d8b46a"
            lineWidth={1.2}
            transparent
            opacity={0.9}
          />
        ))}
      </group>
    </group>
  );
}

export default function PalletScene({
  active = true,
  reduced = false,
}: {
  active?: boolean;
  reduced?: boolean;
}) {
  const labels = useRef<(HTMLSpanElement | null)[]>([]);

  return (
    <div className="relative size-full">
      <Canvas
        dpr={[1, 2]}
        frameloop={active ? "always" : "never"}
        camera={{ position: [21, 16, 27], fov: 30, near: 0.5, far: 120 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      >
        <ambientLight intensity={0.35} color="#b9c3dd" />
        <directionalLight position={[-8, 14, 10]} intensity={2.4} color="#ffe2b0" />
        <directionalLight position={[10, 4, -12]} intensity={1.4} color="#d8b46a" />
        <pointLight position={[0, -1, 9]} intensity={8} distance={18} color="#8f9cc2" />

        <Environment resolution={128} frames={1}>
          <Lightformer
            form="rect"
            intensity={2}
            color="#ffe6c0"
            position={[-5, 6, 6]}
            scale={[10, 4, 1]}
          />
          <Lightformer
            form="rect"
            intensity={1}
            color="#5d6ea0"
            position={[6, 2, -6]}
            scale={[10, 6, 1]}
          />
          <Lightformer form="ring" intensity={1.5} color="#d8b46a" position={[0, 9, 0]} scale={4} />
        </Environment>

        <Rig reduced={reduced} labels={labels}>
          <Pallet reduced={reduced} />
          <Suspense fallback={null}>
            <Crates reduced={reduced} />
          </Suspense>
          <ContactShadows
            position={[0, -0.01, 0]}
            opacity={0.65}
            scale={30}
            blur={2.6}
            far={10}
            resolution={512}
            color="#02040c"
          />
        </Rig>
      </Canvas>
      {DIMS.map((d, i) => (
        <span
          key={d.label}
          ref={(el) => {
            labels.current[i] = el;
          }}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 whitespace-nowrap rounded-sm border border-gold-400/50 bg-navy-950/85 px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-gold-300 opacity-0 backdrop-blur-sm transition-opacity duration-700"
        >
          {d.label}
        </span>
      ))}
    </div>
  );
}
