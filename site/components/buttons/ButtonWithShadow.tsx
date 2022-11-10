import type { ButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function ButtonWithShadow(props: ButtonProps) {
  const { children } = props;
  return (
    <Button
      {...props}
      px={4}
      py={6}
      fontSize="sm"
      rounded="full"
      bg="blue.400"
      color="white"
      boxShadow="0px 1px 25px -5px rgb(66 153 225 / 38%), 0 10px 10px -5px rgb(66 153 225 / 33%)"
      _hover={{
        bg: "blue.500",
      }}
      _focus={{
        bg: "blue.500",
      }}
    >
      {children}
    </Button>
  );
}
