import { Box, Button, Center, Flex, Text, Title, createStyles, rem } from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  titleBox: {
    paddingRight: 150,

    [theme.fn.smallerThan('xl')]: {
      paddingRight: 100,
    },

    [theme.fn.smallerThan('lg')]: {
      paddingRight: 100,
    },

    [theme.fn.smallerThan('md')]: {
      paddingRight: 100,
    },

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 100,
    },

    [theme.fn.smallerThan('xs')]: {
      paddingLeft: 20,
    },
  },

  title: {
    fontSize: 45,

    // [theme.fn.smallerThan('xl')]: {
    //   fontSize: 35,
    // },

    // [theme.fn.smallerThan('lg')]: {
    //   fontSize: 35,
    // },

    [theme.fn.smallerThan('md')]: {
      fontSize: 35,
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 35,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 30,
    },

    // ...theme.fn.hover({
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    // }),
  },

  subTitle: {
    fontSize: 30,

    // [theme.fn.smallerThan('xl')]: {
    //   fontSize: 35,
    // },

    // [theme.fn.smallerThan('lg')]: {
    //   fontSize: 35,
    // },

    [theme.fn.smallerThan('md')]: {
      fontSize: 30,
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 25,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 23,
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

export function Welcome() {
  const { classes, theme } = useStyles();
  const tablet = useMediaQuery('(max-width: 48em)');
  const mobile = useMediaQuery('(max-width: 30em)');

  return (
    <>
      {/* <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Mantine
        </Text>
      </Title> */}

      <Box className={classes.titleBox}>
        <Center h="60vh">
          <Box>
            <Title size={45} className={classes.title}>
              Hello, I&#39;m &nbsp;
              <Text component="span" c="blue.5">
                Ethan&nbsp;
                <Text component="span" display={tablet ? 'none' : 'inline'}>
                  Letourneau
                </Text>
              </Text>
            </Title>
            <Title mt={6} className={classes.subTitle} size="h1" fw={400}>
              Software Developer
            </Title>
            {/* <Group mt="xl" pl={5}>
              <Text c={theme.colorScheme === 'dark' ? 'dimmed' : 'dark.4'} fz="md" fw={400}>
                Explore
                <Anchor c={theme.colorScheme === 'dark' ? 'red.7' : 'red.7'}> My Work</Anchor>
              </Text>
              <Text c={theme.colorScheme === 'dark' ? 'dimmed' : 'dark.4'} fz="md" fw={400}>
                See
                <Anchor c={theme.colorScheme === 'dark' ? 'violet.7' : 'violet.7'}>
                  {' '}
                  My Skills
                </Anchor>
              </Text>
            </Group> */}

            <Flex mt="lg" gap="md">
              <Button
                size={mobile ? 'xs' : 'sm'}
                // fw={700}
                variant={theme.colorScheme === 'dark' ? 'outline' : 'filled'}
                c={theme.colorScheme === 'dark' ? 'indigo.6' : 'gray.0'}
                color="indigo.6"
              >
                My Skills
              </Button>
              <Button
                size={mobile ? 'xs' : 'sm'}
                // fw={700}
                c={theme.colorScheme === 'dark' ? 'teal.6' : 'gray.0'}
                variant={theme.colorScheme === 'dark' ? 'outline' : 'filled'}
                color="teal.6"
              >
                My Work
              </Button>
            </Flex>
          </Box>
        </Center>
      </Box>
    </>
  );
}
