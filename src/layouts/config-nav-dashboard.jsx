import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  blank: icon('ic-blank'),
  dashboard: icon('ic-dashboard'),
  components: icon('ic-menu-item'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: 'Menu',
    items: [
      { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
      { title: 'Overview', path: paths.dashboard.overview, icon: ICONS.dashboard },
      { title: 'Components', path: paths.dashboard.components, icon: ICONS.components },
      { title: 'Blank Page', path: paths.dashboard.blank, icon: ICONS.blank },
    ],
  },
];
