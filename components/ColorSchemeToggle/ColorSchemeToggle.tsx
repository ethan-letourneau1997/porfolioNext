import { ActionIcon, Box, Group, useMantineColorScheme } from '@mantine/core';

import { IconMoonFilled } from '@tabler/icons-react';

import { MdSunny } from 'react-icons/md';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? (
          <MdSunny size={20} />
        ) : (
          <Box c="violet.6">
            <IconMoonFilled size={20} />
          </Box>
        )}
      </ActionIcon>
    </Group>
  );
}
