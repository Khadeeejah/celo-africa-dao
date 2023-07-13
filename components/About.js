import {
  Flex,
  Heading,
  Text,
  Container,
  chakra,
  shouldForwardProp,
  Box,
  Button,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import Image from "next/image";
import Coin from "../img/coin.svg";
import Friend from "../img/friend.svg";
import Feed from "../img/feedback.svg";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const About = () => {
  return (
    <Container as="section" maxW="8xl" bg="#FBF6F1" py="20px" px="15px">
      <Box
        wrap={{ base: "wrap" }}
        display="flex"
        gap={8}
        justifyContent="center"
        alignItems="center"
        mt="20px"
      >
        <ChakraBox
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          display={["none", "none", "flex", "flex"]}
        >
          <Image src={Coin} />
        </ChakraBox>

        <Flex as="div" gap={3} justifyContent="flex-start" flexDir="column" width="700px"
        >
          <Heading as="h2" fontSize="22px">
            What is Celo Africa DAO?
          </Heading>

          <Text fontSize="16px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>

          <Text fontSize="16px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>
        </Flex>
      </Box>
      <Box
         wrap={{ base: "wrap" }}
        display="flex"
        gap={8}
        justifyContent="center"
        alignItems="center"
        mt="20px"

      >
        <Flex as="div" gap={3} justifyContent="flex-start" flexDir="column" width="700px">
          <Heading as="h2" fontSize="22px">
            How does the DAO work?
          </Heading>

          <Text fontSize="16px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>
          <Text fontSize="16px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>
        </Flex>

        <ChakraBox display={["none", "none", "flex", "flex"]}>
          <Image src={Friend} />
        </ChakraBox>
      </Box>

      <Box
         wrap={{ base: "wrap" }}
        display="flex"
        gap={8}
        justifyContent="center"
        alignItems="center"
        mt="20px"
      >
        <ChakraBox display={["none", "none", "flex", "flex"]}>
          <Image src={Feed} />
        </ChakraBox>

        <Flex as="div" gap={3} justifyContent="flex-start" flexDir="column" width="700px">
          <Heading as="h2" fontSize="22px">
            How to be a part of the DAO?
          </Heading>

          <Text fontSize="16px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>
          <Text fontSize="16px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>

          <Button
            rightIcon={<ArrowForwardIcon />}
            bg="#FCF951"
            width="150px"
            borderRadius="15px"
          >
            <Link href="/">Join the DAO</Link>
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default About;
