import { Flex, Heading, Icon } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";

import ThemeToggle from "./ThemeToggle";

const Navbar = ({ title, goBack }: { title?: string; goBack?: () => void }) => (
  <Flex
    w="full"
    alignItems="center"
    justifyContent="space-between"
    boxShadow="lg"
  >
    <Flex py={3} px={5} w={12}>
      {goBack && (
        <Icon as={MdKeyboardBackspace} fontSize={20} onClick={goBack} />
      )}
    </Flex>
    <Heading pt={5} pb={4} as="h1" size="md">
      {title ?? null}
    </Heading>
    <Flex w={12}>
      <ThemeToggle />
    </Flex>
  </Flex>
);

export default Navbar;
