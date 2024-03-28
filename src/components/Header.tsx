import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Input,
  Spacer,
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box as="section" bg="purple.600">
      <Container maxW="1400">
        <Flex justifyContent="space-between" alignItems="center" height={20}>
          <Heading as="h3">Logo</Heading>
          <Spacer />
          <Flex gap={2} align="center">
            <Input placeholder="Basic usage" />

            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
