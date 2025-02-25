import { ChakraProvider, SlideFade } from "@chakra-ui/react";

import customTheme from "lib/styles/theme";

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return (
    <ChakraProvider theme={customTheme} cssVarsRoot={undefined}>
      <SlideFade in>{children}</SlideFade>
    </ChakraProvider>
  );
};
