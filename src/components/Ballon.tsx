'use client';

export default function BalloonBackgroundPage() {
  return (
    <main className="balloon-page">
      {/* Floating balloons container */}
      <div className="sky">
        <div className="balloon balloon-1" />
        <div className="balloon balloon-2" />
        <div className="balloon balloon-3" />
        <div className="balloon balloon-4" />
      </div>

      {/* Centered Image in Foreground */}
      <div className="center-image">
        <img src='./images/AI_for_SRM.png' alt="Centered" />
      </div>

      <style jsx>{`
        .balloon-page {
          height: 100vh;
          width: 100vw;
          background: linear-gradient(to top, #cceeff, #ffffff);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sky {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .balloon {
          position: absolute;
          bottom: -100px;
          width: 60px;
          height: 80px;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          animation: floatUp 8s linear infinite;
          background-size: 200% 200%;
          background-position: center;
        }

        .balloon::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          width: 2px;
          height: 20px;
          background: #666;
          transform: translateX(-50%);
        }

        .balloon-1 {
          left: 20%;
          background-image: linear-gradient(111deg, #5238C6 0%, #0082D4 100%);
          animation-delay: 0s;
        }

        .balloon-2 {
          left: 40%;
          background-image: linear-gradient(111deg, #00D084 0%, #0082D4 100%);
          animation-delay: 2s;
        }

        .balloon-3 {
          left: 60%;
          background-image: linear-gradient(111deg, #B800E6 0%, #FF3CAC 100%);
          animation-delay: 4s;
        }

        .balloon-4 {
          left: 80%;
          background-image: linear-gradient(111deg, #f857a6 0%, #ff5858 100%);
          animation-delay: 6s;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(-2deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) rotate(2deg);
            opacity: 0;
          }
        }

        .center-image {
          position: relative;
          z-index: 2;
        }

        .center-image img {
          width: 200px;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </main>
  );
}
