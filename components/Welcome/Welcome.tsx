import {
  Anchor,
  Box,
  Center,
  Container,
  Flex,
  Stack,
  Text,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import { Raleway } from 'next/font/google';

import { useMediaQuery } from '@mantine/hooks';

import ethanHeadshot from '../../public/headshot.png';

const raleway = Raleway({ subsets: ['latin'] });

const useStyles = createStyles((theme) => ({
  preTitle: {
    fontSize: 20,
    lineHeight: '24px',
    paddingBottom: '5px',

    [theme.fn.smallerThan('md')]: {
      fontSize: 18,
      lineHeight: '24px',
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 16,
      lineHeight: '24px',
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  },

  title: {
    fontFamily: raleway.style.fontFamily,
    fontSize: 50,
    lineHeight: '60px',

    [theme.fn.smallerThan('lg')]: {
      fontSize: 46,
      lineHeight: '48px',
    },

    [theme.fn.smallerThan('md')]: {
      fontSize: 43,
      lineHeight: '45px',
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: '42px',
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 37,
      lineHeight: '39px',
    },
    [theme.fn.smallerThan('25em')]: {
      fontSize: 35,
      lineHeight: '37px',
    },
  },

  subTitle: {
    marginTop: 5,
    fontSize: 22,
    lineHeight: '24px',

    [theme.fn.smallerThan('lg')]: {
      marginTop: 15,
      fontSize: 22,
      lineHeight: '24px',
    },

    [theme.fn.smallerThan('md')]: {
      marginTop: 15,
      fontSize: 18,
      lineHeight: '20px',
    },

    [theme.fn.smallerThan('sm')]: {
      marginTop: 15,
      fontSize: 18,
      lineHeight: '20px',
    },

    [theme.fn.smallerThan('xs')]: {
      marginTop: 15,
      fontSize: 18,
      lineHeight: '20px',
    },
    [theme.fn.smallerThan('25em')]: {
      marginTop: 15,
      fontSize: 16,
      lineHeight: '24px',
    },
  },

  postTitle: {
    marginTop: 20,
    fontSize: 18,
    lineHeight: '27px',

    [theme.fn.smallerThan('md')]: {
      fontSize: 16,
      lineHeight: '24px',
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 16,
      lineHeight: '24px',
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 16,
      lineHeight: '24px',
    },

    [theme.fn.smallerThan('25em')]: {
      fontSize: 14,
      lineHeight: '24px',
    },
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
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

  summary: {
    marginTop: 30,
    [theme.fn.smallerThan('md')]: {
      marginTop: 15,
    },

    [theme.fn.smallerThan('sm')]: {
      marginTop: 15,
    },

    [theme.fn.smallerThan('xs')]: {
      marginTop: 20,
    },
  },
}));

export function Welcome() {
  const { classes, theme } = useStyles();

  // responsive styles
  const mobile = useMediaQuery('(max-width: 30em)');
  const tablet = useMediaQuery('(max-width: 48em)');

  const headshot = '/headshot.png';

  return (
    <>
      <Box bg="black" pb={80} pt={50}>
        <Container size="lg">
          <Center>
            <Flex direction="column" align="center">
              <Box
                style={{ backgroundImage: `url(${ethanHeadshot})` }}
                display="inline-block"
                pos="relative"
                w={150}
                h={150}
                sx={{
                  backgroundColor: 'red',
                  borderRadius: '50%',
                  backgroundImage: `url(${headshot})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundPositionX: -5,
                  WebkitBackgroundSize: 175,
                }}
              />
              <Title
                // ff="inter"
                mt="md"
                c="white"
                ml="-.3vw"
                align="start"
                fw={theme.colorScheme === 'dark' ? 500 : 600}
                className={classes.title}
              >
                Hi, I&apos;m Ethan
              </Title>
              <Text className={classes.subTitle} c="gray.4">
                I make websites, work with data, and more.
              </Text>
              <Text
                fz="md"
                align="center"
                maw={500}
                fw={theme.colorScheme === 'dark' ? 400 : 500}
                className={classes.postTitle}
                c={theme.colorScheme === 'dark' ? 'dimmed' : 'dimmed'}
              >
                I&apos;m a recent graduate working every day to grow my skillset. Searching for
                somehwere to make an impact.
              </Text>
            </Flex>
          </Center>
        </Container>
      </Box>

      <Center pt={40} pb={60}>
        <Container size="sm">
          <Center>
            <Text span>Take a look at&nbsp;</Text>
            <Anchor>my resume&nbsp;&rarr;</Anchor>
          </Center>
          <Title mt="xl" align="center" size="h2" c="dark.6" fw={600}>
            More About Me
          </Title>
          <Stack className={classes.summary} fz={mobile ? 'md' : 'md'}>
            <Text w={tablet ? '100' : '100%'}>
              A recent graduate with a Bachelor&apos;s degree in Business Administration and a
              Master&apos;s degree in Information Technology. I am passionate about coding and
              creating websites and applications that are clean, efficient, and user-friendly.
            </Text>
            <Text w={tablet ? '100' : '100%'}>
              I have experience working with various technologies, such as Django, Next.js, Python,
              React, TypeScript, REST APIs, and database design and implementation. I also have
              experience working with a client to create a website that met their needs and
              expectations. I believe in making good design and development accessible to everyone,
              and I strive to make my work intuitive and user-friendly.
            </Text>
            <Text w={tablet ? '100' : '100%'}>
              During my free time, I enjoy experimenting with new technologies and working on
              personal projects. As a developer, I am always seeking new challenges and
              opportunities to learn and grow.
            </Text>
          </Stack>
        </Container>
      </Center>
    </>
  );
}
