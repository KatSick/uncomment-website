import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import { Host, Hosts } from '@/components/Hosts'
import Link from '@/components/Link'

export default function About() {
  return (
    <>
      <PageSeo
        title={`Про нас - ${siteMetadata.title}`}
        description={`Про нас - ${siteMetadata.title}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Про нас
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Logo className="pl-6 mr-2 w-40 fill-gray-900 dark:fill-gray-200 stroke-gray-200 dark:stroke-gray-900" />
            <h3 className="pt-2 text-3xl font-bold leading-8 tracking-tight">
              {siteMetadata.headerTitle}
            </h3>
            <SocialIcon
              kind="twitter"
              href="https://twitter.com/theuncomment"
              className="w-8 h-8 mt-4"
            />
            <div className="mt-6">
              <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                <li className="flex items-center space-x-2">
                  <Host
                    name="Остап Червак"
                    image="https://pbs.twimg.com/profile_images/939510376751869952/OHd77ha7_400x400.jpg"
                    twitterLink="https://twitter.com/katsickk"
                    twitterHandle="@katsickk"
                  />
                </li>
                <li className="flex items-center space-x-2">
                  <Host
                    name="Андрій Жидков"
                    image="https://pbs.twimg.com/profile_images/914052031899369473/aOpRZJiZ_400x400.jpg"
                    twitterLink="https://twitter.com/andrei_zhidkov"
                    twitterHandle="@andrei_zhidkov"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              <b>{siteMetadata.title}</b> — подкаст із дискусіями про вебтехнології, плюси і мінуси
              їхнього використання та різні корисні лайфхаки.
            </p>
            <p>
              Ведучі: <Hosts />, front-end інженери компанії Grammarly.
            </p>
            <p>Нові випуски виходять щотретього вівторка.</p>
            <p>
              Якщо вас цікавить світ функціонального програмування і ви захоплюєтесь
              веб-технологіями, приходьте допомагати мені та Андрію у{' '}
              <Link href="https://www.grammarly.com/jobs/openings?utm_campaign=EB_Kyiv_Jobs_Uncomment&utm_source=uncomment_landing&utm_medium=link&utm_id=rYcXs78TVEDsBw#all:kyiv">
                Grammarly
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
