import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between text-2xl font-bold">
                <Logo className="w-12 fill-gray-900 dark:fill-gray-200 stroke-gray-200 dark:stroke-gray-900" />
                <span className="sr-only sm:not-sr-only">{siteMetadata.headerTitle}</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5 space-x-1">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
            {/* <ThemeSwitch /> */}
            {/* <MobileNav /> */}
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
