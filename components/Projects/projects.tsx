import { Container, Stack, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ProjectSection } from './project-section';
import useStyles from './project.styles';

export function ProjectsPage() {
  // styles
  const { classes } = useStyles();
  const mobile = useMediaQuery('(max-width: 30em)');
  return (
    <Container className={classes.pageWrapper} mb={50} size="lg">
      <Stack spacing={100}>
        <ProjectSection
          imgPath="portfolio/cinegraph_nhiota.png"
          titleLeft="Cinegraph"
          titleRight="Movie and TV Database"
          titleURL="https://www.cinegraphtv.com/"
          description="Explore a wide variety of movies, tv shows, and actors. An autocomplete search
      functionality makes finding information quick and easy."
          builtWith="Next.js, React.js, TypeScript, Fetch API, SASS, Mantine"
          repoLink="https://github.com/ethan-letourneau1997/cinegraphNextTemplate"
          placeholderColor="#161616"
        />
        <ProjectSection
          imgPath="portfolio/march_madness_jnhiwu.png"
          titleLeft="March Madness"
          titleRight="Fantasy League Tracker"
          titleURL="http://draft-bracket.com/"
          description=" Created for a client's March Madness league. Allows users to draft their team and
      keep up to date with league scores and rankings."
          builtWith="Django, PostgresSQL, AWS Lightsail, Python, Bootstrap, HTML5, SASS"
          repoLink="https://github.com/ethan-letourneau1997/march-madness-frontend"
          placeholderColor="#161B2C"
        />
        <ProjectSection
          imgPath="Screenshot_2023-10-31_at_10.38.44_PM_erik7r.png"
          titleLeft="Spaces"
          titleRight="Forum for Communities"
          titleURL="#"
          description="Create and account and post topics, links, images and engage in discussions with other users. TEMPORARILY DOWN FOR MAINTENANCE"
          builtWith="Next.js 13 (server side rendering), Supabase, React.js, TypeScript, Mantine"
          repoLink="https://github.com/ethan-letourneau1997/spaces"
          placeholderColor="#161616"
        />
        <ProjectSection
          imgPath="portfolio/portfolio_aldaad.png"
          titleLeft="Portfolio Website"
          titleRight="My Personal Site"
          titleURL="https://ethanlet.com"
          description="The site you're on right now!"
          builtWith="Next.js, React, Typescript, CSS3, HTML5, Mantine"
          repoLink="https://github.com/ethan-letourneau1997/porfolioNext"
          placeholderColor="#040404"
        />
      </Stack>

      <Title fw={600} mt={mobile ? 70 : 80} c="gray.8" size={mobile ? 'h3' : 'h2'} px="2vw">
        Stay tuned for more...
      </Title>
    </Container>
  );
}
