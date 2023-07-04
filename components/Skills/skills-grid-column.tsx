import { useMantineTheme, Grid, Card, Stack, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface SkillGridColProps {
  icon: ReactNode;
  name: string;
}

export function SkillGridCol({ icon, name }: SkillGridColProps) {
  //theme

  // theme
  const theme = useMantineTheme();

  return (
    <Grid.Col span={6} xs={4} sm={4} md={3} lg={3}>
      <Card
        bg="gray.0"
        shadow="xs"
        h="100%"
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
