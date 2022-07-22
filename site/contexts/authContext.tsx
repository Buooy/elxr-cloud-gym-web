import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import useCustomer from '@framework/customer/use-customer'

type Context = {
  isAuthorised: boolean | null
}

const AuthContext = createContext<Context>({
  isAuthorised: false,
})

const AuthContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isAuthorised, setIsAuthorised] = useState<boolean | null>(null)
  const { data } = useCustomer()

  useEffect(() => {
    const requiredTags = ['pathfinder']
    data &&
      setIsAuthorised(requiredTags.every((tag) => data.tags.includes(tag)))
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthorised,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthContextProvider
