import {
  Text,
  useMantineTheme,
  Image,
  Title,
  Box,
  Paper,
  Anchor,
  Container,
  Overlay,
  createStyles,
  Space,
  Stack,
} from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  pageWrapper: {
    marginTop: 50,

    [theme.fn.smallerThan('xl')]: {
      marginTop: 40,
    },

    [theme.fn.smallerThan('lg')]: {
      marginTop: 40,
    },

    [theme.fn.smallerThan('md')]: {
      marginTop: 40,
    },

    [theme.fn.smallerThan('sm')]: {
      marginTop: 40,
    },

    [theme.fn.smallerThan('xs')]: {
      marginTop: 40,
    },
  },

  title: {
    fontSize: 30,

    [theme.fn.smallerThan('xl')]: {
      fontSize: 26,
    },

    [theme.fn.smallerThan('lg')]: {
      fontSize: 28,
    },

    [theme.fn.smallerThan('md')]: {
      fontSize: 28,
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 26,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 24,
    },
  },

  description: {
    // fontFamily: gelasio.style.fontFamily,
    fontSize: 36,

    [theme.fn.smallerThan('xl')]: {
      fontSize: 18,
    },

    [theme.fn.smallerThan('lg')]: {
      fontSize: 18,
    },

    [theme.fn.smallerThan('md')]: {
      fontSize: 16,
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 16,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 16,
    },
  },

  projectImage: {
    marginLeft: '0vw',
    marginRight: '0vw',
    // marginLeft: 60,
    // marginRight: 60,
    [theme.fn.smallerThan('xl')]: {},

    [theme.fn.smallerThan('lg')]: {
      marginLeft: 0,
      marginRight: 0,
    },

    [theme.fn.smallerThan('md')]: {},

    [theme.fn.smallerThan('sm')]: {},

    [theme.fn.smallerThan('xs')]: {},
  },

  detailsWrapper: {},

  itemDetails: {
    width: '70%',

    [theme.fn.smallerThan('xl')]: {},

    [theme.fn.smallerThan('lg')]: {
      width: '100%',
    },
  },
}));

interface ProjectSectionProps {
  imgPath: string;
  titleLeft: string;
  titleRight: string;
  titleURL: string;
  description: string;
  builtWith: string;
  repoLink: string;
}

function ProjectSection({
  imgPath,
  titleLeft,
  titleRight,
  titleURL,
  description,
  builtWith,
  repoLink,
}: ProjectSectionProps) {
  // theme
  const theme = useMantineTheme();

  // styles
  const { classes } = useStyles();

  return (
    <Box>
      <Box px="2vw" className={classes.itemDetails}>
        <Title className={classes.title} fw={theme.colorScheme === 'dark' ? 500 : 650}>
          <Anchor href={titleURL}>{titleLeft}:&nbsp;</Anchor> {titleRight}
        </Title>

        <Text
          className={classes.description}
          fz="lg"
          mt="sm"
          c={theme.colorScheme === 'dark' ? 'dimmed' : 'dark.5'}
          fw={theme.colorScheme === 'dark' ? 400 : 500}
        >
          {description}
        </Text>
        <Text
          className={classes.description}
          fz="lg"
          mt="xl"
          c={theme.colorScheme === 'dark' ? 'dimmed' : 'dark.5'}
          fw={theme.colorScheme === 'dark' ? 400 : 500}
        >
          Built With: {builtWith}
        </Text>
        <Space h={20} />
        <Text fw={500} c="dark.4" span>
          Take a look at&nbsp;
        </Text>
        <Anchor href={repoLink} fw={500}>
          my code&nbsp;&rarr;
        </Anchor>
      </Box>
      <Paper
        mx="2vw"
        className={classes.projectImage}
        mt={30}
        shadow="md"
        radius="xs"
        withBorder
        pos="relative"
      >
        <Overlay opacity={0.05} radius="xs" />
        <Image radius="xs" src={imgPath} />
      </Paper>
    </Box>
  );
}

export default function Projects() {
  // styles
  const { classes } = useStyles();

  const mobile = useMediaQuery('(max-width: 30em)');

  return (
    <>
      {/* <SectionHeader title="Projects" /> */}
      <Container className={classes.pageWrapper} mb={50} size="lg">
        <Stack spacing={70}>
          <ProjectSection
            imgPath="cinegraphNoDevice.png"
            titleLeft="Cinegraph"
            titleRight="Movie and TV Database"
            titleURL="#"
            description="Explore a wide variety of movies, tv shows, and actors. An autocomplete search
            functionality makes finding information quick and easy."
            builtWith="Next.js, React.js, TypeScript, Fetch API, SASS, Mantine"
            repoLink="#"
          />
          <ProjectSection
            imgPath="mmNoDevice.png"
            titleLeft="March Madness"
            titleRight="Fantasy League Tracker"
            titleURL="#"
            description=" Created for a client's March Madness league. Allows users to draft their team and
            keep up to date with league rankings."
            builtWith="Django, PostgresSQL, AWS Lightsail, Python, Bootstrap, HTML5, SASS"
            repoLink="#"
          />
          <ProjectSection
            imgPath="mySite.png"
            titleLeft="Portfolio Website"
            titleRight="My Personal Site"
            titleURL="#"
            description="The site you're on right now!"
            builtWith="Next.js, React, Typescript, CSS3, HTML5, Mantine"
            repoLink="#"
          />
        </Stack>

        <Title fw={600} mt={mobile ? 50 : 80} c="gray.8" size={mobile ? 'h3' : 'h2'} px="2vw">
          Stay tuned for more...
        </Title>
      </Container>
    </>
  );
}
