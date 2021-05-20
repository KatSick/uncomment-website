import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import SoundCloud from './soundcloud.svg'
import Spotify from './spotify.svg'
import PocketCasts from './pocketcasts.svg'
import Anchor from './anchor.svg'
import RSS from './rss.svg'
import Breaker from './breaker.svg'
import Radiopublic from './radiopublic.svg'
import Googlepodcasts from './googlepodcasts.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  soundcloud: SoundCloud,
  spotify: Spotify,
  pocketcasts: PocketCasts,
  anchor: Anchor,
  rss: RSS,
  breaker: Breaker,
  radiopublic: Radiopublic,
  googlepodcasts: Googlepodcasts,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
