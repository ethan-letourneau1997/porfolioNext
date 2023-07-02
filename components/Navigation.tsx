import {
  Anchor,
  Box,
  Burger,
  Center,
  Container,
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
import { useRouter } from 'next/router';
import { SectionHeader } from './sectionHeader';

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

  const { asPath } = useRouter();

  const sectionTitle = asPath.replace(/\//g, '').charAt(0).toUpperCase() + asPath.slice(2);

  let headerDescription = '';

  if (asPath === '/projects') {
    headerDescription = 'Some of the projects I have made and the tools used.';
  } else if (asPath === '/skills') {
    headerDescription = 'The skills and technologies I am proficient in.';
  } else if (asPath === '/contact') {
    headerDescription = 'How to get in touch with me.';
  }

  return (
    <Box bg={theme.colorScheme === 'dark' ? 'transparent' : 'black'}>
      <Header
        bg={theme.colorScheme === 'dark' ? 'transparent' : 'black'}
        withBorder={false}
        height={70}
        px="md"
      >
        <Container size="lg" pt={20}>
          <Flex mx="2vw" justify="space-between" sx={{ height: '100%' }}>
            <Center>
              <Title c="white" size="h4">
                Ethan Letourneau
              </Title>
            </Center>
            <Box>
              <Group sx={{ height: '100%' }} spacing="xs" className={classes.hiddenMobile}>
                <Anchor
                  c="dark.0"
                  underline={false}
                  component={Link}
                  href="/"
                  className={`${classes.link} header-link`}
                >
                  Home
                </Anchor>
                <Anchor
                  c="dark.0"
                  underline={false}
                  component={Link}
                  href="/projects"
                  className={`${classes.link} header-link`}
                >
                  Projects
                </Anchor>
                <Anchor
                  c="dark.0"
                  underline={false}
                  component={Link}
                  href="/skills"
                  className={`${classes.link} header-link`}
                >
                  Skills
                </Anchor>

                <Anchor
                  c="dark.0"
                  underline={false}
                  component={Link}
                  href="/contact"
                  className={`${classes.link} header-link`}
                >
                  Contact
                </Anchor>

                {/* <ColorSchemeToggle /> */}
              </Group>
              <Group>
                <Box className={classes.hiddenDesktop}>{/* <ColorSchemeToggle /> */}</Box>
                <Burger
                  color="white"
                  opened={drawerOpened}
                  onClick={toggleDrawer}
                  className={classes.hiddenDesktop}
                />
              </Group>
            </Box>
          </Flex>
        </Container>
      </Header>
      {asPath !== '/' && <SectionHeader description={headerDescription} title={sectionTitle} />}

      <Drawer.Root
        className={classes.hiddenDesktop}
        opened={drawerOpened}
        onClose={closeDrawer}
        position="left"
        size="xl"
      >
        <Drawer.Content mt={60} bg={theme.colorScheme === 'dark' ? 'dark.8' : 'black'}>
          <Drawer.Body>
            {/* <Divider mb="md" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.5'} /> */}
            {/* <Center> */}
            <Stack fz="lg" pt="md" align="center" justify="center">
              <Box>
                <Anchor fz="lg" c="gray.0" component={Link} href="#" className={classes.link}>
                  Home
                </Anchor>
              </Box>
              <Box>
                <Anchor fz="lg" c="gray.0" component={Link} href="#" className={classes.link}>
                  Projects
                </Anchor>
              </Box>
              <Box>
                <Anchor fz="lg" c="gray.0" component={Link} href="#" className={classes.link}>
                  Skills
                </Anchor>
              </Box>

              <Box>
                <Anchor fz="lg" c="gray.0" component={Link} href="#" className={classes.link}>
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
