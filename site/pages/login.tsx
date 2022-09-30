import { LayoutBlank } from '@components/common'
import { LoginView } from '@components/auth'
import { useEffect, useState } from 'react'
import { useTimeout } from 'usehooks-ts'
import { useCustomer } from '@framework/customer'
import { useRouter } from 'next/router'

export default function Login() {
  const { push } = useRouter()

  const { data: isCustomerLoggedIn } = useCustomer()
  const [showLogin, setShowLogin] = useState(true)
  const [hideText, setHideText] = useState(false)

  const triggerShowLogin = () => setShowLogin(false)
  const triggerHideText = () => setHideText(true)

  useTimeout(triggerShowLogin, 1000)
  useTimeout(triggerHideText, 2000)

  useEffect(() => {
    if (isCustomerLoggedIn) {
      push('/dashboard')
    }
  }, [isCustomerLoggedIn])

  return (
    <div
      style={{
        backgroundImage: `url(/assets/images/bg-login.webp)`,
      }}
      className="flex min-h-screen justify-center items-center"
    >
      <div
        className={`absolute z-1 min-h-screen w-screen duration-1000 transition-all justify-center items-center bg-black/30 ${
          hideText ? '' : 'backdrop-grayscale'
        } `}
      />
      <div className="absolute">
        <div
          className={`text-5xl font-bold duration-1000 transition-all ${
            showLogin ? 'opacity-100' : 'opacity-0'
          }  ${hideText ? 'hidden' : ''}`}
        >
          Be Inspiring. #PathFinders
        </div>
        <div
          className={`duration-1000 transition-all delay-1000 bg-black/70 ${
            hideText ? '' : 'hidden'
          } ${showLogin ? 'opacity-0' : 'opacity-100'}`}
        >
          <LoginView />
        </div>
      </div>
    </div>
  )
}

Login.Layout = LayoutBlank
