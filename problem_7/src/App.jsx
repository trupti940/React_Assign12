import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { ChakraProvider, Box, Flex, Avatar, Text, Button, Tag, TagLabel, Stack } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Flex justify="center" align="center" height="100vh">
        <Box
          maxW="sm"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          p={6}
          textAlign="center"
          bg="white"
        >
        
          <Avatar size="2xl" name="Lindsey James" src="https://bit.ly/sage-adebayo" mb={4} />

         
          <Text fontSize="2xl" fontWeight="bold">Lindsey James</Text>
          <Text color="gray.500">@lindsey_jam3s</Text>

         
          <Text mt={2}>
            Actress, musician, songwriter and artist. PM for work inquiries or <Text as="span" color="blue.500">#tag</Text> me in your posts.
          </Text>

          
          <Stack direction="row" spacing={4} mt={4} justify="center">
            <Tag size="lg" colorScheme="blue">
              <TagLabel>#ART</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="green">
              <TagLabel>#PHOTOGRAPHY</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="purple">
              <TagLabel>#MUSIC</TagLabel>
            </Tag>
          </Stack>

          
          <Flex mt={6} justify="center" gap={4}>
            <Button colorScheme="gray">Message</Button>
            <Button colorScheme="blue">Follow</Button>
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
