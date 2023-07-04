import { createStyles } from '@mantine/core';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export default createStyles((theme) => ({
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
