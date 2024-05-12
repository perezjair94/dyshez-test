import { fetchPictures } from '@/app/lib/data';
import { PictureField } from '@/app/lib/definitions';
import Cards from '@/app/ui/pictures/cards';
import PreviewPicture from '@/app/ui/pictures/preview-picture';
import UploadForm from '@/app/ui/pictures/upload-form';

export default async function Pictures() {
  const pictures = await fetchPictures();
  return (
    <div className="p-[20px] md:px-[40px]">
      <div className="grid w-full grid-cols-12 gap-[20px]">
        <div className="col-span-12 md:col-span-7">
          <div className="sticky top-[20px]">
            <h1 className="mb-[21px] text-[1.5rem] font-bold">Pictures</h1>
            <div className="grid grid-cols-2 grid-rows-1 gap-[10px] md:grid-cols-3 lg:grid-cols-5">
              <UploadForm />
              <Cards pictures={pictures as PictureField[]} />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <h1 className="mb-[21px] text-[1.5rem] font-bold text-transparent">
            Preview
          </h1>
          <div className=" overflow-auto bg-night/5 p-[20px]">
            <PreviewPicture />
          </div>
        </div>
      </div>
    </div>
  );
}
