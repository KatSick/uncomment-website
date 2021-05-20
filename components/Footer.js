import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="flex flex-col items-center mt-16">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-4 gap-y-6 place-items-center w-full mb-4">
          <SocialIcon kind="anchor" href="https://anchor.fm/uncomment" className="w-6 h-6" />
          <SocialIcon
            kind="soundcloud"
            href="https://soundcloud.com/uncommentpodcast"
            className="w-6 h-6"
          />
          <SocialIcon
            kind="googlepodcasts"
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81YWUyMjFiMC9wb2RjYXN0L3Jzcw=="
            className="w-6 h-6"
          />
          <SocialIcon
            kind="spotify"
            href="https://open.spotify.com/show/4KD9H2P51Ec1LyVGKtO8tY"
            className="w-6 h-6"
          />
          <SocialIcon
            kind="breaker"
            href="https://www.breaker.audio/slash-slash-uncomment"
            className="w-6 h-6"
          />
          <SocialIcon
            kind="radiopublic"
            href="https://radiopublic.com/uncomment-6rjnzz"
            className="w-6 h-6"
          />
          <SocialIcon kind="pocketcasts" href="https://pca.st/sbtk3yg0" className="w-6 h-6" />
          <SocialIcon kind="rss" href="https://uncomment.fm/index.xml" className="w-6 h-6" />
          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            className="col-span-2 md:col-span-1 md:col-start-11 w-6 h-6"
          />
          <SocialIcon
            kind="twitter"
            href={siteMetadata.twitter}
            className="col-span-2 md:col-span-1 w-6 h-6"
          />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
