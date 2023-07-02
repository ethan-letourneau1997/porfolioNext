import { Title, Text, Stack, Image, Box, Center, Flex, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function About() {
  // styles
  const mobile = useMediaQuery('(max-width: 30em)');
  const tablet = useMediaQuery('(max-width: 48em)');

  return (
    <Box>
      <Flex
        mt="xl"
        pt="xl"
        gap={tablet ? 'xl' : 70}
        justify="center"
        align={tablet ? 'center' : ''}
        direction={tablet ? 'column' : 'row'}
      >
        <Box ml="xl" mt={tablet ? 0 : 'md'}>
          <Center>
            <Box w={200}>
              <Image radius="50%" src="/headshot.png" />
            </Box>
          </Center>
          <Title w={240} align="center" mt="md" fw={600} size={mobile ? 26 : 26}>
            Ethan Letourneau
          </Title>
          <Center>
            <Button name="view resume" c="indigo.2s" variant="subtle">
              My Resume
            </Button>
          </Center>
        </Box>

        <Stack fz={mobile ? 'md' : 'md'} mt={tablet ? 0 : 'md'}>
          <Text w={tablet ? '100' : '80%'}>
            A recent graduate with a Bachelor&apos;s degree in Business Administration and a
            Master&apos;s degree in Information Technology. I am passionate about coding and
            creating websites and applications that are clean, efficient, and user-friendly.
          </Text>
          <Text w={tablet ? '100' : '80%'}>
            I have experience working with various technologies, such as Django, Next.js, Python,
            React, TypeScript, REST APIs, and database design and implementation. I also have
            experience working with a client to create a website that met their needs and
            expectations. I believe in making good design and development accessible to everyone,
            and I strive to make my work intuitive and user-friendly.
          </Text>
          <Text w={tablet ? '100' : '80%'}>
            During my free time, I enjoy experimenting with new technologies and working on personal
            projects. As a developer, I am always seeking new challenges and opportunities to learn
            and grow.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}
