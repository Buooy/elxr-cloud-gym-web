import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import useCustomer from '@framework/customer/use-customer'
import { Container } from '@components/ui'

const UnauthorisedView = () => {
  return (
    <Container className="justify-center items-center flex h-80 text-4xl">
      You are not authorised to view this page
    </Container>
  )
}

export default UnauthorisedView
