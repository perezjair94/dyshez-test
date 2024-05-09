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
