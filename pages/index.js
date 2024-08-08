import { Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react";

export default function Page () {
  return (
    <Container>
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align='center' mt={4}>
        Hello, I&apos;m a full-stack developer based in Brazil! 
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Victor Frohlich
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align='center'>
          <Image 
            src="https://avatars.githubusercontent.com/frohlich71" 
            alt="Victor Frohlich profile picture"
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle='solid'
            maxWidth='100px'
            display='inline-block'
            borderRadius='full'

          />
        </Box>
      </Box>
    </Container>
  )
}