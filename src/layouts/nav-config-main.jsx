import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  { title: 'Home', path: '/', icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" /> },
  {
    title: 'Auth',
    path: paths.auth.signin,
    icon: <Iconify width={22} icon="solar:lock-bold-duotone" />,
  },
  {
    title: 'Dashboard',
    icon: <Iconify width={22} icon="solar:tablet-bold-duotone" />,
    path: CONFIG.auth.redirectPath,
  },
];
