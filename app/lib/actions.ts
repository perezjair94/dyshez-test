'use server';

import { redirect } from 'next/navigation';
import { createClient } from './supabase/server';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return 'Credenciales incorrectas';
  }

  return redirect('/protected');
}

export async function logout() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return redirect('/login?message=Could not sign out user');
  }

  return redirect('/login');
}
