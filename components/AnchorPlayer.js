export const AnchorPlayer = ({ url }) => (
  <iframe
    className="rounded-lg w-full h-24"
    title="Anchor player"
    src={url}
    frameBorder="0"
    scrolling="no"
  />
)

export default AnchorPlayer
