import Image from "next/image";
import logo from "@/public/images/Inspritus logo.png";

export default function Logo() {
  return (
    <span className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-900/90 px-1 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-cyan-400/40 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:bg-gradient-to-r before:from-gray-800 before:via-cyan-400 before:to-blue-400 before:animate-none group-hover:before:animate-gradient-move before:[background:linear-gradient(to_right,var(--tw-gradient-stops))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
      <Image src={logo} alt="Inspritus Logo" width={40} height={40} className="rounded-full transition-all duration-300 group-hover:shadow-[0_0_16px_#06b6d4,0_0_32px_#06b6d4]" style={{boxShadow: '0 0 8px #06b6d4'}} />
      {/* ...existing code... */}
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .group:hover .before-animate-gradient-move {
          animation: gradient-move 2s linear infinite;
        }
      `}</style>
    </span>
  );
}
