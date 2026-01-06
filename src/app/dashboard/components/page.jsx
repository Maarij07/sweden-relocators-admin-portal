import { CONFIG } from 'src/global-config';

import { ComponentsView } from 'src/sections/components/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Components | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <ComponentsView />;
}
