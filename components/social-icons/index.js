import Link from '../Link'
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
import Applepodcasts from './applepodcasts.svg'

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
  applepodcasts: Applepodcasts,
}

export const SocialIcon = ({ kind, href, className }) => {
  if (!href) return null

  const SocialSvg = components[kind]

  return (
    <Link className={`transition ${className}`} href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400`}
      />
    </Link>
  )
}

export default SocialIcon
