import { Button, TextInput, Textarea, Title, useMantineTheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';

export function ContactForm() {
  // theme
  const theme = useMantineTheme();

  // form
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Logic for validating email field
    function isValidEmail(email: string) {
      // Basic email validation using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Validate email field
    const email = formData.get('email');
    if (!email || !isValidEmail(email as string)) {
      notifications.show({
        color: 'red',
        title: 'Error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    // Validate message field
    const message = formData.get('message');
    if (!message || (message as string).trim() === '') {
      // alert('Please enter a message.');
      notifications.show({
        color: 'red',
        title: 'Error',
        message: 'Please enter a message.',
      });
      return;
    }

    // If all fields are valid, proceed with form submission
    formData.append('access_key', '9ba70637-0c79-4f77-b7ab-926b0acde700');
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      notifications.show({
        title: 'Message Sent',
        message: 'Your message has been sent!',
      });

      // Clear the input fields
      (event.target as HTMLFormElement).reset();
    }
  }

  return (
    <>
      <Title fw={600} align="center" size="h4" mb="lg" c="dark.6">
        Send me a message!
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          withAsterisk
          mt="sm"
          label="Email"
          placeholder="your@email.com"
          type="email"
          name="email"
          styles={{
            label: {
              color: theme.colors.dark[4],
              paddingBottom: 5,
            },
            input: {
              '&:focus': {
                border: `1px solid ${theme.colors.dark[2]}`,
              },
            },
          }}
        />
        <Textarea
          mt="xl"
          placeholder="Hello, I am reaching out to..."
          label="Your message"
          withAsterisk
          autosize
          minRows={4}
          name="message"
          styles={{
            label: {
              color: theme.colors.dark[4],
              paddingBottom: 5,
            },
            input: {
              '&:focus': {
                border: `1px solid ${theme.colors.dark[2]}`,
              },
            },
          }}
        />
        <Button
          name="send message"
          variant="outline"
          color="dark.5"
          type="submit"
          mt="lg"
          miw={90}
          ml={2}
          fw={500}
          styles={{
            root: {
              '&:not([data-disabled])': theme.fn.hover({
                backgroundColor: theme.colors.dark[5],
                color: 'white',
              }),
            },
          }}
          sx={{
            '&:hover': {
              backgroundColor: theme.colors.dark[5],
            },
          }}
        >
          Send
        </Button>
      </form>
    </>
  );
}
