"use client";

export default function AnimatedText() {
  return (
    <div className="h-10 flex items-center justify-center text-black px-4">
      <h1 className="text-4xl font-bold opacity-0 animate-fade-slide-in">
        AI agents that know and grow your business
      </h1>

      <style jsx>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-slide-in {
          animation: fadeSlideIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
