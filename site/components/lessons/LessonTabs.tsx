import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Text,
  Flex,
  Heading,
  useColorModeValue,
  TabPanel,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

import LessonContent from "./LessonContent";

const LessonTabs = ({
  components,
  title,
}: {
  components: Record<string, ReactNode>;
  title: string;
}) => {
  const selectedBorderBottomColor = useColorModeValue("black", "gray.100");
  const selectedColor = useColorModeValue("black", "gray.100");
  let keyIndex = 0;

  return (
    <Tabs isLazy variant="unstyled">
      <Heading as="h1" fontSize="2xl" mt={[5, 5, 0]}>
        {title}
      </Heading>
      <Flex justifyContent="space-between" w="full" overflow="auto" py={4}>
        <TabList>
          {Object.keys(components).map((header) => (
            <Tab
              key={header}
              color="gray.500"
              borderBottomWidth={1}
              borderBottomColor="gray.400"
              _selected={{
                fontWeight: 600,
                borderBottomWidth: 2,
                borderBottomColor: selectedBorderBottomColor,
                color: selectedColor,
              }}
            >
              <Text
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="widest"
                w={{
                  base: 12,
                  md: 20,
                }}
              >
                {header}
              </Text>
            </Tab>
          ))}
        </TabList>
      </Flex>
      <TabPanels>
        {Object.values(components).map(() => {
          keyIndex += 1;
          return (
            <TabPanel key={keyIndex}>
              <LessonContent />
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export default LessonTabs;
