import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import LessonContent from '@components/lessons/LessonContent'
import LayoutLesson from '@layout/Lesson'

const Lesson = () => {
  const router = useRouter()
  const { courseId } = router.query

  return (
    <LayoutLesson
      title="HIIT - Part 1"
      goBack={() => router.push(`/courses/${courseId}/plan`)}
    >
      <Flex
        flexDirection="column"
        minHeight="70vh"
        py={{ base: 0, md: 5 }}
        px={{ base: 5, md: 10 }}
        w="full"
      >
        <LessonContent />
      </Flex>
    </LayoutLesson>
  )
}

export default Lesson
