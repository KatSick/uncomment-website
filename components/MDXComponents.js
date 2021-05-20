import Image from 'next/image'
import CustomLink from './Link'
import AnchorPlayer from './AnchorPlayer'

const MDXComponents = {
  Image,
  AnchorPlayer,
  a: CustomLink,
}

export default MDXComponents
