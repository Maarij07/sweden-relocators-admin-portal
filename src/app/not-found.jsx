import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export const metadata = { title: `404 page not found! | Error - ${CONFIG.appName}` };

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
