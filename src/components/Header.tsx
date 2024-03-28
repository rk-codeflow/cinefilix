import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Spacer,
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box as="section" boxShadow="base">
      <Container maxW="1400">
        <Flex justifyContent="space-between" alignItems="center" height={20}>
          <Image
            width={50}
            cursor="pointer"
            src="/public/logo-1.png"
            alt="cineflixx logo"
          />
          <Spacer />
          <Flex gap={2} align="center">
            <Input placeholder="Search" />

            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
