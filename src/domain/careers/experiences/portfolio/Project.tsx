import GithubLink from '@/components/links/GithubLink'
import WebsiteLink from '@/components/links/WebsiteLink'
import { Project, ProjectImage } from '@prisma/client'
import Image from 'next/image'

type Props = {
  project: Project & {
    images: ProjectImage[]
  }
}

const Project = ({ project }: Props) => {
  const desktopImages = project.images.filter((image) => image.platform === 'DESKTOP')
  const mobileImages = project.images.filter((image) => image.platform === 'MOBILE')

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div
          className={`carousel carousel-center max-w-xs space-x-4 rounded-box bg-neutral p-4 sm:max-w-lg ${
            mobileImages.length === 0 ? 'inline-flex' : desktopImages.length === 0 ? 'hidden' : 'hidden md:inline-flex'
          }`}
        >
          {desktopImages.map((image) => (
            <div key={image.id} className={`carousel-item`}>
              <div className="mockup-window border bg-base-300">
                <div className="relative flex aspect-[16/10] w-60 justify-center bg-base-200 px-4 py-16 sm:w-80">
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

        <div
          className={`carousel carousel-center max-w-xs rounded-box bg-neutral p-4 sm:max-w-lg ${
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

        <div>
          <h1 className="text-5xl font-bold">{project.name}</h1>
          <p className="py-6">{project.description}</p>
          <div>
            {project.siteUrl ? <WebsiteLink href={project.siteUrl} /> : null}
            {project.githubUrl ? <GithubLink href={project.githubUrl} /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project
