import Head from 'next/head'
import Preloader from '../components/Preloader/preloader'
import Timer from '../components/Countdown/Timer'
import { Box } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import '../styles/styles.css'

export default function Home() {
  return (
    <>
      <Head>
        <title> CELO AFRICA DAO </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        h="100vh"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, pink.200, blue.500)',
          'linear(to-b, gray.600, yellow.400, blue.600)',
        ]}
      >
        <Heading
          lineHeight="tall"
          textAlign={['left', 'center']}
          fontSize={{ base: '65px', md: '100px', lg: '150px' }}
          paddingTop={'300'}
          fontFamily={'fantasy'}
          color={'gray.600'}
        >
          CELO AFRICA DAO
        </Heading>
        <Text
          mt={{ base: '6', md: 'hidden', lg: '6' }}
          color={'gray.300'}
          fontWeight="bold"
          textAlign={['left', 'center']}
        >
          Coming Soon....
        </Text>
        <Timer />
        <Preloader />
      </Box>
    </>
  )
}
