import { Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useWindowSize } from "usehooks-ts";

import BaseLayout from "../BaseLayout";
import Navbar from "../Navbar";

type LayoutProps = {
  children: ReactNode;
  title: string;
  goBack?: () => void;
};

const LayoutLesson = ({ children, title, goBack }: LayoutProps) => {
  const { height } = useWindowSize();
  return (
    <BaseLayout>
      <Flex w="full" flexDirection="column">
        <Navbar title={title} goBack={goBack} />
        <Flex flexDirection="column" h={height - (40 + 80)} overflow="auto">
          {children}
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default LayoutLesson;
