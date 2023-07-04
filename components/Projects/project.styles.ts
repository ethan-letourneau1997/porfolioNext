import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
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
