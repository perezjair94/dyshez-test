import { createClient } from './supabase/server';

export async function getPhotoUrls(
  pictures: Record<string, any>[] | null,
  user: any,
) {
  const supabase = createClient();
  if (!pictures) return [];
  return Promise.all(
    pictures.map(async (picture) => {
      const { data, error } = await supabase.storage
        .from('pictures')
        .createSignedUrl(`${user.id}/${picture.name}`, 60 * 60);
      if (error) {
        console.error(error);
      }
      return { url: data?.signedUrl, name: picture.name };
    }),
  );
}

export function getPagination(page: number, size: number) {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size : size;

  return { from, to };
}

export function getTotalPages(total: number, size: number) {
  return Math.ceil(total / size) || 1;
}
