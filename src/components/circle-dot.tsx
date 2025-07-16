'use client';

export default function DottedCircleLoader() {
  return (
    <div className="dotted-loader">
      <style jsx>{`
        .dotted-loader {
          width: 200px;
          height: 200px;
          border: 5px dotted #6366f1; /* Indigo-500 */
          border-radius: 50%;
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(90deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
