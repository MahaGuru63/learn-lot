"use client";

export default function LinkedCircles() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-40">
        {/* Left Box + Dashed Line */}
        <div className="relative flex items-center">
          <div className="group w-[100px] h-[100px] rounded-md bg-gradient-to-br from-blue-500 to-green-500 border border-white/30 backdrop-blur-sm shadow-glow z-10 flex items-center justify-center transition-all duration-500 hover:from-purple-500 hover:to-pink-500" />
          <div className="hidden md:block absolute top-1/2 left-full w-[400px] h-[1px] overflow-hidden">
            <div className="w-full h-full dashed-line animate-dash-left" />
          </div>
        </div>

        {/* Center Circle with Video */}
        <div className="w-[300px] h-[300px] z-50 rounded-full overflow-hidden border-2 bg-neutral-500 shadow-glow flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YHjqa482Tjc?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=YHjqa482Tjc"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Right Box + Dashed Line */}
        <div className="relative flex items-center">
          <div className="hidden md:block absolute top-1/2 right-full w-[400px] h-[1px] overflow-hidden">
            <div className="w-full h-full dashed-line animate-dash-right" />
          </div>
          <div className="group w-[100px] h-[100px] rounded-md bg-gradient-to-br from-blue-500 to-green-500 border border-white/30 backdrop-blur-sm shadow-glow z-10 flex items-center justify-center transition-all duration-500 hover:from-purple-500 hover:to-pink-500" />
        </div>
      </div>

      <style jsx>{`
        .shadow-glow {
          box-shadow:
            0 0 10px rgba(107, 114, 128, 0.7),
            0 0 20px rgba(107, 114, 128, 0.4);
        }

        .dashed-line {
          background-image: repeating-linear-gradient(
            to right,
            rgba(107, 114, 128, 1),
            /* gray-500 */ rgba(107, 114, 128, 1) 4px,
            transparent 4px,
            transparent 8px
          );
          background-size: 200% 100%;
          background-repeat: repeat-x;
        }

        .animate-dash-left {
          animation: moveDashLeft 6s linear infinite;
        }

        .animate-dash-right {
          animation: moveDashRight 6s linear infinite;
        }

        @keyframes moveDashLeft {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: -100% 0;
          }
        }

        @keyframes moveDashRight {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: 0% 0;
          }
        }
      `}</style>
    </div>
  );
}
