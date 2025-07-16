'use client';

export default function HoverAnimatedCards() {
  return (
    <div className="h-[400px] flex flex-wrap justify-center items-center gap-6 bg-neutral-900 p-8 mt-10">
      {/* Card 1: Tilt + Indigo to Purple Gradient */}
      <div className="w-60 h-40 bg-neutral-800 text-white rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-[-2deg] hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 flex items-center justify-center text-2xl font-semibold cursor-pointer">
        Tilt
      </div>

      {/* Card 2: Flip 3D + Blue to Cyan Gradient */}
     <div className="w-60 h-40 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold [backface-visibility:hidden]">
          Front
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold [transform:rotateY(180deg)] [backface-visibility:hidden]">
          Back
        </div>
      </div>
    </div>

      {/* Card 3: Pulse + Pink to Red Gradient on Hover */}
      <div className="w-60 h-40 bg-neutral-800 text-white rounded-xl shadow-lg flex items-center justify-center text-2xl font-semibold cursor-pointer hover:animate-pulse hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 transition-all duration-500">
        Pulse
      </div>

      {/* Card 4: Slide Up with Green to Lime Gradient */}
      <div className="w-60 h-40 bg-neutral-800 text-white rounded-xl shadow-lg overflow-hidden relative group cursor-pointer transition-all duration-500">
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full">
          <span className="text-2xl font-semibold">Hover Me</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 bg-gradient-to-tr from-green-500 to-lime-400 text-2xl font-semibold">
          Slide In!
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
