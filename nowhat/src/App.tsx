import { Box, Flex, HStack } from '@chakra-ui/react'

function App() {

  return (
    <Flex justifyContent={'center'} alignContent={"center"}>
      <HStack>
        <Box bgColor={"blue.100"}>
          <h1>World</h1>
        </Box>
        <Box bgColor={"red.100"}>
          <h1>Hello</h1>
        </Box>
      </HStack>
    </Flex>
  )
}

export default App
