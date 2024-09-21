
import { ChakraProvider, Box, Flex, Text, Avatar, Stack } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box bg="gray.50" p={10}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
          Our Clients Speak
        </Text>
        <Text textAlign="center" color="gray.600" mb={8}>
          We have been working with clients around the world
        </Text>

        
        <Flex
          direction={["column", "column", "row"]} // Stack on small screens, row on larger screens
          justify="center"
          align="center"
          gap={6}
        >
          
          <Box
            bg="white"
            borderRadius="lg"
            p={6}
            boxShadow="lg"
            width={["100%", "80%", "30%"]} // Full width on small, narrow on large
          >
            <Text fontWeight="bold" mb={2}>
              Efficient Collaborating
            </Text>
            <Text color="gray.600" mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet
              nibh lectus feugiat nunc sem.
            </Text>
            <Flex align="center">
              <Avatar size="md" name="Jane Cooper" src="https://bit.ly/code-beast" mr={4} />
              <Stack spacing={0}>
                <Text fontWeight="bold">Jane Cooper</Text>
                <Text fontSize="sm" color="gray.500">
                  CEO at ABC Corporation
                </Text>
              </Stack>
            </Flex>
          </Box>

         
          <Box
            bg="white"
            borderRadius="lg"
            p={6}
            boxShadow="lg"
            width={["100%", "80%", "30%"]}
          >
            <Text fontWeight="bold" mb={2}>
              Intuitive Design
            </Text>
            <Text color="gray.600" mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet
              nibh lectus feugiat nunc sem.
            </Text>
            <Flex align="center">
              <Avatar size="md" name="Jane Cooper" src="https://bit.ly/code-beast" mr={4} />
              <Stack spacing={0}>
                <Text fontWeight="bold">Jane Cooper</Text>
                <Text fontSize="sm" color="gray.500">
                  CEO at ABC Corporation
                </Text>
              </Stack>
            </Flex>
          </Box>

        
          <Box
            bg="white"
            borderRadius="lg"
            p={6}
            boxShadow="lg"
            width={["100%", "80%", "30%"]}
          >
            <Text fontWeight="bold" mb={2}>
              Mindblowing Service
            </Text>
            <Text color="gray.600" mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet
              nibh lectus feugiat nunc sem.
            </Text>
            <Flex align="center">
              <Avatar size="md" name="Jane Cooper" src="https://bit.ly/code-beast" mr={4} />
              <Stack spacing={0}>
                <Text fontWeight="bold">Jane Cooper</Text>
                <Text fontSize="sm" color="gray.500">
                  CEO at ABC Corporation
                </Text>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
