import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Text,
  Flex,
  useColorModeValue,
  TabPanel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import weeks from "./data.sample";
import Workout from "./Workouts";

const CourseWeeksTabs = () => {
  const router = useRouter();
  const { courseId } = router.query;

  const selectedBorderBottomColor = useColorModeValue("black", "gray.100");
  const selectedColor = useColorModeValue("black", "gray.100");

  return (
    <Tabs isLazy variant="unstyled" w="full">
      <Flex justifyContent="space-between" w="full" overflow="auto">
        <TabList>
          {Object.keys(weeks).map((header) => (
            <Tab
              key={header}
              color="gray.500"
              borderBottomWidth={1}
              borderBottomColor="gray.400"
              px={2}
              _selected={{
                fontWeight: 600,
                borderBottomWidth: 2,
                borderBottomColor: selectedBorderBottomColor,
                color: selectedColor,
              }}
            >
              <Text
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="widest"
                w={{
                  base: 16,
                  md: 24,
                }}
              >
                {header}
              </Text>
            </Tab>
          ))}
        </TabList>
      </Flex>
      <TabPanels>
        {Object.keys(weeks).map((day) => {
          const weeklyWorkouts = weeks[day];

          return (
            <TabPanel key={day} px={0}>
              <Workout workouts={weeklyWorkouts} courseId={String(courseId)} />
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export default CourseWeeksTabs;
