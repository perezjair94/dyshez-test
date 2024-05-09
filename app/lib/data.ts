import { createClient } from './supabase/server';
import { getPhotoUrls } from './utils';

export async function fetchPictures() {
  const supabase = createClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data: pictures, error } = await supabase.storage
      .from('pictures')
      .list(user?.id);
    if (error) {
      console.log('No pictures found');
    }
    const photoUrls = await getPhotoUrls(pictures, user);
    return photoUrls;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchOrders() {
  const supabase = createClient();
  try {
    const { data: orders } = await supabase.from('orders').select();
    return orders;
  } catch (error) {
    console.error(error);
  }
}
