import {
  Box,
  Flex,
  Link,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
  Spacer,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../img/celo.svg";
import NextLink from "next/link";
// import {FiMenu} from 'react-icons/fi'
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const navList = [
  { title: "DAO Proposals", path: "/" },
  { title: "About", path: "/" },
  { title: "Blog", path: "/" },
  { title: "Team", path: "/" },
  { title: "FAQs", path: "/" },
];

export default function Navbar() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [toggle, setToggle] = useState(false);

  return (
    <Flex as="nav" bg="#E6E3D5" flexDir="column" >
      <Flex as="div" justifyContent="center" alignItems="center" p="20px" left="0" top='0' zIndex="20">
        <HStack>
          <Link href="/">
            <Image src={Logo} alt="celo" width={70} height="auto" />
          </Link>

          <Heading as="h3" size="sm">
            <NextLink href="/home" passHref>
              Africa DAO
            </NextLink>
          </Heading>
        </HStack>

        <Spacer />

        <HStack spacing="20">
          {navList.map((item, index) => (
            <Box key={index} display={["none", "none", "none", "flex"]}>
              <Link href={item.path}>{item.title}</Link>
            </Box>
          ))}

          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            display={["flex", "flex", "flex", "none"]}
            aria-label="Open Menu"
            onClick={() => setToggle(true)}
          />
        </HStack>
      </Flex>

      {toggle && (
        <VStack
          as="div"
          flexDir="column"
          align="center"
          w="100vw"
          bg="#E6E3D5"
          h="100vh"
          pos="fixed"
          spacing="50px"
          p="50px"
          display={["flex", "flex", "flex", "none"]}
          zIndex="10"
        >
          <IconButton
            size="md"
            icon={<CloseIcon />}
            aria-label={"Close Menu"}
            onClick={() => setToggle(false)}
          />
          {navList.map((item, index) => (
            <Box key={index}>
              <Link href={item.path}>{item.title}</Link>
            </Box>
          ))}
        </VStack>
      )}
    </Flex>
  );
}
