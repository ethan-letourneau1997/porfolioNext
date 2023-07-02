import { Box, Container, Flex, Paper, Title } from '@mantine/core';
import { ImGithub } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { ContactForm } from '../../components/contact/contactForm';
import { GmailIcon } from '../../components/skillIcons/webdevIcons';
import { LinkIcon } from '../../components/contact/linkIcon';

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
          <LinkIcon
            hoverText="Call Me"
            icon={<BsTelephoneFill size={23} />}
            linkHref="tel:8044415738"
            bgColor="green.5"
          />
          <LinkIcon
            hoverText="Email Me"
            icon={<GmailIcon size={28} />}
            linkHref="mailto:ethan.michael.letourneau@gmail.com"
            bgColor="white"
          />
          <LinkIcon
            hoverText="My Linkedin"
            icon={<FaLinkedinIn size={26} />}
            linkHref="https://linkedin.com/in/ethan-letourneau"
            bgColor="blue.8"
          />
          <LinkIcon
            hoverText="My GitHub"
            icon={<ImGithub size={33} />}
            linkHref="https://github.com/ethan-letourneau1997"
            bgColor="black"
          />
        </Flex>
      </Box>
    </Container>
  );
}
