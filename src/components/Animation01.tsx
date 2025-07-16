'use client';

export default function HomePage() {
  return (
    <main style={{ height: '200vh', background: '#f5f5f5', width:'300px'}}>
      <div className="container">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="sticky-box">
            Section {i}
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          height: 1200px; /* enough to scroll */
        }

        .sticky-box {
          position: sticky;
          top: 0;
          height: 300px;
          background: #add8e6;
          border-bottom: 2px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          z-index: 10;
        }

        .sticky-box:nth-child(2) { background: #90ee90; }
        .sticky-box:nth-child(3) { background: #f08080; }
        .sticky-box:nth-child(4) { background: #dda0dd; }
      `}</style>
    </main>
  );
}
