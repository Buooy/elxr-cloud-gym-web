/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import {
  Box,
  Text,
  Flex,
  Grid,
  Icon,
  useColorModeValue,
  Circle,
  Badge,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiPlayCircleLine } from "react-icons/ri";

const Workout = ({
  courseId,
  workouts,
}: {
  courseId: string | number;
  workouts: Record<string, any>[];
}) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const router = useRouter();
  const inactiveBorderBottomColor = useColorModeValue("gray.200", "gray.700");
  const activeColor = useColorModeValue("gray.700", "gray.100");
  const inactiveColor = useColorModeValue("gray.600", "gray.500");

  const currentDay = new Date().getDay();

  const goToCourse = (lessonId: string | number) => {
    router.push(`/courses/${courseId}/lessons/${lessonId}`);
  };

  return (
    <Grid>
      {workouts.map((workout, day) => {
        const { title, duration, lessonId } = workout;
        const isActive = day === currentDay;
        return (
          <Flex
            key={day}
            flexDirection="row"
            alignItems="center"
            py={4}
            borderBottomWidth={1}
            borderBottomColor={inactiveBorderBottomColor}
            onClick={() => goToCourse(lessonId)}
          >
            <Circle
              size="36px"
              bg={isActive ? "black" : "gray.400"}
              boxShadow={isActive ? "sm" : 0}
              color="white"
              mr={4}
            >
              <Text fontSize="xs" letterSpacing="wider">
                {weekdays[day]}
              </Text>
            </Circle>
            <Flex flexDirection="column">
              <Flex>
                <Text
                  fontSize="sm"
                  fontWeight={isActive ? 700 : 500}
                  color={isActive ? activeColor : inactiveColor}
                >
                  {title}
                </Text>
                {isActive && (
                  <Badge
                    ml="1"
                    colorScheme="green"
                    fontSize="0.5em"
                    lineHeight="2.5em"
                  >
                    Today
                  </Badge>
                )}
              </Flex>
              <Text
                fontSize="sm"
                fontWeight={isActive ? 600 : 400}
                color={isActive ? activeColor : inactiveColor}
              >
                {duration}
              </Text>
            </Flex>
            <Box flex="1" textAlign="right">
              <Icon
                as={RiPlayCircleLine}
                color={isActive ? activeColor : inactiveColor}
                fontSize={32}
              />
            </Box>
          </Flex>
        );
      })}
    </Grid>
  );
};

export default Workout;
