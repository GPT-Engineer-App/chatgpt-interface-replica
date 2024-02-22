import * as React from "react";
import { Box, Button, Container, Heading, Stack, Text, Image, chakra, VStack, FormControl, FormLabel, Input, HStack, Icon } from "@chakra-ui/react";
import { FaUserCircle, FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py="12">
      <Stack spacing="8">
        <Box textAlign="center">
          <Heading>Welcome to Our Website</Heading>
          <Text mt="4">Get started by signing in or creating an account.</Text>
        </Box>
        <Box p="8" borderWidth="1px" borderRadius="lg">
          <chakra.form>
            <VStack spacing="5">
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <HStack>
                  <Input placeholder="Enter your email" />
                  <Icon as={FaEnvelope} w={5} h={5} selfAlign="center" />
                </HStack>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <HStack>
                  <Input type="password" placeholder="Enter your password" />
                  <Icon as={FaLock} w={5} h={5} selfAlign="center" />
                </HStack>
              </FormControl>
              <Button leftIcon={<FaSignInAlt />} colorScheme="blue" w="full">
                Sign In
              </Button>
            </VStack>
          </chakra.form>
        </Box>
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcwODU5OTU3NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Employee Portrait" />
          <Text mt="4">Join our team of professionals!</Text>
          <Button mt="4" leftIcon={<FaUserCircle />} colorScheme="green">
            Create Account
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
