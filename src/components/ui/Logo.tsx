'use client';

import Head from 'next/head';
import { useState } from 'react';

const Logo = () => {
  const [color, setColor] = useState('#facc15');

  return (
    <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
    </Head>
    <div className="relative group transition-transform duration-300 transform group-hover:scale-115">
      <svg
        width="96"
        height="96"
        viewBox="0 0 400 400"
        onClick={() => setColor(color === '#facc15' ? '#f59e0b' : '#facc15')}
        className="cursor-pointer transition-transform duration-300 transform"
      >
        <defs>
          <filter id="f1" x="0" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
          <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0d1a26', stopOpacity: 1 }} />
          </radialGradient>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#c0c0c0', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="10" fill="url(#starGradient)" className="diagonal-star-back twinkle-star" />
        
        <circle cx="200" cy="200" r="125" fill="transparent" stroke="#38bdf8" strokeWidth="10" filter="url(#f1)"/>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize="250"
          fontFamily="'Great Vibes', cursive"
          dy=".3em"
          className="pointer-events-auto fill-gray-500 hover:fill-gray-700 sparkle-text"
        >
          HS
        </text>
        
        <g className="orbiting-group">
          <circle cx="175" cy="50" r="20" fill="url(#starGradient" className="pulse-star twinkle-star" />
        </g>
        
        <circle cx="30" cy="30" r="15" fill="url(#starGradient)" className="diagonal-star-front twinkle-star" />
      </svg>
      <div className="absolute inset-0 group-hover:shadow-md transition-shadow duration-300"></div>
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .orbiting-group {
          transform-origin: 200px 200px; /* Center of the SVG */
          animation: orbit 10s linear infinite;
        }

        .diagonal-star-back, .diagonal-star-front {
          opacity: 0.9; /* Slight opacity to blend with the background */
          filter: drop-shadow(0 0 5px #c0c0c0); /* Adding drop shadow for depth */
        }

        .diagonal-star-back {
          animation: diagonalMoveBack 10s linear infinite;
        }

        .diagonal-star-front {
          animation: diagonalMoveFront 10s linear infinite;
        }

        @keyframes diagonalMoveBack {
          0% {
            transform: translate(30px, 30px) scale(1.5);
            opacity: 1;
          }
          25% {
            transform: translate(100px, 100px) scale(1.2);
            opacity: 0.7;
          }
          50% {
            transform: translate(150px, 150px) scale(1);
            opacity: 0.5;
          }
          75% {
            transform: translate(200px, 200px) scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: translate(250px, 250px) scale(1.5);
            opacity: 1;
          }
        }

        @keyframes diagonalMoveFront {
          0% {
            transform: translate(250px, 250px) scale(1.5);
            opacity: 1;
          }
          25% {
            transform: translate(200px, 200px) scale(1.2);
            opacity: 0.7;
          }
          50% {
            transform: translate(150px, 150px) scale(1);
            opacity: 0.5;
          }
          75% {
            transform: translate(100px, 100px) scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: translate(30px, 30px) scale(1.5);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
        
        @keyframes colorPulse {
          0%, 100% {
            fill: #facc15;
          }

          50% {
            fill: #f59e0b;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
            filter: brightness(0.8) drop-shadow(0 0 5px cyan) drop-shadow(0 0 10px white);
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
            filter: brightness(1.2) drop-shadow(0 0 10px cyan) drop-shadow(0 0 20px white);
          }

          @keyframes sparkle {
            0%, 100% {
              filter: brightness(1);
            }
            50% {
              brightness(1.5);
            }
          }

        .pulse-star {
          animation: pulse 8s infinite, colorPulse 5s infinite alternate;
        }

        .twinkle-star {
          animation: twinkle 3s infinite, colorPulse 5s infinite alternate;
        }

        text:hover {
          fill: #38bdf8;
          transition: fill 0.3s ease;
        }

        circle[fill="transparent"] {
          stroke: ${color};
          transition: stroke 0.3s ease, filter 0.3s ease;
          filter: drop-shadow(0 0 15px ${color});
        }

        .group:hover .diagonal-star-back, .group:hover .diagonal-star-front {
          transform: scale(1.5);
          transition: transform 0.3s ease;
        }

        .group:hover .twinkle-star {
          animation-duration: 2s; /* Faster twinkling on hover */
        }

        }
      `}</style>
    </div>
    </>
  );
};

export default Logo;
