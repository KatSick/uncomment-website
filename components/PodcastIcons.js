import SocialIcon from '@/components/social-icons'

export default function PodcastIcons({ center }) {
  return (
    <div
      className={`grid grid grid-flow-col auto-cols-max ${
        center ? 'justify-center' : ''
      } gap-3 md:gap-4 w-full mb-4 mt-4`}
    >
      <SocialIcon kind="anchor" href="https://anchor.fm/uncomment" className="w-9 h-9" />
      <SocialIcon
        kind="soundcloud"
        href="https://soundcloud.com/uncommentpodcast"
        className="w-9 h-9"
      />
      <SocialIcon
        kind="googlepodcasts"
        href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81YWUyMjFiMC9wb2RjYXN0L3Jzcw=="
        className="w-9 h-9"
      />
      <SocialIcon
        kind="spotify"
        href="https://open.spotify.com/show/4KD9H2P51Ec1LyVGKtO8tY"
        className="w-9 h-9"
      />
      <SocialIcon
        kind="breaker"
        href="https://www.breaker.audio/slash-slash-uncomment"
        className="hidden xs:block w-9 h-9"
      />
      <SocialIcon
        kind="radiopublic"
        href="https://radiopublic.com/uncomment-6rjnzz"
        className="hidden xs:block w-9 h-9"
      />
      <SocialIcon kind="pocketcasts" href="https://pca.st/sbtk3yg0" className="w-9 h-9" />
      <SocialIcon kind="rss" href="https://uncomment.fm/index.xml" className="w-9 h-9" />
    </div>
  )
}
