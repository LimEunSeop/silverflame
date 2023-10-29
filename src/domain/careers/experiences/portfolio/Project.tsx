import { Project, ProjectImage } from '@prisma/client'
import Image from 'next/image'

type Props = {
  project: Project & {
    images: ProjectImage[]
  }
}
;('max-w-sm rounded-lg shadow-2xl')

const Project = ({ project }: Props) => {
  const desktopImages = project.images.filter((image) => image.platform === 'DESKTOP')
  const mobileImages = project.images.filter((image) => image.platform === 'MOBILE')

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div
          className={`carousel carousel-center rounded-box max-w-lg space-x-4 bg-neutral p-4 ${
            mobileImages.length === 0 ? 'inline-flex' : desktopImages.length === 0 ? 'hidden' : 'hidden md:inline-flex'
          }`}
        >
          {desktopImages.map((image) => (
            <div key={image.id} className={`carousel-item`}>
              <div className="mockup-window border bg-base-300">
                <div className="relative flex aspect-[16/10] w-80 justify-center bg-base-200 px-4 py-16">
                  <Image
                    src={image.url}
                    fill
                    sizes="100%"
                    alt={image.altText}
                    style={{ objectFit: 'cover', objectPosition: 'top left' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="w-[200px]"> */}
        <div
          className={`carousel carousel-center rounded-box max-w-lg bg-neutral p-4 ${
            desktopImages.length === 0
              ? 'inline-flex md:inline-flex'
              : mobileImages.length === 0
              ? 'hidden'
              : 'inline-flex md:hidden'
          }`}
        >
          {mobileImages.map((image) => (
            <div key={image.id} className={`carousel-item mb-[-294px] mr-[-160px] origin-top-left scale-50`}>
              <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1 relative">
                    <Image
                      src={image.url}
                      fill
                      sizes="100%"
                      alt={image.altText}
                      style={{ objectFit: 'cover', objectPosition: 'top left' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}

        <div>
          <h1 className="text-5xl font-bold">{project.name}</h1>
          <p className="py-6">{project.description}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}
export default Project
