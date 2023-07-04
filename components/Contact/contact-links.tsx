import { Box, Flex, Title } from '@mantine/core';
import { ImGithub } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';

import { ContactLinkIcon } from './contact-link-icon';
import { GmailIcon } from '../Icons/gmail-icon';

export default function ContactLinks() {
  return (
    <Box mx="auto" maw={320} pb={60}>
      <Title mt="lg" fw={600} align="center" size="h3">
        My Links
      </Title>
      <Flex mt="md" justify="space-between">
        <ContactLinkIcon
          hoverText="Call Me"
          icon={<BsTelephoneFill size={23} />}
          linkHref="tel:8044415738"
          bgColor="green.5"
          linkTitle="Opens your default call application to give me a phone call."
        />
        <ContactLinkIcon
          hoverText="Email Me"
          icon={<GmailIcon size={28} />}
          linkHref="mailto:ethan.michael.letourneau@gmail.com"
          bgColor="white"
          linkTitle="Opens your default email client to send me a message."
        />
        <ContactLinkIcon
          hoverText="My Linkedin"
          icon={<FaLinkedinIn size={26} />}
          linkHref="https://linkedin.com/in/ethan-letourneau"
          bgColor="blue.8"
          linkTitle="Opens my Linkedin in a new page."
        />
        <ContactLinkIcon
          hoverText="My GitHub"
          icon={<ImGithub size={33} />}
          linkHref="https://github.com/ethan-letourneau1997"
          bgColor="black"
          linkTitle="Opens my Github in a new page."
        />
      </Flex>
    </Box>
  );
}
