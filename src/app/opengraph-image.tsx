// app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Ikhwan Aji Pratama - Frontend Developer Portfolio';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to bottom right, #020617, #1e1b4b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Background Pattern Grid */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          {/* Badge Tahun */}
          <div
            style={{
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid rgba(99, 102, 241, 0.5)',
              borderRadius: '50px',
              padding: '10px 25px',
              fontSize: 20,
              color: '#a5b4fc',
              marginBottom: 20,
            }}
          >
            Portfolio 2026
          </div>

          {/* Nama Besar */}
          <div
            style={{
              fontSize: 70,
              fontWeight: 'bold',
              letterSpacing: '-0.05em',
              textAlign: 'center',
              lineHeight: 1,
              marginBottom: 10,
            }}
          >
            Ikhwan Aji Pratama
          </div>

          {/* Role dengan Gradient Text */}
          <div
            style={{
              fontSize: 36,
              background: 'linear-gradient(to right, #818cf8, #38bdf8)',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 600,
            }}
          >
            Frontend Developer
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
