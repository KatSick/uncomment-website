import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="soundcloud" href={`https://soundcloud.com/uncommentpodcast`} size="6" />
          <SocialIcon
            kind="spotify"
            href={`https://open.spotify.com/show/4KD9H2P51Ec1LyVGKtO8tY`}
            size="6"
          />
          <SocialIcon kind="anchor" href={`https://anchor.fm/uncomment`} size="6" />
          <SocialIcon
            kind="breaker"
            href={`https://www.breaker.audio/slash-slash-uncomment`}
            size="6"
          />
          <SocialIcon
            kind="radiopublic"
            href={`https://radiopublic.com/uncomment-6rjnzz`}
            size="6"
          />
          <SocialIcon
            kind="googlepodcasts"
            href={`https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81YWUyMjFiMC9wb2RjYXN0L3Jzcw==`}
            size="6"
          />
          <SocialIcon kind="pocketcasts" href={`https://pca.st/sbtk3yg0`} size="6" />
          <SocialIcon kind="rss" href={`https://uncomment.fm/index.xml`} size="6" />
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
