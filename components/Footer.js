import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="flex items-center mt-16 mb-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} className="mr-2 w-6 h-6" />
        <span className="flex text-sm space-x-2 text-gray-500 dark:text-gray-400">
          <p>{siteMetadata.author}</p>
          <p>{` • `}</p>
          <p>{`${new Date().getFullYear()}`}</p>
        </span>
      </div>
    </footer>
  )
}
