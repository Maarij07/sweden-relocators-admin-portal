'use client';

import { use, useState, useEffect, useCallback, useMemo, createContext } from 'react';
import { useSetState, useBoolean } from 'minimal-shared/hooks';
import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

// Import mock data for user
import { _mock } from 'src/_mock';

// ===========================
// 🔐 CONSTANTS
// ===========================
export const JWT_STORAGE_KEY = 'jwt_access_token';

// ===========================
// 🔐 CONTEXT
// ===========================
export const AuthContext = createContext(undefined);

// ===========================
// 🔐 UTILITIES
// ===========================

export function jwtDecode(token) {
  try {
    if (!token) return null;

    const parts = token.split('.');
    if (parts.length < 2) {
      throw new Error('Invalid token!');
    }

    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = JSON.parse(atob(base64));

    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    throw error;
  }
}

export function isValidToken(accessToken) {
  if (!accessToken) {
    return false;
  }

  try {
    const decoded = jwtDecode(accessToken);

    if (!decoded || !('exp' in decoded)) {
      return false;
    }

    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  } catch (error) {
    console.error('Error during token validation:', error);
    return false;
  }
}

export async function setSession(accessToken) {
  try {
    if (accessToken) {
      sessionStorage.setItem(JWT_STORAGE_KEY, accessToken);
    } else {
      sessionStorage.removeItem(JWT_STORAGE_KEY);
    }
  } catch (error) {
    console.error('Error during set session:', error);
    throw error;
  }
}

export function getErrorMessage(error) {
  if (error instanceof Error) {
    return error.message || error.name || 'An error occurred';
  }

  if (typeof error === 'string') {
    return error;
  }

  if (typeof error === 'object' && error !== null) {
    const errorMessage = error.message;
    if (typeof errorMessage === 'string') {
      return errorMessage;
    }
  }

  return `Unknown error: ${error}`;
}

// ===========================
// 🔐 SIGN IN ACTIONS
// ===========================

export const signInWithPassword = async ({ email, password }) => {
  try {
    // TODO: Replace with your actual API endpoint
    // const res = await axios.post('/api/auth/sign-in', { email, password });
    // const { accessToken } = res.data;
    // setSession(accessToken);

    // For now, just store a dummy token
    setSession('dummy-jwt-token');
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await setSession(null);
  } catch (error) {
    console.error('Error during sign out:', error);
    throw error;
  }
};

// ===========================
// 🔐 AUTH PROVIDER
// ===========================

export function AuthProvider({ children }) {
  const { state, setState } = useSetState({ user: null, loading: false });

  const checkUserSession = useCallback(async () => {
    // For now, just mock the user session without API calls
    const token = sessionStorage.getItem(JWT_STORAGE_KEY);
    
    if (token) {
      setState({ 
        user: { 
          id: '8864c717-587d-472a-929a-8e5f298024da-0',
          displayName: 'Demo User',
          email: 'demo@minimals.cc',
          role: 'admin',
          accessToken: token
        }, 
        loading: false 
      });
    } else {
      setState({ 
        user: null, 
        loading: false 
      });
    }
  }, [setState]);

  useEffect(() => {
    checkUserSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

  const status = state.loading ? 'loading' : checkAuthenticated;

  const logout = useCallback(() => {
    setState({ user: null, loading: false });
  }, [setState]);

  const memoizedValue = useMemo(
    () => ({
      user: state.user ? { ...state.user, role: state.user?.role ?? 'admin' } : null,
      checkUserSession,
      logout,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
    }),
    [checkUserSession, state.user, status, logout]
  );

  return <AuthContext value={memoizedValue}>{children}</AuthContext>;
}

// ===========================
// 🔐 CUSTOM HOOKS
// ===========================

export function useAuthContext() {
  const context = use(AuthContext);

  if (!context) {
    throw new Error('useAuthContext: Context must be used inside AuthProvider');
  }

  return context;
}

// ===========================
// 🔐 MOCKED USER HOOK
// ===========================

export function useMockedUser() {
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Jaydon Frankie',
    email: 'demo@minimals.cc',
    photoURL: _mock.image.avatar(24),
    phoneNumber: _mock.phoneNumber(1),
    country: _mock.countryNames(1),
    address: '90210 Broadway Blvd',
    state: 'California',
    city: 'San Francisco',
    zipCode: '94116',
    about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
    role: 'admin',
    isPublic: true,
  };

  return { user };
}

// ===========================
// 🔐 SIGN IN FORM SCHEMA
// ===========================

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  password: zod
    .string()
    .min(1, { message: 'Password is required!' })
    .min(6, { message: 'Password must be at least 6 characters!' }),
});

// ===========================
// 🔐 FORM HEAD COMPONENT
// ===========================

export function FormHead({ sx, icon, title, description, ...other }) {
  return (
    <>
      {icon && (
        <Box component="span" sx={{ mb: 3, mx: 'auto', display: 'inline-flex' }}>
          {icon}
        </Box>
      )}

      <Box
        sx={[
          () => ({
            mb: 5,
            gap: 1.5,
            display: 'flex',
            textAlign: 'center',
            whiteSpace: 'pre-line',
            flexDirection: 'column',
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Typography variant="h5">{title}</Typography>

        {description && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        )}
      </Box>
    </>
  );
}

// ===========================
// 🔐 SIGN IN VIEW
// ===========================

export function JwtSignInView() {
  const router = useRouter();

  const showPassword = useBoolean();

  const { checkUserSession } = useAuthContext();

  const [errorMessage, setErrorMessage] = useState('');

  const defaultValues = {
    email: 'demo@minimals.cc',
    password: '@2Minimal',
  };

  const methods = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Temporarily skip authentication - just go to dashboard
      await signInWithPassword({ email: data.email, password: data.password });
      await checkUserSession?.();
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      const feedbackMessage = getErrorMessage(error);
      setErrorMessage(feedbackMessage);
    }
  });

  const renderForm = () => (
    <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
      <Field.Text name="email" label="Email address" slotProps={{ inputLabel: { shrink: true } }} />

      <Box sx={{ gap: 1.5, display: 'flex', flexDirection: 'column' }}>
        <Link
          component={RouterLink}
          href="#"
          variant="body2"
          color="inherit"
          sx={{ alignSelf: 'flex-end' }}
        >
          Forgot password?
        </Link>

        <Field.Text
          name="password"
          label="Password"
          placeholder="6+ characters"
          type={showPassword.value ? 'text' : 'password'}
          slotProps={{
            inputLabel: { shrink: true },
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={showPassword.onToggle} edge="end">
                    <Iconify
                      icon={showPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="Sign in..."
      >
        Sign in
      </Button>
    </Box>
  );

  return (
    <>
      <FormHead
        title="Sign in to your account"
        description="Enter your credentials to access the admin panel"
        sx={{ textAlign: { xs: 'center', md: 'left' } }}
      />

      <Alert severity="info" sx={{ mb: 3 }}>
        Use <strong>{defaultValues.email}</strong>
        {' with password '}
        <strong>{defaultValues.password}</strong>
      </Alert>

      {!!errorMessage && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMessage}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm()}
      </Form>
    </>
  );
}
