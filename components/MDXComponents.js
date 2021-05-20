import Image from 'next/image'
import CustomLink from './Link'
import { PodcastContent } from './PodcastContent'

const MDXComponents = {
  Image,
  PodcastContent,
  a: CustomLink,
}

export default MDXComponents
