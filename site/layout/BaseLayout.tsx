import { Slide } from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";

type LayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const aniStart = () => {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 100);
    };
    const aniEnd = () => {
      setIsActive(false);
    };

    router.events.on("routeChangeStart", aniStart);
    // router.events.on("routeChangeComplete", aniEnd);
    router.events.on("routeChangeError", aniEnd);

    return () => {
      router.events.off("routeChangeStart", aniStart);
      // router.events.off("routeChangeComplete", aniEnd);
      router.events.off("routeChangeError", aniEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return <Slide in={!isActive}>{children}</Slide>;
};

export default BaseLayout;
