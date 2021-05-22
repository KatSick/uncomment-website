import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`${new Date().getFullYear()}`}</div>
        </div>
        <div className="flex justify-center w-full mb-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} className="w-6 h-6" />
        </div>
      </div>
    </footer>
  )
}
