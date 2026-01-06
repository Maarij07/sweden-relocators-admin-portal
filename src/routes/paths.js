// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    signin: `${ROOTS.AUTH}/signin`,
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    blank: `${ROOTS.DASHBOARD}/blank`,
    overview: `${ROOTS.DASHBOARD}/overview`,
    components: `${ROOTS.DASHBOARD}/components`,
  },
};
