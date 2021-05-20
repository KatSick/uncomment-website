import Link from './Link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      className="mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400"
      href={`/tags/${kebabCase(text)}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
