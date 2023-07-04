import { Burger, Drawer, Stack, Box, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import useStyles from './navigation.styles';

export function MobileNavDrawer() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const { classes } = useStyles();
  return (
    <>
      <Burger
        aria-label="Open Navigation"
        color="white"
        opened={drawerOpened}
        onClick={toggleDrawer}
        className={classes.hiddenDesktop}
      />
      <Drawer.Root
        className={classes.hiddenDesktop}
        opened={drawerOpened}
        onClose={closeDrawer}
        position="left"
        size="xl"
      >
        <Drawer.Content mt={60} bg="black">
          <Drawer.Body>
            <Stack fz="lg" pt="md" align="center" justify="center">
              <Box>
                <Anchor
                  fz="lg"
                  c="gray.0"
                  component={Link}
                  href="/"
                  className={classes.link}
                  onClick={closeDrawer}
                >
                  Home
                </Anchor>
              </Box>
              <Box>
                <Anchor
                  fz="lg"
                  c="gray.0"
                  component={Link}
                  href="/projects"
                  className={classes.link}
                  onClick={closeDrawer}
                >
                  Projects
                </Anchor>
              </Box>
              <Box>
                <Anchor
                  fz="lg"
                  c="gray.0"
                  component={Link}
                  href="/skills"
                  className={classes.link}
                  onClick={closeDrawer}
                >
                  Skills
                </Anchor>
              </Box>

              <Box>
                <Anchor
                  fz="lg"
                  c="gray.0"
                  component={Link}
                  href="/contact"
                  className={classes.link}
                  onClick={closeDrawer}
                >
                  Contact
                </Anchor>
              </Box>
            </Stack>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}
