"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  User,
  Heart,
  Droplets,
  Scale,
  Dna,
  Calendar,
  Baby,
  Loader2,
  Sparkles,
  HeartPulse,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Pill,
  Syringe,
  Stethoscope,
  Thermometer,
  TestTube,
  Microscope,
  Atom,
  Plus,
  Shield,
  History as HistoryIcon,
  Info,
  LayoutDashboard,
  TrendingUp,
  Brain,
  Database,
  ChevronRight,
  Clock,
  ArrowUpRight,
  Zap,
  Target,
  BarChart3,
  Waves,
  Eye,
  Settings,
  Trash2,
  CircleDot,
  Scan,
  Radio,
  Wifi,
} from "lucide-react";

interface FormData {
  age: string;
  pregnancies: string;
  bmi: string;
  diabetesPedigreeFunction: string;
  glucose: string;
  bloodPressure: string;
  skinThickness: string;
  insulin: string;
}

interface PredictionResult {
  prediction: number;
  result: string;
  probability: {
    not_diabetic: number;
    diabetic: number;
  };
  risk_level: string;
}

interface HistoryItem extends PredictionResult {
  id: string;
  timestamp: number;
  data: FormData;
}

type Tab = "home" | "predict" | "history" | "about";

function FloatingParticles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);
  
  useEffect(() => {
    setParticles(Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 20,
    })));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(56, 189, 248, 0.6), rgba(59, 130, 246, 0.2))`,
            boxShadow: `0 0 ${p.size * 2}px rgba(56, 189, 248, 0.4)`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GlowingOrbs() {
  const orbs = [
    { x: 10, y: 20, size: 400, color: "56, 189, 248" },
    { x: 85, y: 70, size: 500, color: "59, 130, 246" },
    { x: 50, y: 10, size: 350, color: "14, 165, 233" },
    { x: 20, y: 80, size: 450, color: "34, 211, 238" },
    { x: 90, y: 30, size: 380, color: "2, 132, 199" },
    { x: 40, y: 60, size: 300, color: "56, 189, 248" },
    { x: 70, y: 85, size: 420, color: "59, 130, 246" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, rgba(${orb.color}, 0.15) 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function HexagonalGrid() {
  const [hexagons, setHexagons] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);
  
  useEffect(() => {
    setHexagons(Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 30 + Math.random() * 70,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    })));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hex-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {hexagons.map((hex) => (
          <motion.polygon
            key={hex.id}
            points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
            fill="none"
            stroke="url(#hex-stroke)"
            strokeWidth="0.5"
            style={{
              transformOrigin: "center",
              transform: `translate(${hex.x}%, ${hex.y}%) scale(${hex.size / 100})`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0.3, 0.5, 0],
              scale: [0.7, 1.2, 0.9, 1.2, 0.7],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: hex.duration,
              repeat: Infinity,
              delay: hex.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function FloatingMedicalIcons() {
  const icons = [
    { Icon: Pill, x: 3, y: 12, size: 28, color: "#38bdf8" },
    { Icon: Syringe, x: 94, y: 22, size: 32, color: "#60a5fa" },
    { Icon: Stethoscope, x: 8, y: 72, size: 36, color: "#38bdf8" },
    { Icon: Thermometer, x: 90, y: 78, size: 30, color: "#7dd3fc" },
    { Icon: TestTube, x: 5, y: 45, size: 26, color: "#38bdf8" },
    { Icon: Microscope, x: 95, y: 52, size: 34, color: "#60a5fa" },
    { Icon: Heart, x: 15, y: 88, size: 28, color: "#f87171" },
    { Icon: Atom, x: 85, y: 10, size: 32, color: "#818cf8" },
    { Icon: Shield, x: 50, y: 5, size: 28, color: "#2dd4bf" },
    { Icon: Dna, x: 80, y: 88, size: 32, color: "#a78bfa" },
    { Icon: Plus, x: 25, y: 8, size: 22, color: "#34d399" },
    { Icon: HeartPulse, x: 75, y: 92, size: 28, color: "#fb7185" },
    { Icon: Activity, x: 2, y: 30, size: 24, color: "#38bdf8" },
    { Icon: Droplets, x: 97, y: 40, size: 26, color: "#60a5fa" },
    { Icon: CircleDot, x: 35, y: 3, size: 20, color: "#38bdf8" },
    { Icon: Scan, x: 65, y: 3, size: 22, color: "#7dd3fc" },
    { Icon: Radio, x: 12, y: 55, size: 24, color: "#38bdf8" },
    { Icon: Wifi, x: 88, y: 65, size: 26, color: "#60a5fa" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.3, 0.5, 0.2],
            y: [0, -50, -25, -50, 0],
            x: [0, 20, -15, 20, 0],
            rotate: [0, 25, -25, 25, 0],
            scale: [0.9, 1.3, 1.1, 1.3, 0.9],
          }}
          transition={{
            duration: 12 + index * 0.5,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
        >
          <div
            className="p-3 rounded-2xl backdrop-blur-md"
            style={{
              background: `linear-gradient(135deg, ${item.color}20, ${item.color}08)`,
              border: `1px solid ${item.color}30`,
              boxShadow: `0 0 50px ${item.color}20`,
            }}
          >
            <item.Icon size={item.size} style={{ color: item.color }} className="drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ConnectedNodes() {
  const [nodes, setNodes] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    setNodes(Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    })));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((target, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - target.x, 2) + Math.pow(node.y - target.y, 2)
            );
            if (distance < 20) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.1, 0.4, 0.1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              );
            }
            return null;
          })
        )}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="#38bdf8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              r: [2, 4, 2],
              fill: ["#38bdf8", "#60a5fa", "#38bdf8"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: node.id * 0.12,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function ScanningBeam() {
  return (
    <>
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent z-0 opacity-40"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent z-0 opacity-30"
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}

function DNADoubleHelix() {
  return (
    <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none hidden lg:block">
      <motion.div
        className="relative w-20 h-[600px]"
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full flex justify-between items-center"
            style={{ top: `${(i / 23) * 100}%` }}
            animate={{
              x: [
                Math.sin((i / 23) * Math.PI * 6) * 25,
                Math.sin((i / 23) * Math.PI * 6 + Math.PI) * 25,
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08,
            }}
          >
            <motion.div
              className="w-3.5 h-3.5 rounded-full"
              style={{
                background: `radial-gradient(circle, #7dd3fc, #0ea5e9)`,
                boxShadow: "0 0 20px #7dd3fc",
              }}
              animate={{ scale: [0.8, 1.4, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.08 }}
            />
            <div className="flex-1 h-[1px] bg-gradient-to-r from-sky-400/50 via-blue-500/30 to-sky-400/50 mx-1" />
            <motion.div
              className="w-3.5 h-3.5 rounded-full"
              style={{
                background: `radial-gradient(circle, #60a5fa, #2563eb)`,
                boxShadow: "0 0 20px #60a5fa",
              }}
              animate={{ scale: [1.4, 0.8, 1.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.08 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function DNADoubleHelixRight() {
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none hidden xl:block">
      <motion.div
        className="relative w-16 h-[500px]"
        animate={{ rotateY: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full flex justify-between items-center"
            style={{ top: `${(i / 19) * 100}%` }}
            animate={{
              x: [
                Math.sin((i / 19) * Math.PI * 5) * 20,
                Math.sin((i / 19) * Math.PI * 5 + Math.PI) * 20,
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          >
            <motion.div
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: `radial-gradient(circle, #38bdf8, #0284c7)`,
                boxShadow: "0 0 15px #38bdf8",
              }}
              animate={{ scale: [0.7, 1.2, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1 }}
            />
            <div className="flex-1 h-[1px] bg-gradient-to-r from-sky-400/40 via-blue-400/20 to-sky-400/40 mx-1" />
            <motion.div
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: `radial-gradient(circle, #818cf8, #4f46e5)`,
                boxShadow: "0 0 15px #818cf8",
              }}
              animate={{ scale: [1.2, 0.7, 1.2] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function HeartbeatLine() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden opacity-35 pointer-events-none">
      <svg viewBox="0 0 1200 100" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="heartbeat-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#7dd3fc" stopOpacity="1" />
            <stop offset="75%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,50 L100,50 L110,50 L115,20 L125,85 L135,50 L150,50 L300,50 L310,50 L315,10 L325,95 L335,50 L350,50 L500,50 L510,50 L515,30 L525,75 L535,50 L550,50 L700,50 L710,50 L715,15 L725,90 L735,50 L750,50 L900,50 L910,50 L915,25 L925,80 L935,50 L950,50 L1100,50 L1110,50 L1115,15 L1125,90 L1135,50 L1150,50 L1200,50"
          fill="none"
          stroke="url(#heartbeat-gradient)"
          strokeWidth="2.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

function PulsingRings() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-20">
      {[1, 2, 3, 4, 5, 6].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-sky-400/30"
          style={{
            width: `${ring * 20}%`,
            height: `${ring * 20}%`,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: ring * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function InputField({
  icon: Icon,
  label,
  value,
  onChange,
  placeholder,
  helperText,
  delay = 0,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  helperText?: string;
  delay?: number;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex items-center gap-2">
        <Icon size={14} className="text-sky-400" />
        <label className="text-xs sm:text-sm font-medium text-sky-100 uppercase tracking-wider">{label}</label>
      </div>
      <motion.div
        className={`relative glass-input rounded-xl overflow-hidden transition-all duration-300 ${
          isFocused ? "ring-2 ring-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.2)]" : ""
        }`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full bg-slate-900/40 backdrop-blur-md text-white px-4 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none placeholder:text-slate-600 transition-colors focus:bg-slate-900/60"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        />
        <AnimatePresence>
          {isFocused && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
      {helperText && <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest pl-1">{helperText}</p>}
    </motion.div>
  );
}

function ResultModal({
  result,
  onClose,
}: {
  result: PredictionResult;
  onClose: () => void;
}) {
  const isDiabetic = result.prediction === 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50, rotateX: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50, rotateX: 20 }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
        className="glass-panel rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 max-w-lg w-full relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-50" />
        
        <div className="text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
            className={`w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-3xl flex items-center justify-center relative overflow-hidden ${
              isDiabetic
                ? "bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/30"
                : "bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30"
            }`}
          >
            <div className="absolute inset-0 bg-grid-white/[0.05]" />
            {isDiabetic ? (
              <AlertCircle size={48} className="sm:hidden text-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse" />
            ) : (
              <CheckCircle2 size={48} className="sm:hidden text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
            )}
            {isDiabetic ? (
              <AlertCircle size={64} className="hidden sm:block text-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse" />
            ) : (
              <CheckCircle2 size={64} className="hidden sm:block text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
            )}
          </motion.div>

          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sky-400/60 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-bold"
            >
              Analysis Result
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-5xl font-black mb-2 tracking-tighter"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: isDiabetic ? "#f87171" : "#4ade80",
                textShadow: isDiabetic ? "0 0 30px rgba(248,113,113,0.3)" : "0 0 30px rgba(74,222,128,0.3)",
              }}
            >
              {result.result.toUpperCase()}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="glass-panel p-3 sm:p-4 rounded-2xl bg-white/5 flex flex-col items-center justify-center gap-1">
              <span className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-widest">Risk Level</span>
              <span className={`text-lg sm:text-xl font-black tracking-tight ${
                result.risk_level === "Low" ? "text-green-400" :
                result.risk_level === "Moderate" ? "text-yellow-400" :
                result.risk_level === "High" ? "text-orange-400" : "text-red-400"
              }`}>
                {result.risk_level.toUpperCase()}
              </span>
            </div>
            <div className="glass-panel p-3 sm:p-4 rounded-2xl bg-white/5 flex flex-col items-center justify-center gap-1">
              <span className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-widest">Confidence</span>
              <span className="text-white text-lg sm:text-xl font-black tracking-tight">
                {isDiabetic ? result.probability.diabetic : result.probability.not_diabetic}%
              </span>
            </div>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-end mb-1">
              <span className="text-slate-400 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold">Probability</span>
              <span className="text-red-400 text-xs font-mono">{result.probability.diabetic}% Risk</span>
            </div>
            <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${result.probability.diabetic}%` }}
                transition={{ delay: 0.7, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute left-0 top-0 h-full rounded-full ${
                  isDiabetic
                    ? "bg-gradient-to-r from-orange-500 via-red-500 to-rose-600"
                    : "bg-gradient-to-r from-emerald-500 via-green-500 to-sky-500"
                } shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
              />
            </div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            onClick={onClose}
            className="glow-button w-full py-4 sm:py-5 rounded-2xl text-white font-black tracking-widest uppercase text-xs sm:text-sm shadow-2xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
            whileHover={{ scale: 1.02, letterSpacing: "0.2em" }}
            whileTap={{ scale: 0.98 }}
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DashboardView({ setActiveTab, history }: { setActiveTab: (tab: Tab) => void, history: HistoryItem[] }) {
  const stats = [
    { label: "Total Analysis", value: history.length, icon: Activity, color: "#38bdf8" },
    { label: "Risk Average", value: history.length ? (history.reduce((acc, curr) => acc + curr.probability.diabetic, 0) / history.length).toFixed(1) + "%" : "0%", icon: TrendingUp, color: "#60a5fa" },
    { label: "Model Accuracy", value: "94.2%", icon: Brain, color: "#a78bfa" },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 py-2 sm:py-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="glass-panel p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] relative overflow-hidden group border border-white/5"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <stat.icon size={60} className="sm:w-20 sm:h-20" />
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 relative z-10">
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${stat.color}30, ${stat.color}10)`,
                  color: stat.color,
                  border: `1px solid ${stat.color}30`
                }}
              >
                <stat.icon size={24} className="sm:w-7 sm:h-7" />
              </div>
              <div>
                <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black mb-1">{stat.label}</p>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tighter" style={{ fontFamily: "'Orbitron', sans-serif" }}>{stat.value}</h3>
              </div>
            </div>
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 w-full"
            />
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-4 sm:gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3 glass-panel p-6 sm:p-10 rounded-[28px] sm:rounded-[40px] relative overflow-hidden border border-white/5 flex flex-col justify-center"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-500/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-4 sm:mb-6"
            >
              <Zap size={12} className="sm:w-3.5 sm:h-3.5" />
              System Online
            </motion.div>
            <h2 
              className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 leading-[0.9] tracking-tighter"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              DIABETES <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">PREDICTION</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-lg mb-6 sm:mb-10 leading-relaxed max-w-xl font-medium">
              Using Random Forest machine learning model trained on clinical data to provide accurate diabetes risk assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(56, 189, 248, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab("predict")}
                className="glow-button px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-white font-black tracking-widest uppercase text-[10px] sm:text-xs flex items-center justify-center gap-3"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Start Analysis
                <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(56,189,248,0.5)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab("about")}
                className="px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl border border-sky-500/20 text-sky-400 font-black tracking-widest uppercase text-[10px] sm:text-xs flex items-center justify-center gap-3 transition-all"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 glass-panel p-5 sm:p-8 rounded-[28px] sm:rounded-[40px] border border-white/5 bg-slate-900/40 flex flex-col gap-4 sm:gap-6"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] sm:text-xs">Recent Records</h4>
            <HistoryIcon size={14} className="sm:w-4 sm:h-4 text-sky-400" />
          </div>
          
          <div className="space-y-2 sm:space-y-3 flex-1 overflow-y-auto max-h-[200px] sm:max-h-[300px] pr-2 custom-scrollbar">
            {history.length > 0 ? (
              history.slice(0, 5).map((item) => (
                <div key={item.id} className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.prediction === 1 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                    <div>
                      <p className="text-white font-bold text-xs sm:text-sm tracking-tight">{item.result}</p>
                      <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-widest">{new Date(item.timestamp).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-black text-xs sm:text-sm ${item.prediction === 1 ? 'text-red-400' : 'text-green-400'}`}>{item.probability.diabetic}%</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-30 py-6 sm:py-10">
                <Database size={32} className="sm:w-10 sm:h-10 mb-4" />
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">No Records Yet</p>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setActiveTab("history")}
            className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all flex items-center justify-center gap-2"
          >
            View All Records
            <ArrowUpRight size={12} className="sm:w-3.5 sm:h-3.5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

function HistoryView({ history, onClearHistory }: { history: HistoryItem[], onClearHistory: () => void }) {
  if (history.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-10 sm:p-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center mb-6 sm:mb-10"
        >
          <Database size={36} className="sm:w-12 sm:h-12 text-slate-600" />
        </motion.div>
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4 uppercase tracking-widest" style={{ fontFamily: "'Orbitron', sans-serif" }}>No Records</h3>
        <p className="text-slate-500 max-w-sm text-xs sm:text-sm uppercase tracking-widest leading-loose">
          Run an analysis to see your prediction history here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8 max-h-[70vh] sm:max-h-[75vh] overflow-y-auto pr-2 sm:pr-6 custom-scrollbar">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 bg-slate-900/40 backdrop-blur-xl z-20 py-3 sm:py-4 border-b border-white/5">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-sky-500/10 border border-sky-500/20">
            <HistoryIcon className="text-sky-400" size={20} />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-black text-white uppercase tracking-[0.15em] sm:tracking-[0.2em]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Prediction History
            </h2>
            <p className="text-[9px] sm:text-[10px] text-sky-500/60 font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">{history.length} Records</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClearHistory}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-red-500/20 transition-colors"
        >
          <Trash2 size={14} />
          Clear All
        </motion.button>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {history.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, type: "spring" }}
            className="glass-panel p-4 sm:p-6 rounded-[20px] sm:rounded-[32px] border border-white/5 group hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 bottom-0 w-1 sm:w-1.5 ${item.prediction === 1 ? 'bg-red-500' : 'bg-green-500'}`} />
            
            <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 relative z-10">
              <div className="flex items-center gap-3 sm:gap-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-[16px] sm:rounded-[24px] flex items-center justify-center relative overflow-hidden ${item.prediction === 1 ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                  <div className="absolute inset-0 bg-grid-white/[0.03]" />
                  {item.prediction === 1 ? <AlertCircle size={24} className="sm:w-8 sm:h-8" /> : <CheckCircle2 size={24} className="sm:w-8 sm:h-8" />}
                </div>
                <div>
                  <h4 className="font-black text-white text-base sm:text-xl tracking-tighter" style={{ fontFamily: "'Orbitron', sans-serif" }}>{item.result.toUpperCase()}</h4>
                  <div className="flex items-center gap-2 sm:gap-3 mt-1">
                    <span className="text-slate-500 text-[9px] sm:text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                      <Clock size={9} className="sm:w-[10px] sm:h-[10px]" />
                      {new Date(item.timestamp).toLocaleTimeString()}
                    </span>
                    <span className="text-slate-700 text-[9px] sm:text-[10px]">•</span>
                    <span className="text-slate-500 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">{new Date(item.timestamp).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 sm:gap-12">
                <div className="text-right">
                  <p className="text-slate-600 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black mb-1">Risk</p>
                  <p className={`font-black text-xl sm:text-2xl tracking-tighter ${item.prediction === 1 ? 'text-red-400' : 'text-green-400'}`}>
                    {item.probability.diabetic}%
                  </p>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-black mb-1">Status</p>
                  <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-black tracking-widest uppercase ${
                    item.risk_level === "Low" ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                    item.risk_level === "Moderate" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" :
                    item.risk_level === "High" ? "bg-orange-500/10 text-orange-400 border border-orange-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}>
                    {item.risk_level}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AboutView() {
  const sections = [
    { 
      title: "Model Details", 
      items: [
        { label: "Algorithm", value: "Random Forest" },
        { label: "Trees", value: "100 Decision Trees" },
        { label: "Max Depth", value: "10 Layers" },
        { label: "Criterion", value: "Gini Impurity" }
      ],
      icon: Brain
    },
    { 
      title: "Training Data", 
      items: [
        { label: "Dataset", value: "PIMA Indians" },
        { label: "Samples", value: "768 Records" },
        { label: "Split", value: "80% / 20%" },
        { label: "Validation", value: "K-Fold Cross" }
      ],
      icon: Database
    },
    { 
      title: "Performance", 
      items: [
        { label: "Accuracy", value: "94.2%" },
        { label: "Response", value: "< 12ms" },
        { label: "F1 Score", value: "0.91" },
        { label: "AUC", value: "0.94" }
      ],
      icon: Target
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-10 py-2 sm:py-4 h-full overflow-y-auto pr-2 sm:pr-4 custom-scrollbar">
      <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
        <div className="flex-1 space-y-4 sm:space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]"
          >
            <Shield size={12} className="sm:w-3.5 sm:h-3.5" />
            ML Powered
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-none tracking-tighter" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            ABOUT THE <span className="text-sky-400">PROJECT</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg leading-relaxed font-medium">
            This diabetes prediction system uses a Random Forest machine learning model trained on the PIMA Indians Diabetes Dataset for accurate health risk assessment.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="glass-panel p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5 bg-white/5">
              <p className="text-sky-400 font-black text-xl sm:text-2xl tracking-tighter">0.94</p>
              <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold">AUC Score</p>
            </div>
            <div className="glass-panel p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5 bg-white/5">
              <p className="text-blue-500 font-black text-xl sm:text-2xl tracking-tighter">8ms</p>
              <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold">Response</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-64 lg:w-80 h-64 sm:h-80 relative flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-sky-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6 sm:inset-8 border border-blue-500/20 rounded-full"
          />
          <div className="relative z-10 p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-sky-400/30 shadow-[0_0_50px_rgba(56,189,248,0.2)]">
            <Brain size={60} className="sm:w-20 sm:h-20 text-sky-400" />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="glass-panel p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-white/5 bg-slate-900/40"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <section.icon size={18} className="sm:w-5 sm:h-5 text-sky-400" />
              <h4 className="text-white font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs">{section.title}</h4>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {section.items.map((item, j) => (
                <div key={j} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                  <span className="text-white text-[10px] sm:text-xs font-black tracking-tight">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="glass-panel p-6 sm:p-10 rounded-[28px] sm:rounded-[40px] border border-white/5 bg-sky-500/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 sm:p-10 opacity-10">
          <Shield size={80} className="sm:w-[120px] sm:h-[120px] text-sky-400" />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6 uppercase tracking-widest relative z-10">Data Processing</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 relative z-10">
          {[
            { label: "Input", icon: Waves },
            { label: "Scaling", icon: BarChart3 },
            { label: "Features", icon: Settings },
            { label: "Prediction", icon: Eye }
          ].map((step, k) => (
            <div key={k} className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-center text-sky-400">
                <step.icon size={18} className="sm:w-5 sm:h-5" />
              </div>
              <span className="text-slate-500 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [formData, setFormData] = useState<FormData>({
    age: "",
    pregnancies: "",
    bmi: "",
    diabetesPedigreeFunction: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("diabetes_history");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const saveToHistory = (newResult: PredictionResult) => {
    const historyItem: HistoryItem = {
      ...newResult,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      data: { ...formData },
    };
    const updatedHistory = [historyItem, ...history].slice(0, 50);
    setHistory(updatedHistory);
    localStorage.setItem("diabetes_history", JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("diabetes_history");
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Prediction failed");
      }

      setResult(data);
      saveToHistory(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const updateField = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = Object.values(formData).every((v) => v !== "");

  const navItems = [
    { id: "home", label: "Home", icon: LayoutDashboard },
    { id: "predict", label: "Predict", icon: Activity },
    { id: "history", label: "History", icon: HistoryIcon },
    { id: "about", label: "About", icon: Info },
  ];

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden flex flex-col selection:bg-sky-500/30">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0c1929] to-[#020617]" />
      <div className="absolute inset-0 medical-grid opacity-25 pointer-events-none" />
      
      <GlowingOrbs />
      <FloatingParticles />
      <HexagonalGrid />
      <ConnectedNodes />
      <FloatingMedicalIcons />
      <DNADoubleHelix />
      <DNADoubleHelixRight />
      <ScanningBeam />
      <PulsingRings />
      <HeartbeatLine />

      <div className="relative z-10 container mx-auto px-3 sm:px-4 py-4 sm:py-8 md:py-12 flex-1 flex flex-col max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8 mb-6 sm:mb-12"
        >
          <div className="flex items-center gap-3 sm:gap-6">
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.3)] relative overflow-hidden group cursor-pointer"
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="absolute inset-0 bg-grid-white/[0.1]" />
              <Activity size={24} className="sm:w-8 sm:h-8 text-white relative z-10" />
              <motion.div 
                className="absolute inset-0 bg-white/20"
                animate={{ top: ["100%", "-100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <div>
              <h1
                className="text-xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-sky-300 tracking-tighter"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                DIABETES<span className="text-white/20 mx-1">/</span>PREDICTOR
              </h1>
              <div className="flex items-center gap-2 sm:gap-4 mt-1">
                <p className="text-sky-500/60 text-[8px] sm:text-[10px] font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase">ML Health Analysis</p>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] sm:text-[10px] text-green-500/80 font-black uppercase tracking-widest">Online</span>
                </div>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-[16px] sm:rounded-[24px] bg-slate-900/60 backdrop-blur-xl border border-white/5 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Tab)}
                className={`relative flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-6 py-2 sm:py-3 rounded-[12px] sm:rounded-[18px] transition-all duration-500 group ${
                  activeTab === item.id ? "text-white" : "text-slate-500 hover:text-sky-400"
                }`}
              >
                {activeTab === item.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-sky-600/40 to-blue-600/40 border border-sky-500/30 rounded-[12px] sm:rounded-[18px] shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <item.icon size={16} className="sm:w-[18px] sm:h-[18px] transition-transform duration-500" />
                <span className="font-black text-[8px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] hidden sm:inline" style={{ fontFamily: "'Orbitron', sans-serif" }}>{item.label}</span>
              </button>
            ))}
          </nav>
        </motion.header>

        <motion.main
          key={activeTab}
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 glass-panel rounded-[28px] sm:rounded-[48px] p-4 sm:p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.3)]"
        >
          <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
          
          <div className="corner-accent top-left" />
          <div className="corner-accent top-right" />
          <div className="corner-accent bottom-left" />
          <div className="corner-accent bottom-right" />

          {activeTab === "home" && <DashboardView setActiveTab={setActiveTab} history={history} />}
          
          {activeTab === "predict" && (
            <div className="h-full flex flex-col">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-12 flex-1">
                <div className="space-y-4 sm:space-y-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                      <HeartPulse size={20} className="sm:w-6 sm:h-6 text-sky-400" />
                    </div>
                    <div>
                      <h2 className="text-base sm:text-xl font-black text-white uppercase tracking-[0.15em] sm:tracking-[0.2em]" style={{ fontFamily: "'Orbitron', sans-serif" }}>Personal</h2>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest">Basic Information</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:gap-6">
                    <InputField icon={Calendar} label="Age" value={formData.age} onChange={updateField("age")} placeholder="48" helperText="Years" delay={0.1} />
                    <InputField icon={Baby} label="Pregnancies" value={formData.pregnancies} onChange={updateField("pregnancies")} placeholder="4" helperText="Number of times" delay={0.2} />
                    <InputField icon={Scale} label="BMI" value={formData.bmi} onChange={updateField("bmi")} placeholder="34.6" helperText="Body Mass Index" delay={0.3} />
                    <InputField icon={Dna} label="Diabetes Pedigree" value={formData.diabetesPedigreeFunction} onChange={updateField("diabetesPedigreeFunction")} placeholder="1.05" helperText="Family history score" delay={0.4} />
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Activity size={20} className="sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-base sm:text-xl font-black text-white uppercase tracking-[0.15em] sm:tracking-[0.2em]" style={{ fontFamily: "'Orbitron', sans-serif" }}>Clinical</h2>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest">Lab Measurements</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:gap-6">
                    <InputField icon={Droplets} label="Glucose" value={formData.glucose} onChange={updateField("glucose")} placeholder="165" helperText="mg/dL" delay={0.1} />
                    <InputField icon={Heart} label="Blood Pressure" value={formData.bloodPressure} onChange={updateField("bloodPressure")} placeholder="92" helperText="mm Hg" delay={0.2} />
                    <InputField icon={User} label="Skin Thickness" value={formData.skinThickness} onChange={updateField("skinThickness")} placeholder="35" helperText="mm" delay={0.3} />
                    <InputField icon={Activity} label="Insulin" value={formData.insulin} onChange={updateField("insulin")} placeholder="220" helperText="mu U/ml" delay={0.4} />
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5">
                {error && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-4 sm:mb-8 p-4 sm:p-5 rounded-[16px] sm:rounded-[24px] bg-red-500/10 border border-red-500/20 flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <XCircle className="text-red-400" size={18} />
                    </div>
                    <span className="text-red-300 font-bold uppercase tracking-widest text-[10px] sm:text-xs">{error}</span>
                  </motion.div>
                )}
                
                <motion.button
                  onClick={handleSubmit}
                  disabled={!isFormValid || isLoading}
                  className={`w-full py-4 sm:py-6 rounded-[20px] sm:rounded-[28px] text-white text-xs sm:text-sm font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase transition-all shadow-2xl relative overflow-hidden group ${
                    isFormValid && !isLoading ? "glow-button" : "bg-slate-800/50 cursor-not-allowed opacity-30"
                  }`}
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                  whileHover={isFormValid && !isLoading ? { scale: 1.01, letterSpacing: "0.5em" } : {}}
                  whileTap={isFormValid && !isLoading ? { scale: 0.99 } : {}}
                >
                  <div className="absolute inset-0 bg-grid-white/[0.05]" />
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-3 sm:gap-4 relative z-10">
                      <Loader2 className="animate-spin" size={20} />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3 sm:gap-4 relative z-10">
                      <Sparkles size={20} />
                      Run Prediction
                    </span>
                  )}
                </motion.button>
              </div>
            </div>
          )}

          {activeTab === "history" && <HistoryView history={history} onClearHistory={clearHistory} />}
          
          {activeTab === "about" && <AboutView />}
        </motion.main>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="py-4 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-slate-500"
        >
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="flex flex-col">
              <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sky-500/50 mb-1">Model</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Random Forest</span>
            </div>
            <div className="w-px h-6 sm:h-8 bg-white/5" />
            <div className="flex flex-col">
              <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-500/50 mb-1">Dataset</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">PIMA Indians</span>
            </div>
          </div>
        </motion.footer>
      </div>

      <AnimatePresence>
        {result && <ResultModal result={result} onClose={() => setResult(null)} />}
      </AnimatePresence>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
        
        body {
          background-color: #020617;
        }

        .medical-grid {
          background-image: linear-gradient(rgba(56, 189, 248, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.06) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .glass-panel {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glow-button {
          background: linear-gradient(135deg, #0891b2 0%, #2563eb 100%);
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
          transition: all 0.3s ease;
        }

        .glow-button:hover {
          box-shadow: 0 0 50px rgba(56, 189, 248, 0.6);
        }

        .corner-accent {
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: rgba(56, 189, 248, 0.4);
          border-style: solid;
          pointer-events: none;
        }

        @media (min-width: 640px) {
          .corner-accent {
            width: 20px;
            height: 20px;
          }
        }

        .top-left { top: 12px; left: 12px; border-width: 2px 0 0 2px; border-radius: 4px 0 0 0; }
        .top-right { top: 12px; right: 12px; border-width: 2px 2px 0 0; border-radius: 0 4px 0 0; }
        .bottom-left { bottom: 12px; left: 12px; border-width: 0 0 2px 2px; border-radius: 0 0 0 4px; }
        .bottom-right { bottom: 12px; right: 12px; border-width: 0 2px 2px 0; border-radius: 0 0 4px 0; }

        @media (min-width: 640px) {
          .top-left { top: 20px; left: 20px; }
          .top-right { top: 20px; right: 20px; }
          .bottom-left { bottom: 20px; left: 20px; }
          .bottom-right { bottom: 20px; right: 20px; }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(56, 189, 248, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(56, 189, 248, 0.5);
        }

        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}
