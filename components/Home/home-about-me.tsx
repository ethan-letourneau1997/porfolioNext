import { Center, Container, Anchor, Title, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import useStyles from './home.styles';

export function AboutMe() {
  // responsive styles
  const mobile = useMediaQuery('(max-width: 30em)');
  const tablet = useMediaQuery('(max-width: 48em)');

  const { classes } = useStyles();

  return (
    <Center pt={40} pb={60}>
      <Container size="sm">
        <Center>
          <Text span>Take a look at&nbsp;</Text>
          <Anchor
            href="https://drive.google.com/file/d/12rbXGG4UlniWVrHgxqYtEC3FBE2lmHt5/view?usp=sharing"
            target="_blank"
            color="link.0"
          >
            my resume&nbsp;&rarr;
          </Anchor>
        </Center>
        <Title mt="xl" align="center" size="h2" c="dark.6" fw={600}>
          More About Me
        </Title>
        <Stack className={classes.summary} fz={mobile ? 'md' : 'md'}>
          <Text w={tablet ? '100' : '100%'}>
            As a recent graduate with a Master&apos;s degree in Information Technology and a
            Bachelor&apos;s in Business Administration, I am passionate about technology and how it
            can benefit organizations. I am especially interested in designing clean, efficient, and
            user-friendly websites and working with data.
          </Text>
          <Text w={tablet ? '100' : '100%'}>
            I have experience in various technologies including React, Next.js, Django, Python,
            TypeScript, REST APIs, and databases. Additionally, I have worked with a client to
            create a website that met their needs and expectations. I believe a good website must be
            accessible to everyone, and I strive to ensure my work is intuitive, user-friendly and
            follows best practices in accessibility.
          </Text>
          <Text w={tablet ? '100' : '100%'}>
            I believe that all organizations, large or small, can benefit from the proper use of
            data. I have practice in both designing and deploying databases and data analysis. I am
            particularly interested in machine learning and hope to explore that interest in future
            projects.
          </Text>
          <Text w={tablet ? '100' : '100%'}>
            As a developer, I am always seeking new challenges and opportunities that allow me to
            learn and grow.
          </Text>
        </Stack>
      </Container>
    </Center>
  );
}
