import { useCallback } from 'react';

import Button from '@mui/material/Button';

import { useRouter } from 'src/routes/hooks';

import { toast } from 'src/components/snackbar';

import { useAuthContext, signOut } from 'src/auth/signin';

// ----------------------------------------------------------------------

export function SignOutButton({ onClose, sx, ...other }) {
  const router = useRouter();

  const { logout } = useAuthContext();

  const handleLogout = useCallback(async () => {
    try {
      await signOut();
      logout();

      onClose?.();
      router.push('/signin');
    } catch (error) {
      console.error(error);
      toast.error('Unable to logout!');
    }
  }, [logout, onClose, router]);

  return (
    <Button
      fullWidth
      variant="soft"
      size="large"
      color="error"
      onClick={handleLogout}
      sx={sx}
      {...other}
    >
      Logout
    </Button>
  );
}
