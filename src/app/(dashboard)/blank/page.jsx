import { CONFIG } from 'src/global-config';

import { BlankView } from 'src/sections/blank/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Blank Page | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <BlankView title="Blank Page" description="This is a blank content page." />;
}
