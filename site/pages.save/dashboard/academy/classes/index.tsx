import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { LayoutDashboard } from '@components/common'
import { Container, Text } from '@components/ui'
import LoggedInOnlyRoute from '@components/common/AuthorisedRoute/LoggedInOnly'
import classes from '@lib/api/class'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise

  return {
    props: { products, pages, categories },
  }
}

export default function Classes({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useCustomer()

  return (
    <LoggedInOnlyRoute requiredTags={['pathfinder']}>
      <Container className="pt-4 pb-20">
        <Text variant="heading">Day #20 - HIIT Cardio</Text>

        <div className="grid grid-flow-col auto-cols-auto w-full">
          <div className="grid grid-flow-col auto-cols-auto w-72">
            <div className="col inline-block h-20 w-20 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear">
              <img src={`https://joeschmoe.io/api/v1/steffan`} />
            </div>
            <div className="col text-xl items-center">
              Cardio with Steffan
              <div className="text-sm text-gray-400">
                High Intensity - 30 mins
              </div>
            </div>
          </div>
          <div className="col text-xl text-right">
            What do you need: <a href="#">Ruck</a>
          </div>
        </div>
      </Container>

      <Container className="pt-4 pb-20">
        <iframe
          width="1239"
          height="697"
          src="https://www.youtube.com/embed/PFK9eQqdmuU"
          title="2022 High Intensity Full body TABATA [20m]"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </LoggedInOnlyRoute>
  )
}

Classes.Layout = LayoutDashboard
