'use client';

import { useEffect, useRef, useState } from 'react';

export default function RainbowScroll() {
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleList, setVisibleList] = useState<boolean[]>(Array(5).fill(false));
  const [isLocked, setIsLocked] = useState(true);
  const unlockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleList(prev => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    circlesRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Detect unlock scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsLocked(false); // stop fixed rainbow
        }
      },
      { threshold: 0.5 }
    );

    if (unlockRef.current) {
      observer.observe(unlockRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page">
      {/* Scroll triggers for each arc */}
      {[0, 1, 2, 3, 4].map(i => (
        <div key={i} data-index={i} ref={el => (circlesRef.current[i] = el)} className="spacer" />
      ))}

      {/* Rainbow container – fixed initially, then relative */}
      <div className={`rainbow-wrapper ${isLocked ? 'fixed' : 'relative'}`}>
        <div className="rainbow-container">
          {[0, 1, 2, 3, 4].map(i => (
            <div
              key={i}
              className={`half-circle arc-${i + 1} ${visibleList[i] ? 'visible' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Target marker to scroll away */}
      <div ref={unlockRef} className="after-section">
        <h2>Next Section Starts Here</h2>
        <p>This content scrolls the rainbow away.</p>
      </div>

      <style jsx>{`
        .page {
          background: #f8fafc;
          font-family: sans-serif;
        }

        .spacer {
          height: 100vh;
        }

        .rainbow-wrapper.fixed {
          position: fixed;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          z-index: 10;
        }

        .rainbow-wrapper.relative {
          position: relative;
          top: auto;
          transform: none;
          width: 100%;
          margin-top: 20vh;
          display: flex;
          justify-content: center;
        }

        .rainbow-container {
          position: relative;
          width: 300px;
          height: 160px;
          pointer-events: none;
        }

        .half-circle {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleY(0);
          transform-origin: bottom;
          opacity: 0;
          transition: transform 0.6s ease, opacity 0.6s ease;
          border-top-left-radius: 9999px;
          border-top-right-radius: 9999px;
        }

        .half-circle.visible {
          transform: translateX(-50%) scaleY(1);
          opacity: 1;
        }

        .arc-1 {
          width: 300px;
          height: 150px;
          background: #ff595e;
          z-index: 1;
        }
        .arc-2 {
          width: 250px;
          height: 125px;
          background: #ffca3a;
          z-index: 2;
        }
        .arc-3 {
          width: 200px;
          height: 100px;
          background: #8ac926;
          z-index: 3;
        }
        .arc-4 {
          width: 150px;
          height: 75px;
          background: #1982c4;
          z-index: 4;
        }
        .arc-5 {
          width: 100px;
          height: 50px;
          background: #6a4c93;
          z-index: 5;
        }

        .after-section {
          height: 100vh;
          padding: 60px;
          background: white;
      
        }
      `}</style>
    </main>
  );
}
