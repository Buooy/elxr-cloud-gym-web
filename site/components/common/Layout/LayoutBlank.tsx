import { FC } from 'react'
import cn from 'clsx'
import s from './Layout.module.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { CommerceProvider } from '@framework'
import { LoadingDots } from '@components/ui'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const SignUpView = dynamic(() => import('@components/auth/SignUpView'), {
  ...dynamicProps,
})

const ForgotPassword = dynamic(
  () => import('@components/auth/ForgotPassword'),
  {
    ...dynamicProps,
  }
)

const FeatureBar = dynamic(() => import('@components/common/FeatureBar'), {
  ...dynamicProps,
})

const Modal = dynamic(() => import('@components/ui/Modal'), {
  ...dynamicProps,
  ssr: false,
})

interface Props {
  pageProps: {}
}

const LayoutBlank: FC<Props> = ({ children }) => {
  const { locale = 'en-US' } = useRouter()

  return (
    <CommerceProvider locale={locale}>
      <div className={cn(s.root)}>
        <main className="fit">{children}</main>
      </div>
    </CommerceProvider>
  )
}

export { LayoutBlank }
