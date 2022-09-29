import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { LayoutDashboard } from '@components/common'
import { Container, Marquee, Text } from '@components/ui'
import { ProductCard } from '@components/product'
import LoggedInOnlyRoute from '@components/common/AuthorisedRoute/LoggedInOnly'
import CommunityView from '@components/dashboard/community'
import { useRouter } from 'next/router'

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

export default function Dashboard({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useCustomer()
  const router = useRouter()

  return (
    <LoggedInOnlyRoute requiredTags={['pathfinder']}>
      <Container className="pt-4 pb-20">
        <Text variant="pageHeading">The Pathfinders</Text>
        <CommunityView />
      </Container>
      <div className="flex pt-4">
        <img src="/assets/images/tough.jpeg" />
        <Container className="absolute pt-4">
          <div className="bg-white px-10 py-10 w-1/2">
            <Text variant="pageHeading" className="text-black">
              Upcoming Onsite Training
            </Text>

            <div className="text-black text-lg font-medium pb-10">
              Theme: Pain is weakness leaving the body
            </div>

            <div className="text-black text-lg font-medium pb-12">
              10 Aug 2022, Monday @ 1000hrs - 1200hrs
              <br />
              <i>
                <b>The Company Line</b>
              </i>
            </div>

            <a
              href="#"
              className="mt-10 bg-gray-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            >
              Register Attendance
            </a>

            <a
              href="#"
              onClick={() => router.push('/dashboard/academy')}
              className="mt-10 ml-5 bg-gray-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            >
              Join Online
            </a>
          </div>
        </Container>
      </div>

      <Container className="pt-20 pb-4">
        <Text variant="pageHeading">Exclusively for #pathfinder</Text>
      </Container>

      <Marquee variant="secondary">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
    </LoggedInOnlyRoute>
  )
}

Dashboard.Layout = LayoutDashboard
