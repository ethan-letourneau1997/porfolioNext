import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

export function FormAlert() {
  return (
    <Alert icon={<IconAlertCircle size="1rem" />} title="Bummer!" color="pink" withCloseButton>
      Something terrible happened! You made a mistake and there is no going back, your data was lost
      forever!
    </Alert>
  );
}
