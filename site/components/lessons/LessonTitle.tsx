import { Flex, Heading, Text } from "@chakra-ui/react";

const LessonTitle = ({
  title,
  instructorName,
}: // instructorUrl,
{
  title: string;
  instructorName: string;
  // instructorUrl?: string;
}) => {
  return (
    <Flex>
      <Heading as="h1" size="lg">
        {title}
      </Heading>
      <Flex flexDirection="column" alignSelf="flex-end" pl={2} pb={0}>
        <Text fontSize="sm">with {instructorName}</Text>
      </Flex>
    </Flex>
  );
};

export default LessonTitle;
