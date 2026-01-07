import { CONFIG } from 'src/global-config';

import { ComponentsView } from 'src/components/components-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Components | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <ComponentsView />;
}
