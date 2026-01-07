import { CONFIG } from 'src/global-config';

import { OverviewAppView } from 'src/components/overview-app-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewAppView />;
}
