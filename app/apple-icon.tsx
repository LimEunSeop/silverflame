import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          position: 'relative',
          fontSize: 24,
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
            src="https://www.silverflame.dev/logo-icononly-nobuffer.png"
            width="100%"
            height="100%"
            alt=""
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}
