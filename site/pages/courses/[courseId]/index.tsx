import { Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { GiCalendar } from 'react-icons/gi'

import ButtonWithShadow from '@components/buttons/ButtonWithShadow'
import InstructorCard from '@components/instructors/InstructorCard'
import LayoutCourse from '@layout/Course'

const Course = () => {
  const router = useRouter()
  const { courseId } = router.query

  const course = {
    title: 'Lorem Lipsum',
    long_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien elit. Vivamus sapien lorem, molestie ac lacus eu, mollis tincidunt eros. Sed rhoncus eu ex id cursus. Nam varius ac risus cursus rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    featured_media: 'https://via.placeholder.com/900x450.webp',
  }

  const continueCourse = () => {
    router.push(`/courses/${courseId}/plan`)
  }

  return (
    <LayoutCourse title="Alpha: Murph">
      <Flex flexDirection="column">
        <Image src={course.featured_media} alt={course.title} />
      </Flex>
      <Flex flexDirection="column" px={3} pt={5}>
        <Heading pb={1}>{course.title}</Heading>
        <Flex>
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
        <Text fontSize="sm" py={4}>
          {course.long_description}
        </Text>

        <Heading>Instructors</Heading>
        <Flex w="full" overflow="scroll" py={5}>
          <Flex mr="5">
            <InstructorCard />
          </Flex>
          <Flex>
            <InstructorCard />
          </Flex>
        </Flex>

        <Flex pt={5}>
          <ButtonWithShadow w="full" onClick={continueCourse}>
            <Heading size="sm" letterSpacing="widest">
              START
            </Heading>
          </ButtonWithShadow>
        </Flex>
      </Flex>
    </LayoutCourse>
  )
}

export default Course
