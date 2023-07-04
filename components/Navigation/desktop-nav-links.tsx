import { Group, Anchor } from '@mantine/core';
import Link from 'next/link';
import useStyles from './navigation.styles';

export function DesktopNavLinks() {
  const { classes } = useStyles();
  return (
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
  );
}
