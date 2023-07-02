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
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[9],
          '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.colors.yellow[2] : theme.colors.violet[2],
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[9],
          },
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.violet[4],
        })}
      >
        {colorScheme === 'dark' ? (
          <MdSunny size={23} />
        ) : (
          <Box>
            <IconMoonFilled size={23} />
          </Box>
        )}
      </ActionIcon>
    </Group>
  );
}
