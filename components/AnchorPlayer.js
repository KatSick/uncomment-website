export const AnchorPlayer = ({ url }) => (
  <iframe
    className="rounded-lg w-96 h-24"
    title="Anchor player"
    src={url}
    frameBorder="0"
    scrolling="no"
  />
)

export default AnchorPlayer
