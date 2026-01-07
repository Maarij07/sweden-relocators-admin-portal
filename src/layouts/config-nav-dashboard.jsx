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
   * Management
   */
  {
    subheader: 'Management',
    items: [
      { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
      { title: 'Overview', path: paths.dashboard.overview, icon: ICONS.dashboard },
      { title: 'Components', path: paths.dashboard.components, icon: ICONS.components },
      { title: 'Blank Page', path: paths.dashboard.blank, icon: ICONS.blank },
    ],
  },
  /**
   * Immigration
   */
  {
    subheader: 'Immigration',
    items: [
      { title: 'Immigration', path: paths.dashboard.root, icon: ICONS.blank },
    ],
  },
  /**
   * Relocation
   */
  {
    subheader: 'Relocation',
    items: [
      { title: 'Relocation', path: paths.dashboard.root, icon: ICONS.blank },
    ],
  },
  /**
   * Man Power Solutions
   */
  {
    subheader: 'Man Power Solutions',
    items: [
      { title: 'Man Power Solutions', path: paths.dashboard.root, icon: ICONS.blank },
    ],
  },
  /**
   * Employee
   */
  {
    subheader: 'Employee',
    items: [
      { title: 'Employee', path: paths.dashboard.root, icon: ICONS.blank },
    ],
  },
  /**
   * Partners
   */
  {
    subheader: 'Partners',
    items: [
      { title: 'Partners', path: paths.dashboard.root, icon: ICONS.blank },
    ],
  },
  /**
   * Support & Agreements
   */
  {
    subheader: 'Support & Agreements',
    items: [
      { title: 'Support & Agreements', path: paths.dashboard.root, icon: ICONS.blank },
    ],
  },
  /**
   * Tasks Manager
   */
  {
    subheader: 'Tasks Manager',
    items: [
      { title: 'Tasks Manager', path: paths.dashboard.root, icon: ICONS.blank },
    ],
  },
  /**
   * Date & Permissions
   */
  {
    subheader: 'Date & Permissions',
    items: [
      { title: 'Date & Permissions', path: paths.dashboard.root, icon: ICONS.blank },
    ],
  },
  /**
   * My Business
   */
  {
    subheader: 'My Business',
    items: [
      { title: 'My Business', path: paths.dashboard.root, icon: ICONS.blank },
    ],
  },
  /**
   * Admin Overview
   */
  {
    subheader: 'Admin Overview',
    items: [
      { title: 'Admin Overview', path: paths.dashboard.root, icon: ICONS.blank },
    ],
  },
];
