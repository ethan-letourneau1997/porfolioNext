import { Container, Paper } from '@mantine/core';
import { ContactForm } from './contact-form';

import ContactLinks from './contact-links';

export default function ContactPage() {
  return (
    <Container size="lg" px="2vw" pt="xl" mt="md">
      <Paper maw={550} mx="auto" p="xl" shadow="md" radius="sm">
        <ContactForm />
      </Paper>

      <ContactLinks />
    </Container>
  );
}
