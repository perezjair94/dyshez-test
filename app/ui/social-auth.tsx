'use client';

import { GoogleLogo } from './social-logos';
import { createClient } from '@/app/lib/supabase/client';

export function LoginWithGoogle() {
  const supabase = createClient();
  return (
    <button
      className="flex items-center justify-center rounded-full bg-night/5 p-[14px]"
      onClick={async () =>
        await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: { redirectTo: `${location.origin}/auth/callback` },
        })
      }
    >
      <GoogleLogo />
    </button>
  );
}
