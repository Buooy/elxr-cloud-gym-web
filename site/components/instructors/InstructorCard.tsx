import {
  Heading,
  Avatar,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SocialProfileSimple() {
  return (
    <Box
      w={230}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="xl"
      rounded="lg"
      py={6}
      px={3}
      textAlign="center"
    >
      <Avatar
        size="xl"
        src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        mb={4}
        pos="relative"
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: "green.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3,
        }}
      />
      <Heading fontSize="xl" fontFamily="body">
        Lindsey James
      </Heading>
      <Text
        textAlign="center"
        color={useColorModeValue("gray.700", "gray.400")}
        fontSize="xs"
        px={3}
      >
        Actress, musician, songwriter and artist. PM for work inquires.
      </Text>
    </Box>
  );
}
