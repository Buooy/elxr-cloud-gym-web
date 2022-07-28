import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import useCustomer from '@framework/customer/use-customer'

const LoggedInOnlyRoute: FC<{ requiredTags: string[] }> = ({
  children,
  requiredTags = [],
}) => {
  const { data: customer, isLoading } = useCustomer()
  const router = useRouter()

  const isUserLoggedIn = () => {
    return customer && customer?.email
  }

  const hasRequiredUserTags = () => {
    return (
      Array.isArray(customer.tags) &&
      requiredTags.every((tag) => customer.tags.includes(tag))
    )
  }

  useEffect(() => {
    if (!isLoading && (!isUserLoggedIn() || !hasRequiredUserTags())) {
      router.push('/login')
    }
  }, [customer, isLoading])

  return <>{children}</>
}

export default LoggedInOnlyRoute
