import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { LayoutClass } from '@components/common'
import { Container, Text } from '@components/ui'
import LoggedInOnlyRoute from '@components/common/AuthorisedRoute/LoggedInOnly'
import classes from '@lib/api/class'
import { useRouter } from 'next/router'
import { TrainingClass } from '@lib/data/training'

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

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const paths = classes.map((_class) => {
    return {
      params: {
        id: _class.id,
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export default function ClassSingle({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { data } = useCustomer()
  const { id } = router.query

  const trainingClass: TrainingClass | undefined = classes.find(
    (_class) => _class.id === id
  )

  if (!trainingClass) return null

  const {
    title,
    featuredImage,
    description,
    video,
    intensity,
    level,
    duration,
    type,
    instructor,
    equipment,
  } = trainingClass

  return (
    <LoggedInOnlyRoute requiredTags={['pathfinder']}>
      <div
        className="bg-purple-500 -mt-16"
        style={{ backgroundImage: `url(${featuredImage})` }}
      >
        <Container className="py-32">
          <Text variant="classHeading">{title}</Text>
          <div className="grid">
            <div className="col inline-block h-14 w-14 mr-6 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear">
              <img src={`https://joeschmoe.io/api/v1/steffan`} />
            </div>
            <div className="flex col h-14 items-center align-center">
              <div className="flex flex-col">
                <div className="text-xl">
                  {type} with {instructor}
                </div>
                <div className="text-accent-5">
                  {intensity} - {duration}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-10">
        <div dangerouslySetInnerHTML={{ __html: video.html }} />
      </Container>

      <Container className="pt-10">
        <div className="grid grid-cols-2 gap-16">
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className="grid grid-cols-3 gaps-16 text-center">
            <div>
              <div className="text-xl font-medium">Intensity</div>
              <div className="text-lg text-accent-5">{intensity}</div>
            </div>
            <div>
              <div className="text-xl font-medium">Level</div>
              <div className="text-lg text-accent-5">{level}</div>
            </div>
            <div>
              <div className="text-xl font-medium">Type</div>
              <div className="text-lg text-accent-5">{type}</div>
            </div>
            <div>
              <div className="text-xl font-medium">Instructor</div>
              <div className="text-lg text-accent-5">{instructor}</div>
            </div>
            <div>
              <div className="text-xl font-medium">Duration</div>
              <div className="text-lg text-accent-5">{duration}</div>
            </div>
          </div>
        </div>
      </Container>
    </LoggedInOnlyRoute>
  )
}

ClassSingle.Layout = LayoutClass
