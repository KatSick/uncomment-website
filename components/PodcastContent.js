import dynamic from 'next/dynamic'
import { SocialIcon } from './social-icons'

const Player = dynamic(
  () => new Promise((r) => setTimeout(r, 1500)).then(() => import('@/components/AnchorPlayer')),
  { ssr: false }
)

export const PodcastContent = ({
  anchorLink,
  soundcloudLink,
  spotifyLink,
  pocketcastsLink,
  breakerLink,
  radiopublicLink,
  embedURL,
}) => (
  <div className="prose text-gray-600 max-w-none dark:text-gray-300 relative w-full sm:w-96">
    <div className="flex justify-between mb-3 space-x-4">
      {/* <SocialIcon kind="anchor" href={anchorLink} className="w-8 h-8" /> */}
      {/* <SocialIcon kind="soundcloud" href={soundcloudLink} className="w-8 h-8" /> */}
      {/* <SocialIcon
        kind="googlepodcasts"
        href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81YWUyMjFiMC9wb2RjYXN0L3Jzcw=="
        className="w-8 h-8"
      /> */}
      {/* Spotify is not working in Ukraine */}
      {/* <SocialIcon kind="spotify" href={spotifyLink} className="w-8 h-8" /> */}
      {/* <SocialIcon kind="pocketcasts" href={pocketcastsLink} className="w-8 h-8" /> */}
      {/* breaker and radiopublic are less popular */}
      {/* <SocialIcon kind="breaker" href={breakerLink} className="w-8 h-8" /> */}
      {/* <SocialIcon kind="radiopublic" href={radiopublicLink} className="w-8 h-8" /> */}
    </div>
    <div className="h-24">
      <Player url={embedURL} />
    </div>
  </div>
)
