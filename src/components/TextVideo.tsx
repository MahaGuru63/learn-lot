"use client";
import Link from "next/link";

export default function TextVideoSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-12 max-w-6xl mx-auto">
      {/* Left: Title + Description */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Engaging Video Section</h2>
        <p className="text-lg text-gray-600 mb-10">
          This is a description that explains what the video is about. It could
          include key points, background information, or a compelling reason to
          watch.
        </p>
        <Link href="#">
          <button className="group px-6 py-3 bg-neutral-900 text-neutral-50 rounded-md hover:bg-neutral-700 transition duration-300 flex items-center gap-2">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            <span>Learn More</span>
          </button>
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        {/* Rotating Dotted Border */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 border-[2px] border-dashed border-neutral-500 rounded-full animate-spin-slow" />

          {/* Circular Video */}
          <div className="w-[400px] h-[400px] rounded-full overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YHjqa482Tjc?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=YHjqa482Tjc"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <style jsx>{`
          .animate-spin-slow {
            animation: spin 10s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(180deg);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
