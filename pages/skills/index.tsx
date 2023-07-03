import { Card, Text, Grid, Title, Stack, useMantineTheme, Container, Box } from '@mantine/core';
import { IconApi } from '@tabler/icons-react';
import React, { ReactNode } from 'react';
import { BiTerminal } from 'react-icons/bi';
import { FaDocker, FaNodeJs, FaSass } from 'react-icons/fa';
import {
  SiCss3,
  SiDjango,
  SiGoogleanalytics,
  SiHtml5,
  SiMicrosoftaccess,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';

import { CgDatabase } from 'react-icons/cg';
import { BsGit, BsRobot } from 'react-icons/bs';

import { useMediaQuery } from '@mantine/hooks';
import {
  AccessIcon,
  BootstrapIcon,
  JavaIcon,
  JavaScriptIcon,
  NextIcon,
  PythonIcon,
  TableauIcon,
  TypeScriptIcon,
} from '../../components/skillIcons/webdevIcons';

interface SkillGridColProps {
  icon: ReactNode;
  name: string;
}

function SkillGridCol({ icon, name }: SkillGridColProps) {
  //theme

  // theme
  const theme = useMantineTheme();

  return (
    <Grid.Col span={6} xs={4} sm={4} md={3} lg={3}>
      <Card
        shadow="xs"
        h="100%"
        // bg={theme.fn.darken(theme.colors.dark[5], 0.4)}
        // sx={{
        //   background: theme.fn.linearGradient(45, theme.colors.dark[7], theme.colors.dark[6]),
        // }}
        sx={{
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.015)',
            'box-shadow': theme.shadows.md,
          },
        }}
      >
        <Stack py="sm" spacing="lg" align="center">
          {icon}

          <Text fw={600} align="center">
            {name}
          </Text>
        </Stack>
      </Card>
    </Grid.Col>
  );
}

export default function Skills() {
  // styles
  const mobile = useMediaQuery('(max-width: 30em)');

  //theme
  const theme = useMantineTheme();

  let iconSize;
  if (mobile) {
    iconSize = 40;
  } else {
    iconSize = 50;
  }
  return (
    <>
      <Container size="lg" mt="xl" pb={60}>
        <Box px="2vw">
          <Grid>
            <Grid.Col span={12}>
              <Title mb="sm" mt="sm" align="center" size="h2">
                Web Development
              </Title>
            </Grid.Col>
            <SkillGridCol icon={<SiReact color="#61DBFB" size={iconSize} />} name="React" />
            {theme.colorScheme === 'dark' ? (
              <SkillGridCol icon={<NextIcon size={iconSize} />} name="Next.js" />
            ) : (
              <SkillGridCol icon={<SiNextdotjs color="" size={iconSize} />} name="Next.js" />
            )}
            <SkillGridCol icon={<SiDjango color="#2BA977" size={iconSize} />} name="Django" />
            <SkillGridCol
              icon={
                <FaNodeJs
                  color={theme.colorScheme === 'dark' ? '#66a80f' : '#2f9e44'}
                  size={iconSize}
                />
              }
              name="Node.js"
            />
            <SkillGridCol icon={<TypeScriptIcon size={iconSize} />} name="TypeScript" />
            <SkillGridCol icon={<BootstrapIcon size={iconSize} />} name="Bootstrap" />
            <SkillGridCol
              icon={<SiTailwindcss color="#00B7D6" size={iconSize} />}
              name="Tailwind CSS"
            />

            <SkillGridCol icon={<FaSass color="#c69" size={iconSize} />} name="SASS" />
            <SkillGridCol icon={<JavaScriptIcon size={iconSize} />} name="JavaScript" />
            <SkillGridCol icon={<IconApi size={iconSize} />} name="Rest API" />
            <SkillGridCol icon={<SiHtml5 color="#f06529" size={iconSize} />} name="HTML5" />
            <SkillGridCol icon={<SiCss3 color="#2965F1" size={iconSize} />} name="CSS3" />
          </Grid>
          <Grid mt="xl">
            <Grid.Col span={12}>
              <Title align="center" mb="sm" mt="lg" size="h2">
                Data
              </Title>
            </Grid.Col>
            {theme.colorScheme === 'dark' ? (
              <SkillGridCol icon={<AccessIcon size={iconSize} />} name="MS Access" />
            ) : (
              <SkillGridCol
                icon={<SiMicrosoftaccess color="#c92a2a" size={iconSize} />}
                name="MS Access"
              />
            )}
            <SkillGridCol icon={<SiMongodb color="#4DB33D" size={iconSize} />} name="MongoDB" />

            <SkillGridCol
              icon={<SiPostgresql color="#228be6" size={iconSize} />}
              name="PostgresSQL"
            />

            <SkillGridCol icon={<TableauIcon size={iconSize} />} name="Tableau" />
            <SkillGridCol
              icon={
                <BiTerminal
                  color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9]}
                  size={iconSize}
                />
              }
              name="SQL"
            />
            <SkillGridCol
              icon={
                <CgDatabase
                  size={iconSize}
                  color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9]}
                />
              }
              name="Database Design"
            />
            <SkillGridCol
              icon={
                <SiGoogleanalytics
                  color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9]}
                  size={iconSize}
                />
              }
              name="Data Analysis"
            />
            <SkillGridCol
              icon={
                <BsRobot
                  color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9]}
                  size={iconSize}
                />
              }
              name="Machine Learning"
            />
          </Grid>
          <Grid mt="xl">
            <Grid.Col span={12}>
              <Title mb="sm" mt="lg" align="center" size="h2">
                Other
              </Title>
            </Grid.Col>
            <SkillGridCol icon={<PythonIcon size={iconSize} />} name="Python" />
            <SkillGridCol icon={<JavaIcon size={iconSize} />} name="Java" />

            <SkillGridCol icon={<BsGit size={iconSize} color="#F34F29" />} name="Git" />
            <SkillGridCol icon={<FaDocker color="#2496ED" size={iconSize} />} name="Docker" />
          </Grid>
        </Box>
      </Container>
    </>
  );
}
