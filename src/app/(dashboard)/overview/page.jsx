import { CONFIG } from 'src/global-config';

import { OverviewAppView } from 'src/sections/overview/app/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Overview | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewAppView />;
}
