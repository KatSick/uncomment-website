import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

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
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img
              src="https://pbs.twimg.com/profile_images/1392494568281677829/I4h_cEOb_400x400.jpg"
              alt="avatar"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.title}
            </h3>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="twitter" href="https://twitter.com/theuncomment" />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              {siteMetadata.title} — подкаст із дискусіями про вебтехнології, плюси і мінуси їхнього
              використання та різні корисні лайфхаки.
            </p>
            <p>
              Ведучі:{' '}
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
              , front-end інженери компанії Grammarly. Час від часу також запрошуємо до наших розмов
              цікавих гостей з ІТ-індустрії.
            </p>
            <p>Нові випуски виходять щотретього вівторка.</p>
            <p>
              Якщо вас цікавить світ функціонального програмування і ви захоплюєтесь
              веб-технологіями, приходьте допомагати мені та Андрію у{' '}
              <a href="https://www.grammarly.com/jobs/openings?utm_campaign=EB_Kyiv_Jobs_Uncomment&utm_source=uncomment_landing&utm_medium=link&utm_id=rYcXs78TVEDsBw#all:kyiv">
                Grammarly
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
