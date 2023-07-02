import { Anchor, Box, Center, Container, Group, Tooltip, createStyles } from '@mantine/core';

import { BiLogoLinkedin } from 'react-icons/bi';
import { GithubIcon } from '@mantine/ds';
import { SiGmail } from 'react-icons/si';
import { IoIosPaper } from 'react-icons/io';
import { useColorScheme, useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export function LinkFooter() {
  const { theme } = useStyles();

  // responsive styles
  const mobile = useMediaQuery('(max-width: 30em)');

  const colorScheme = useColorScheme();
  console.log(colorScheme);

  return (
    <Box bg={theme.colorScheme === 'dark' ? 'dark.8' : 'black'}>
      <Container size="lg" py="xs">
        <Center>
          <Group align="flex-end" spacing="lg">
            <Tooltip label="My Github" disabled={!!mobile}>
              <Anchor>
                <GithubIcon
                  color={theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.gray[2]}
                  size={mobile ? 24 : 33}
                  style={{ marginBottom: 3 }}
                />
              </Anchor>
            </Tooltip>
            <Tooltip label="My Linkedin" disabled={!!mobile}>
              <Anchor>
                <BiLogoLinkedin color={theme.colors.blue[7]} size={mobile ? 32 : 40} />
              </Anchor>
            </Tooltip>
            <Tooltip label="Email Me" disabled={!!mobile}>
              <Anchor>
                <SiGmail color={theme.colors.red[6]} size={mobile ? 24 : 33} />
              </Anchor>
            </Tooltip>
            <Tooltip label="My Resume" disabled={!!mobile}>
              <Anchor>
                <IoIosPaper
                  color={
                    theme.colorScheme === 'dark' ? theme.colors.yellow[5] : theme.colors.yellow[6]
                  }
                  size={mobile ? 24 : 33}
                />
              </Anchor>
            </Tooltip>
          </Group>
        </Center>
      </Container>
    </Box>
  );
}
