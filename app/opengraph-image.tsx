import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Silverflame Full Logo'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          position: 'relative',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center',
          padding: '10%',
        }}
      >
        <div style={{ display: 'flex', width: '100%' }}>
          {/* eslint-disable-next-line */}
          <img
            src="https://www.silverflame.dev/logo-full.png"
            width="100%"
            height="100%"
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}
