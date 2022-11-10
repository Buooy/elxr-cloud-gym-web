import {
  Center,
  Grid,
  GridItem,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GiHouse, GiRun, GiShop } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";

const Footer = () => {
  const router = useRouter();
  const { pathname } = router;

  const navItems = [
    {
      title: "Home",
      pathMatches: "home",
      icon: GiHouse,
      link: "/home",
    },
    {
      title: "Courses",
      pathMatches: "courses",
      icon: GiRun,
      link: "/courses/1/lessons/1",
    },
    {
      title: "Shop",
      pathMatches: "shop",
      icon: GiShop,
      link: "https://elxr.sg",
    },
    {
      title: "Profile",
      pathMatches: "profile",
      icon: IoPersonCircleOutline,
      link: "/profile",
    },
  ];

  const textColor = useColorModeValue("gray.400", "gray.600");
  const activeTextColor = useColorModeValue("gray.600", "gray.300");

  const goTo = (link: string) => {
    if (link.indexOf("http") === 0) window.location.href = link;
    else router.push(link);
  };

  return (
    <Grid
      as="footer"
      w="full"
      position="fixed"
      bottom="0"
      templateColumns="repeat(4, 1fr)"
      gap={2}
      borderTopWidth={1}
      borderTopColor={useColorModeValue("gray.100", "gray.700")}
      bg="chakra-body-bg"
    >
      {navItems.map((navItem) => (
        <GridItem
          key={navItem.title}
          w="100%"
          h="14"
          onClick={() => goTo(navItem.link)}
        >
          <Center
            h="full"
            flexDirection="column"
            color={
              pathname && pathname.indexOf(navItem.pathMatches) >= 0
                ? activeTextColor
                : textColor
            }
          >
            <Icon as={navItem.icon} mt={2} fontSize={20} />
            <Text fontSize="xs" style={{ fontWeight: 500 }}>
              {navItem.title}
            </Text>
          </Center>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Footer;
