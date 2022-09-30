import {
  Center,
  Icon,
  Text,
  Box,
  Flex,
  SimpleGrid,
  Square,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import type { StreamPlayerApi } from "@cloudflare/stream-react";
import { Stream } from "@cloudflare/stream-react";
import { useEffect, useRef, useState } from "react";
import { GiBackwardTime, GiLevelEndFlag, GiRun } from "react-icons/gi";

import ButtonWithShadow from "../buttons/ButtonWithShadow";

const LessonContent = () => {
  const videoIdOrSignedUrl = "6c73173f22245f7745648313248fba8a";
  const streamRef = useRef<StreamPlayerApi | undefined>();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const stream = streamRef.current;
    if (stream) {
      if (!isPlaying) {
        stream.play();
      } else stream.pause();
    }
  };

  useEffect(() => {
    streamRef.current?.addEventListener("play", () => {
      setIsPlaying(true);
    });
    streamRef.current?.addEventListener("pause", () => {
      setIsPlaying(false);
    });
  }, [streamRef]);

  return (
    <Flex
      mt={8}
      flexDirection={{
        base: "column-reverse",
        md: "row",
      }}
    >
      <Flex
        flexDirection="column"
        flex="1"
        pr={[0, 0, 0, 10]}
        justifyContent="space-between"
      >
        <Flex w="full">
          <SimpleGrid
            flex="1"
            w="full"
            columns={3}
            spacing={6}
            py={2}
            my={4}
            borderRadius={10}
            bg={useColorModeValue("gray.200", "blue.900")}
          >
            <Square flexDirection="column">
              <Icon as={GiLevelEndFlag} h={7} w={7} my={2} />
              <Heading size="sm">Intensity</Heading>
              <Text fontSize="sm">Novice</Text>
            </Square>
            <Square flexDirection="column">
              <Icon as={GiRun} h={7} w={7} my={2} />
              <Heading size="sm">Type</Heading>
              <Text fontSize="sm">Cardio</Text>
            </Square>
            <Square flexDirection="column">
              <Icon as={GiBackwardTime} h={7} w={7} my={2} />
              <Heading size="sm">Duration</Heading>
              <Text fontSize="sm">30 Mins</Text>
            </Square>
          </SimpleGrid>
        </Flex>
        <Flex flexDirection="column">
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue erat sit amet nisl auctor semper. Quisque iaculis, diam nec
            blandit aliquet, risus libero lacinia tortor, et tristique ex est
            non ipsum.
            <br />
            <br />
            Aliquam rutrum massa sed arcu sodales, eget convallis neque
            faucibus. Donec lacus mauris, scelerisque at nibh vitae, aliquam
            varius magna. Aenean quis est sagittis, sagittis nulla quis, aliquam
            enim.
          </Text>
        </Flex>
      </Flex>
      <Box flex="2">
        <Stream controls src={videoIdOrSignedUrl} streamRef={streamRef} />
      </Box>
      <Center position="fixed" bottom={5} left={0} w="full" px={5}>
        <ButtonWithShadow w="full" onClick={togglePlay}>
          <Heading size="sm" letterSpacing="widest">
            {isPlaying ? "PAUSE" : "START"}
          </Heading>
        </ButtonWithShadow>
      </Center>
    </Flex>
  );
};

export default LessonContent;
