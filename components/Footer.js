import { FaGithub, FaSlack, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Logo from "../img/image.svg";
import NextLink from "next/link";
import { Heading, Box, Text, Link, Container, Flex } from "@chakra-ui/react";

const resources = [
  { title: "WhitePaper", url: "#" },
  { title: "FAQs", url: "#" },
];

const foundation = [
  { title: "Contact", url: "#" },
  { title: "Job Opportunity", url: "#" },
];

const developers = [
  { title: "Documentation", url: "#" },
  { title: "Developer Guides", url: "#" },
];

const community = [
  { icon: <FaSlack />, url: "https://slack.com" },
  { icon: <FaTelegramPlane />, url: "https://telegram.com" },
  { icon: <FaTwitter />, url: "https://twitter.com" },
  { icon: <FaGithub />, url: "https://github.com" },
];

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <Container as="footer" maxWidth="8xl" bg="#FCF951" py="40px">
      <Flex gap="4" wrap="wrap">
        <Link href="/">
          <Image src={Logo} alt="celo" width={90} height="auto" />
        </Link>
        <NextLink href="/">
          <Heading as="h3" size="md" color="#1C1C1C">
            Africa DAO
          </Heading>
        </NextLink>
      </Flex>

      <Flex w="90%" mt="10" justifyContent="space-between" wrap="wrap" gap="5">
        <Box>
          <Heading as="h5" fontSize="xl" fontWeight="500">
            Resources
          </Heading>

          {resources.map((item, i) => (
            <Text fontSize="lg" fontWeight="300" key={i}>
              <Link>{item.title}</Link>
            </Text>
          ))}
        </Box>

        <Box>
          <Heading as="h5" fontSize="xl" fontWeight="500">
            Foundation
          </Heading>

          {foundation.map((item, i) => (
            <Text fontSize="lg" fontWeight="300" key={i}>
              <Link>{item.title}</Link>
            </Text>
          ))}
        </Box>

        <Box>
          <Heading as="h5" fontSize="xl" fontWeight="500">
            Developer
          </Heading>

          {developers.map((item, i) => (
            <Text fontSize="lg" fontWeight="300" key={i}>
              <Link>{item.title}</Link>
            </Text>
          ))}
        </Box>

        <Box>
          <Heading as="h5" fontSize="xl" fontWeight="500">
            Join the community
          </Heading>

          <Box display="flex">
            {community.map((item, i) => (
              <Text margin={2} fontSize="2xl" key={i}>
                <Link display="inline" href={item.url} isExternal>
                  {item.icon}
                </Link>
              </Text>
            ))}
          </Box>
        </Box>
      </Flex>

      <Flex justifyContent="space-between" wrap="wrap" mt="20" gap="5">
        <Text fontWeight="500" fontSize="lg">
          <Link href="#">Privacy Policy</Link>
        </Text>
        <Text fontWeight="500" fontSize="lg">
          &copy; {currentYear} Celo Inc.
        </Text>
        <Text fontWeight="500" fontSize="lg">
          <Link href="#">Terms of Service</Link>
        </Text>
      </Flex>
    </Container>
  );
};

export default Footer;
