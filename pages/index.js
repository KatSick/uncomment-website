import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import AnchorPlayer from '@/components/AnchorPlayer'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Останні випуски
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            <code>
              //uncomment — подкаст із дискусіями про вебтехнології, плюси і мінуси їхнього
              використання та різні корисні лайфхаки. Ведучі:{' '}
              <a className="text-gray-900 dark:text-gray-100" href="https://twitter.com/katsickk">
                Остап Червак
              </a>{' '}
              та{' '}
              <a
                className="text-gray-900 dark:text-gray-100"
                href="https://twitter.com/andrei_zhidkov"
              >
                Андрій Жидков
              </a>
              , front-end інженери компанії{' '}
              <a className="text-gray-900 dark:text-gray-100" href="https://grammarly.com">
                Grammarly
              </a>
              .
            </code>
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.length === 0
            ? 'Випуски відсутні'
            : posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const {
                  slug,
                  date,
                  title,
                  summary,
                  tags,
                  anchorLink,
                  // spotifyLink,
                  pocketcastsLink,
                  soundcloudLink,
                  embedURL,
                  breakerLink,
                  radiopublicLink,
                } = frontMatter

                return (
                  <li key={slug} className="py-12">
                    <article>
                      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                        <dl>
                          <dt className="sr-only">Опубліковано</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>
                              {new Date(date).toLocaleDateString(
                                siteMetadata.locale,
                                postDateTemplate
                              )}
                            </time>
                          </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                  href={`/episodes/${slug}`}
                                  className="text-gray-900 dark:text-gray-100"
                                >
                                  {title}
                                </Link>
                              </h2>
                              <div className="flex flex-wrap">
                                {tags.map((tag) => (
                                  <Tag key={tag} text={tag} />
                                ))}
                              </div>
                            </div>
                            <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                              {summary}
                            </div>

                            <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                              Слухати випуск на:
                            </div>

                            <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                              <div className="flex mb-3 space-x-4">
                                <SocialIcon kind="anchor" href={anchorLink} size="8" />
                                <SocialIcon kind="soundcloud" href={soundcloudLink} size="8" />
                                {/* not working in Ukraine */}
                                {/* <SocialIcon kind="spotify" href={spotifyLink} size="8" /> */}
                                <SocialIcon kind="pocketcasts" href={pocketcastsLink} size="8" />
                                <SocialIcon kind="breaker" href={breakerLink} size="8" />
                                <SocialIcon kind="radiopublic" href={radiopublicLink} size="8" />
                              </div>
                            </div>

                            <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                              <AnchorPlayer url={embedURL} />
                            </div>
                          </div>
                          <div className="text-base font-medium leading-6">
                            <Link
                              href={`/episodes/${slug}`}
                              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                              aria-label={`Докладніше про "${title}"`}
                            >
                              Докладніше &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/episodes"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="всі випуски"
          >
            Всі випуски &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
