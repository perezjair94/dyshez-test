import { fetchPictures } from '@/app/lib/data';
import { PictureField } from '@/app/lib/definitions';
import { getPhotoUrls } from '@/app/lib/utils';
import Cards from '@/app/ui/pictures/cards';
import UploadForm from '@/app/ui/pictures/upload-form';

export default async function Pictures() {
  const pictures = await fetchPictures();
  return (
    <div className="flex-1 p-[20px] px-[40px]">
      <h1 className="mb-[21px] text-[1.5rem] font-bold">Pictures</h1>
      <div className="grid h-full w-full grid-cols-12 grid-rows-12">
        <div className="col-span-7">
          <div className="flex flex-wrap gap-[12px] gap-y-[20px]">
            <UploadForm />
            <Cards pictures={pictures as PictureField[]} />
          </div>
        </div>
        <div className="col-span-5 row-span-12 bg-night/5">Imagen</div>
      </div>
    </div>
  );
}
