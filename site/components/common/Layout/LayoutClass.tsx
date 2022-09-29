import { FC } from 'react'
import cn from 'clsx'
import s from './Layout.module.css'
import { useRouter } from 'next/router'
import { CommerceProvider } from '@framework'
import DashboardNavbarClass from '../DashboardNavbar/DashboardNavbarClass'

const LayoutClass: FC = ({ children }) => {
  const { locale = 'en-US' } = useRouter()

  return (
    <CommerceProvider locale={locale}>
      <div className={cn(s.root)}>
        <DashboardNavbarClass />
        <main className="fit">{children}</main>
      </div>
    </CommerceProvider>
  )
}

export { LayoutClass }
