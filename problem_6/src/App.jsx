import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Heading, Button, Input, Card } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider>
        <div>
        <Box p={4}>
          <Heading mb={4}>Chakra UI App</Heading>
          <Input placeholder="Enter something" mb={4} />
          <Button colorScheme="teal" mb={4}>Submit</Button>
          <Card>
            <Box p={4}>
               Chakra UI Card component!
            </Box>
          </Card>
        </Box>
        </div>
        <Button colorScheme="purple" size="lg" variant="outline">
          Click Me
        </Button>

      </ChakraProvider>

    </>
  )
}

export default App
