import { Grid, Title, useMantineTheme, Container, Box } from '@mantine/core';

import React from 'react';
import { BiTerminal } from 'react-icons/bi';
import { TbApi } from 'react-icons/tb';
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

import { SkillGridCol } from './skills-grid-column';
import { BootstrapIcon } from '../Icons/bootstrap-icons';
import { JavaIcon } from '../Icons/java-icon';
import { JavaScriptIcon } from '../Icons/javascript-icon';

import { PythonIcon } from '../Icons/python-icon';
import { TableauIcon } from '../Icons/tableau-icon';
import { TypeScriptIcon } from '../Icons/typescript-icon';

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
              <Title mb="sm" mt="sm" align="center" size="h2" c="dark.4">
                Web Development
              </Title>
            </Grid.Col>
            <SkillGridCol icon={<SiReact color="#61DBFB" size={iconSize} />} name="React" />

            <SkillGridCol icon={<SiNextdotjs color="" size={iconSize} />} name="Next.js" />

            <SkillGridCol icon={<SiDjango color="#2BA977" size={iconSize} />} name="Django" />
            <SkillGridCol icon={<FaNodeJs color="#2f9e44" size={iconSize} />} name="Node.js" />
            <SkillGridCol icon={<TypeScriptIcon size={iconSize} />} name="TypeScript" />
            <SkillGridCol icon={<BootstrapIcon size={iconSize} />} name="Bootstrap" />
            <SkillGridCol
              icon={<SiTailwindcss color="#00B7D6" size={iconSize} />}
              name="Tailwind CSS"
            />

            <SkillGridCol icon={<FaSass color="#c69" size={iconSize} />} name="SASS" />
            <SkillGridCol icon={<JavaScriptIcon size={iconSize} />} name="JavaScript" />
            <SkillGridCol icon={<TbApi size={iconSize} />} name="Rest API" />
            <SkillGridCol icon={<SiHtml5 color="#f06529" size={iconSize} />} name="HTML5" />
            <SkillGridCol icon={<SiCss3 color="#2965F1" size={iconSize} />} name="CSS3" />
          </Grid>
          <Grid mt="xl">
            <Grid.Col span={12}>
              <Title align="center" mb="sm" mt="lg" size="h2" c="dark.4">
                Data
              </Title>
            </Grid.Col>

            <SkillGridCol
              icon={<SiMicrosoftaccess color="#c92a2a" size={iconSize} />}
              name="MS Access"
            />

            <SkillGridCol icon={<SiMongodb color="#4DB33D" size={iconSize} />} name="MongoDB" />

            <SkillGridCol
              icon={<SiPostgresql color="#228be6" size={iconSize} />}
              name="PostgresSQL"
            />

            <SkillGridCol icon={<TableauIcon size={iconSize} />} name="Tableau" />
            <SkillGridCol
              icon={<BiTerminal color={theme.colors.dark[9]} size={iconSize} />}
              name="SQL"
            />
            <SkillGridCol
              icon={<CgDatabase size={iconSize} color={theme.colors.dark[9]} />}
              name="Database Design"
            />
            <SkillGridCol
              icon={<SiGoogleanalytics color={theme.colors.dark[9]} size={iconSize} />}
              name="Data Analysis"
            />
            <SkillGridCol
              icon={<BsRobot color={theme.colors.dark[9]} size={iconSize} />}
              name="Machine Learning"
            />
          </Grid>
          <Grid mt="xl">
            <Grid.Col span={12}>
              <Title mb="sm" mt="lg" align="center" size="h2" c="dark.4">
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
