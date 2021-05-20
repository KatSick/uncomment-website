import Link from '@/components/Link'

export const Host = ({ name, image, twitterLink, twitterHandle }) => (
  <>
    <img src={image} alt={name} className="w-10 h-10 rounded-full" />
    <dl className="text-sm font-medium leading-5 whitespace-nowrap">
      <dt className="sr-only">Ім'я</dt>
      <dd className="text-gray-900 dark:text-gray-100">{name}</dd>
      <dt className="sr-only">Twitter</dt>
      <dd>
        <Link
          href={twitterLink}
          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        >
          {twitterHandle}
        </Link>
      </dd>
    </dl>
  </>
)

export const Hosts = () => (
  <>
    <Link className="text-gray-900 dark:text-gray-100" href="https://twitter.com/katsickk">
      Остап Червак
    </Link>{' '}
    та{' '}
    <Link className="text-gray-900 dark:text-gray-100" href="https://twitter.com/andrei_zhidkov">
      Андрій Жидков
    </Link>
  </>
)

export const HostProfiles = () => (
  <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
    <dt className="sr-only">Ведучі</dt>
    <dd>
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
    </dd>
  </dl>
)

export default HostProfiles
