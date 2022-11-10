import {
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { GiCalendar } from 'react-icons/gi'
import { IoPersonCircleSharp } from 'react-icons/io5'

import CourseWeeksTabs from '@components/courses/CourseWeeksTabs'
import LayoutCourse from '@layout/Course'

const CoursePlan = () => {
  const router = useRouter()
  const { courseId } = router.query

  const borderBottomColor = useColorModeValue('gray.200', 'gray.700')

  const course = {
    title: 'Alpha: Murph',
    long_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien elit. Vivamus sapien lorem, molestie ac lacus eu, mollis tincidunt eros. Sed rhoncus eu ex id cursus. Nam varius ac risus cursus rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    featured_media: 'https://via.placeholder.com/900x450.webp',
  }

  const goToCourseDetails = () => {
    router.push(`/courses/${courseId}`)
  }

  return (
    <LayoutCourse title="Plan" goBack={goToCourseDetails}>
      <Flex flexDirection="column">
        <Flex
          flexDirection="row"
          alignItems="center"
          borderBottomWidth={1}
          borderBottomColor={borderBottomColor}
          px={3}
          py={5}
        >
          <Image as={IoPersonCircleSharp} fontSize={50} mr={2} />
          <Flex flexDirection="column">
            <Heading pb={1} size="md">
              {course.title}
            </Heading>
            <Flex color={useColorModeValue('gray.600', 'gray.100')}>
              <Icon as={GiCalendar} />
              <Text
                fontSize="xs"
                style={{ fontWeight: 600 }}
                letterSpacing="wider"
                ml={2}
              >
                8 weeks
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex px={3} flexDirection="column">
          <Heading pt={5} pb={2} size="xs" letterSpacing="wider" hidden>
            WORKOUTS
          </Heading>
          <Flex py={5}>
            <CourseWeeksTabs />
          </Flex>
        </Flex>
      </Flex>
    </LayoutCourse>
  )
}

export default CoursePlan
