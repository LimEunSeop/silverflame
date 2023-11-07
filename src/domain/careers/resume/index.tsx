import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { LinkIcon } from '@heroicons/react/24/outline'
import { fromHtml } from 'hast-util-from-html'

const MARKDOWN_RESUME_URL = 'https://raw.githubusercontent.com/LimEunSeop/my-resume/main/README.md'

//TODO: react element를 content에 넣는 좋은 방법 없을까?
// LinkIcon
const iconHast = fromHtml(
  `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
</svg>
`,
  { fragment: true },
)

const CareersResume = async () => {
  const markdownContent = await fetch(MARKDOWN_RESUME_URL, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.text())

  return (
    <div className="prose prose-sm mx-auto md:prose-base prose-headings:scroll-m-20">
      <Markdown
        skipHtml={false}
        rehypePlugins={[
          rehypeRaw,
          rehypeSlug,
          () =>
            rehypeAutolinkHeadings({
              behavior: 'append',
              content: iconHast as any,
              properties: { class: 'no-underline' },
            }),
          () =>
            rehypeExternalLinks({
              rel: ['noreferrer', 'nofollow', 'noopener'],
              target: '_blank',
            }),
        ]}
        // components={{
        //   h1: ({ node, ...props }) => <h1 className="flex text-3xl font-semibold" {...props} />,
        //   h2: ({ node, ...props }) => <h2 className="flex text-2xl font-semibold" {...props} />,
        //   h3: ({ node, ...props }) => <h3 className="flex text-xl font-semibold" {...props} />,
        //   h4: ({ node, ...props }) => <h4 className="flex text-lg font-semibold" {...props} />,
        //   h5: ({ node, ...props }) => <h5 className="flex text-base font-semibold" {...props} />,
        //   h6: ({ node, ...props }) => <h6 className="flex text-sm font-semibold" {...props} />,
        // }}
      >
        {markdownContent}
      </Markdown>
    </div>
  )
}
export default CareersResume
