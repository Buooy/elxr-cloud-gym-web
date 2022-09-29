import { FC } from 'react'
import Link from 'next/link'
import s from './DashboardNavbar.module.css'
import DashboardNavbarRoot from './DashboardNavbarRoot'
import { Logo, Container } from '@components/ui'
import { ArrowLeft } from '@components/icons'

interface Link {
  href: string
  label: string
}

interface DashboardNavbarProps {
  links?: Link[]
}

const DashboardNavbarClass: FC<DashboardNavbarProps> = ({ links }) => (
  <div className="flex items-center flex-1">
    <Container className="py-4">
      <Link href="/dashboard/academy/classes">
        <ArrowLeft className="cursor-pointer" />
      </Link>
      <nav className={s.navMenu}>
        {links?.map((l) => (
          <Link href={l.href} key={l.href}>
            <a className={s.link}>{l.label}</a>
          </Link>
        ))}
      </nav>
    </Container>
  </div>
)

export default DashboardNavbarClass
