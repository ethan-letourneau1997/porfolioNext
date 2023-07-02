import { Container } from '@mantine/core';

import { ContactForm } from '../../components/form/contactForm';

export default function Contact() {
  // theme
  // const theme = useMantineTheme();

  return (
    <Container size="lg" px="2vw" pt="xl">
      <ContactForm />

      {/* <Center pt="xl" mt={20}>
        <Card maw={500}>
          <Title align="center" size="h3">
            My Contact Info
          </Title>

          <Stack spacing="sm">
            <Flex align="center" gap={5}>
              <ThemeIcon size={28} bg="" radius="xl">
                <BiPhone size={20} />
              </ThemeIcon>
              <Anchor c="dark.6" fw={600} fz="md" href="tel:8044415738">
                (804)441-5738
              </Anchor>
            </Flex>
            <Flex align="center" gap={5}>
              <ThemeIcon variant="filled" bg="blue.5" c="red.6" size={40} radius="xl">
                <SiGmail size={25} />
              </ThemeIcon>
              <Anchor c="dark.6" fw={600} fz="md" href="mailto:ethan.michael.letourneau@gmail.com">
                ethan.michael.letourneau@gmail.com
              </Anchor>
            </Flex>
            <Flex align="center" gap={5}>
              <ThemeIcon bg="black" c="white.7" size={32} radius="xl">
                <BiLogoLinkedin size={20} />
              </ThemeIcon>
              <Anchor c="dark.6" fw={600} fz="md" href="mailto:ethan.michael.letourneau@gmail.com">
                ethan.michael.letourneau@gmail.com
              </Anchor>
            </Flex>
            <Flex align="center" gap={5}>
              <ImLinkedin color="#0077B5" size={30} />
              <Anchor c="dark.6" fw={600} fz="md" href="mailto:ethan.michael.letourneau@gmail.com">
                www.linkedin.com/in/ethan-letourneau
              </Anchor>
            </Flex>
            <Flex align="center" gap={5}>
              <SiGmail color={theme.colors.red[6]} size={30} />
              <Anchor fw={600} fz="md" href="mailto:ethan.michael.letourneau@gmail.com">
                ethan.michael.letourneau@gmail.com
              </Anchor>
            </Flex>
          </Stack>

          <Text fw="lg">
            Linkedin:{' '}
            <Anchor href="www.linkedin.com/in/ethan-letourneau">
              www.linkedin.com/in/ethan-letourneau
            </Anchor>
          </Text>
          <Title align="center" size="h3">
            My Links
          </Title>
          <Text fw="lg">
            Github:{' '}
            <Anchor href="https://github.com/ethan-letourneau1997">
              https://github.com/ethan-letourneau1997
            </Anchor>
          </Text>
          <Text fw="lg">
            Resume:
            <Anchor
              target="_blank"
              href="https://drive.google.com/file/d/12rbXGG4UlniWVrHgxqYtEC3FBE2lmHt5/view?usp=sharing"
            >
              https://drive.google.com/file/d/12rbXGG4UlniWVrHgxqYtEC3FBE2lmHt5/view?usp=sharing
            </Anchor>
          </Text>
        </Card>
      </Center> */}
    </Container>
  );
}
