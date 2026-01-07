// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/signin',
  DASHBOARD: '',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    signin: ROOTS.AUTH,
  },
  // DASHBOARD
  dashboard: {
    root: '/',
    blank: '/blank',
    overview: '/overview',
    components: '/components',
  },
};
