import { Box, Button, Flex, HStack, Input, InputGroup, InputRightElement, VStack, Text } from '@chakra-ui/react'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Flex h='100vh'>
      <HStack w='100%'>
        <VStack w='50%' h={"full"} alignItems={"start"}>
          <Flex h={"13%"} paddingTop={"20px"} paddingLeft={"10px"}>
            <h1>NoWhat icon</h1>
          </Flex>
          <VStack w='100%' h={"82%"} alignItems={"center"} >
            <VStack alignItems={"start"}>
              <Text fontSize='5xl'>Welcome to NoWhat</Text>
              <Text color='grey' >welcome back! Please enter your login to sign up</Text>
              <Text>Login</Text>
              <Input placeholder='Write your Login' size='md' />
              <Text>Password</Text>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button bgColor={'blue.200'} w={"full"}>Login</Button>
              <Button w={"full"}> Registar</Button>
            </VStack>
            <h1>Forget your password? Click here!</h1>
          </VStack>
          <Flex h={"5%"} paddingLeft={"10px"}>
            <h1>NoWhat 2023</h1>
          </Flex>
        </VStack>

        <Box w='50%' h='100%' bgColor={"blue.100"}>
          <h1>Hello1</h1>
        </Box>
      </HStack>
    </Flex >

  )
}

export default App

