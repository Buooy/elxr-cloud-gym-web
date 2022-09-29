import { FC } from 'react'
import Link from 'next/link'
import s from './DashboardNavbar.module.css'
import DashboardNavbarRoot from './DashboardNavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'

interface Link {
  href: string
  label: string
}

interface DashboardNavbarProps {
  links?: Link[]
}

const DashboardNavbar: FC<DashboardNavbarProps> = ({ links }) => (
  <DashboardNavbarRoot>
    <Container clean className="mx-auto max-w-8xl px-6">
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/dashboard">
            <a className={s.logo} aria-label="Logo">
              <Logo />
            </a>
          </Link>
          <nav className={s.navMenu}>
            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a className={s.link}>{l.label}</a>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
    </Container>
  </DashboardNavbarRoot>
)

export default DashboardNavbar
