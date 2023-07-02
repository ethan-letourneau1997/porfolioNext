import { Anchor, Box, Center, Container, Group, Tooltip, createStyles } from '@mantine/core';

import { BiLogoLinkedin } from 'react-icons/bi';
import { GithubIcon } from '@mantine/ds';
import { SiGmail } from 'react-icons/si';
import { IoIosPaper } from 'react-icons/io';
import { useColorScheme, useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';

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
          <Group align="flex-end" spacing="xl">
            <Tooltip label="My Github" disabled={!!mobile}>
              <Anchor
                component={Link}
                href="https://github.com/ethan-letourneau1997"
                target="_blank"
              >
                <GithubIcon
                  color={theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.gray[2]}
                  size={mobile ? 24 : 28}
                  style={{ marginBottom: 3 }}
                  name="Github Icon"
                />
              </Anchor>
            </Tooltip>
            <Tooltip label="My Linkedin" disabled={!!mobile}>
              <Anchor
                component={Link}
                href="https://linkedin.com/in/ethan-letourneau"
                target="_blank"
              >
                <BiLogoLinkedin
                  name="Linkedin Icon"
                  color={theme.colors.blue[7]}
                  size={mobile ? 32 : 34}
                />
              </Anchor>
            </Tooltip>
            <Tooltip label="Email Me" disabled={!!mobile}>
              <Anchor component={Link} href="mailto:ethan.michael.letourneau@gmail.com">
                <SiGmail color={theme.colors.red[6]} size={mobile ? 24 : 28} name="Gmail Icon" />
              </Anchor>
            </Tooltip>
            <Tooltip label="My Resume" disabled={!!mobile}>
              <Anchor
                component={Link}
                href="https://drive.google.com/file/d/12rbXGG4UlniWVrHgxqYtEC3FBE2lmHt5/view?usp=sharing"
                target="_blank"
              >
                <IoIosPaper
                  color={
                    theme.colorScheme === 'dark' ? theme.colors.yellow[5] : theme.colors.yellow[6]
                  }
                  size={mobile ? 24 : 28}
                  name="Document Icon"
                />
              </Anchor>
            </Tooltip>
          </Group>
        </Center>
      </Container>
    </Box>
  );
}
