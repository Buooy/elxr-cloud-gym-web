import { FC } from 'react'
import cn from 'clsx'
import s from './Layout.module.css'
import { useRouter } from 'next/router'
import { CommerceProvider } from '@framework'
import { useUI } from '@components/ui/context'
import { DashboardNavbar } from '@components/common'
import ShippingView from '@components/checkout/ShippingView'
import CartSidebarView from '@components/cart/CartSidebarView'
import { LoadingDots, Sidebar } from '@components/ui'
import PaymentMethodView from '@components/checkout/PaymentMethodView'
import CheckoutSidebarView from '@components/checkout/CheckoutSidebarView'
import { MenuSidebarView } from '@components/common/UserNav'
import type { Link as LinkProps } from '../UserNav/MenuSidebarView'

const SidebarView: React.FC<{
  sidebarView: string
  closeSidebar(): any
  links: LinkProps[]
}> = ({ sidebarView, closeSidebar, links }) => {
  return (
    <Sidebar onClose={closeSidebar}>
      {sidebarView === 'CART_VIEW' && <CartSidebarView />}
      {sidebarView === 'SHIPPING_VIEW' && <ShippingView />}
      {sidebarView === 'PAYMENT_VIEW' && <PaymentMethodView />}
      {sidebarView === 'CHECKOUT_VIEW' && <CheckoutSidebarView />}
      {sidebarView === 'MOBILE_MENU_VIEW' && <MenuSidebarView links={links} />}
    </Sidebar>
  )
}

const SidebarUI: FC<{ links: LinkProps[] }> = ({ links }) => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI()
  return displaySidebar ? (
    <SidebarView
      links={links}
      sidebarView={sidebarView}
      closeSidebar={closeSidebar}
    />
  ) : null
}

const LayoutDashboard: FC = ({ children }) => {
  const { locale = 'en-US' } = useRouter()

  return (
    <CommerceProvider locale={locale}>
      <div className={cn(s.root)}>
        <DashboardNavbar />
        <main className="fit">{children}</main>
      </div>
    </CommerceProvider>
  )
}

export { LayoutDashboard }
