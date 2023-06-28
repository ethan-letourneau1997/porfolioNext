import {
  Anchor,
  Box,
  Burger,
  Container,
  Divider,
  Drawer,
  Flex,
  Group,
  Header,
  Stack,
  Title,
  createStyles,
  rem,
} from '@mantine/core';

import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.md,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    // ...theme.fn.hover({
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    // }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    // ...theme.fn.hover({
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    // }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

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

export function NavHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const { classes, theme } = useStyles();

  return (
    <Box>
      <Header bg="transparent" withBorder={false} height={60} px="md">
        <Container size="lg" pt="xl">
          <Flex justify="space-between" sx={{ height: '100%' }}>
            {/* <MantineLogo size={30} /> */}
            <Title size="h3">{/* Ethan Letourneau */}</Title>
            <Box>
              <Group sx={{ height: '100%' }} spacing={25} className={classes.hiddenMobile}>
                <Anchor
                  underline={false}
                  component={Link}
                  href="/"
                  className={classes.link}
                  sx={{
                    '&:hover': {
                      color: theme.colors.green[5],
                    },
                  }}
                >
                  Home
                </Anchor>

                <Anchor
                  underline={false}
                  component={Link}
                  href="/skills"
                  className={classes.link}
                  sx={{
                    '&:hover': {
                      color: theme.colors.blue[5],
                    },
                  }}
                >
                  Skills
                </Anchor>
                <Anchor
                  underline={false}
                  component={Link}
                  href="/projects"
                  className={classes.link}
                  sx={{
                    '&:hover': {
                      color: theme.colors.red[5],
                    },
                  }}
                >
                  Projects
                </Anchor>
                <Anchor
                  underline={false}
                  component={Link}
                  href="/about"
                  className={classes.link}
                  sx={{
                    '&:hover': {
                      color: theme.colors.violet[5],
                    },
                  }}
                >
                  About
                </Anchor>
                <Anchor
                  underline={false}
                  component={Link}
                  href="/contact"
                  className={classes.link}
                  sx={{
                    '&:hover': {
                      color: theme.colors.yellow[5],
                    },
                  }}
                >
                  Contact
                </Anchor>

                <ColorSchemeToggle />
              </Group>
              <Group>
                <Box className={classes.hiddenDesktop}>
                  <ColorSchemeToggle />
                </Box>
                <Burger
                  opened={drawerOpened}
                  onClick={toggleDrawer}
                  className={classes.hiddenDesktop}
                />
              </Group>
            </Box>
          </Flex>
        </Container>
      </Header>

      <Drawer.Root
        className={classes.hiddenDesktop}
        opened={drawerOpened}
        onClose={closeDrawer}
        position="right"
      >
        <Drawer.Content mt={60} bg={theme.colorScheme === 'dark' ? 'dark.8' : 'gray.2'}>
          <Drawer.Body>
            <Divider mb="md" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.5'} />
            {/* <Center> */}
            <Stack fz="lg" pt="md" align="center" justify="center">
              <Box>
                <Anchor fz="lg" component={Link} href="#" className={classes.link}>
                  Home
                </Anchor>
              </Box>
              <Box>
                <Anchor fz="lg" component={Link} href="#" className={classes.link}>
                  About
                </Anchor>
              </Box>
              <Box>
                <Anchor fz="lg" component={Link} href="#" className={classes.link}>
                  Skills
                </Anchor>
              </Box>
              <Box>
                <Anchor fz="lg" component={Link} href="#" className={classes.link}>
                  Projects
                </Anchor>
              </Box>
              <Box>
                <Anchor fz="lg" component={Link} href="#" className={classes.link}>
                  Contact
                </Anchor>
              </Box>
            </Stack>
            {/* </Center> */}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </Box>
  );
}
