import { Anchor, Box, Container, Flex, Paper, Title, Tooltip } from '@mantine/core';

import { ImGithub } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { ContactForm } from '../../components/form/contactForm';
import { GmailIcon } from '../../components/skillIcons/webdevIcons';

export default function Contact() {
  return (
    <Container size="lg" px="2vw" pt="xl" mt="md">
      <Paper maw={500} mx="auto" p="xl" shadow="md" radius="sm">
        <ContactForm />
      </Paper>

      <Box mx="auto" maw={320} pb={60}>
        <Title mt="lg" fw={600} align="center" size="h3">
          My Links
        </Title>
        <Flex mt="md" justify="space-between">
          <Tooltip label="Call Me">
            <Anchor href="tel:8044415738">
              <Paper
                h={40}
                w={40}
                shadow="xs"
                bg="green.5"
                c="white"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BsTelephoneFill size={23} />
              </Paper>
            </Anchor>
          </Tooltip>
          <Tooltip label="Email Me">
            <Anchor href="mailto:ethan.michael.letourneau@gmail.com">
              <Paper
                h={40}
                w={40}
                bg="white"
                shadow="xs"
                c="green.7"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GmailIcon size={28} />
              </Paper>
            </Anchor>
          </Tooltip>
          <Tooltip label="My Linkedin">
            <Anchor href="https://linkedin.com/in/ethan-letourneau" target="_blank">
              <Paper
                h={40}
                w={40}
                bg="blue.8"
                shadow="xs"
                c="white"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaLinkedinIn size={26} />
              </Paper>
            </Anchor>
          </Tooltip>
          <Tooltip label="My GitHub">
            <Anchor href="https://github.com/ethan-letourneau1997" target="_blank">
              <Paper
                h={40}
                w={40}
                bg="black"
                shadow="xs"
                c="white"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ImGithub size={33} />
              </Paper>
            </Anchor>
          </Tooltip>
        </Flex>
      </Box>
    </Container>
  );
}
