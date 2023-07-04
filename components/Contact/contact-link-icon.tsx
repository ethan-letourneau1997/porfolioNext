import { Tooltip, Anchor, Paper } from '@mantine/core';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkIconProps {
  hoverText: string;
  bgColor?: string;
  icon: ReactNode;
  linkHref: string;
  linkTitle: string;
}

export function ContactLinkIcon({ hoverText, icon, bgColor, linkHref, linkTitle }: LinkIconProps) {
  return (
    <Tooltip label={hoverText}>
      <Anchor title={`Link to ${linkTitle}`} component={Link} href={linkHref} target="_blank">
        <Paper
          h={40}
          w={40}
          shadow="xs"
          bg={bgColor || ''}
          c="white"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Paper>
      </Anchor>
    </Tooltip>
  );
}
