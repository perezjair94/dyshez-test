'use server';

import { redirect } from 'next/navigation';
import { createClient } from './supabase/server';

export async function uploadPicture(formData: FormData) {
  const file = formData.get('file') as File;
  const timestamp = new Date().toISOString();

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  const { data, error } = await supabase.storage
    .from('pictures')
    .upload(`${user.id}/${timestamp}.${file.name.split('.').pop()}`, file, {
      cacheControl: 'public, max-age=31536000',
    });

  if (error) {
    return 'Error al subir la imagen';
  }

  return redirect('pictures');
}

export async function deletePicture(id: string) {
  const supabase = createClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return redirect('/login');
    }

    const { error } = await supabase.storage
      .from('pictures')
      .remove([`${user.id}/${id}`]);

    if (error) {
      return 'Error al eliminar la imagen';
    }
  } catch (error) {
    console.log(error);
  }

  return redirect('/pictures');
}

export async function authenticate(
  prevState: { message?: string; sucess?: boolean } | undefined,
  formData: FormData,
) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { success: false, message: 'Credenciales incorrectas' };

  return {
    success: true,
    message: 'Inicio de sesión correctamente',
  };
}

export async function logout() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return redirect('/login?message=Could not sign out user');
  }

  return redirect('/login');
}
