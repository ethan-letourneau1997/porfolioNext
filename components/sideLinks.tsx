import {
  Container,
  Center,
  Group,
  Tooltip,
  Anchor,
  useMantineTheme,
  Stack,
  Divider,
  Box,
} from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import { BiLogoLinkedin } from 'react-icons/bi';
import { IoIosPaper } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';

export default function SideLinks() {
  const theme = useMantineTheme();
  return (
    <Stack align="flex-start" justify="center" spacing="sm">
      <Tooltip label="My Github">
        <Anchor>
          <GithubIcon
            color={theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.dark[9]}
            size={25}
          />
        </Anchor>
      </Tooltip>
      <Tooltip label="My Linkedin">
        <Anchor ml={-3}>
          <BiLogoLinkedin color={theme.colors.blue[7]} size={32} />
        </Anchor>
      </Tooltip>
      <Tooltip label="Email Me">
        <Anchor>
          <SiGmail color={theme.colors.red[6]} size={25} />
        </Anchor>
      </Tooltip>

      <Tooltip label="My Resume">
        <Anchor>
          <IoIosPaper
            color={theme.colorScheme === 'dark' ? theme.colors.yellow[5] : theme.colors.yellow[6]}
            size={25}
          />
        </Anchor>
      </Tooltip>

      <Box pl={10}>
        <Divider orientation="vertical" size="md" h={40} />
      </Box>
    </Stack>
  );
}
