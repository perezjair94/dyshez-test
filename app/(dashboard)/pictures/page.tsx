import { Picture } from '@/app/lib/definitions';
import { createClient } from '@/app/lib/supabase/server';
import Cards from '@/app/ui/pictures/cards';

export default async function Pictures() {
  const supabase = createClient();
  const { data: pictures } = await supabase
    .from('pictures')
    .select('*')
    .order('created_at', { ascending: false });
  return (
    <div className="flex-1 p-[20px] px-[40px]">
      <h1 className="mb-[21px] text-[1.5rem] font-bold">Pictures</h1>
      <div className="grid h-full w-full grid-cols-12 grid-rows-12">
        <div className="col-span-7">
          <div className="flex flex-wrap gap-[12px] gap-y-[20px]">
            <div className="flex h-[124px] w-[124px] cursor-pointer items-center justify-center rounded-[8px] border border-night/40 bg-white text-[#808080] transition-all hover:bg-night/5 hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </div>
            <Cards pictures={pictures as Picture[]} />
          </div>
        </div>
        <div className="col-span-5 row-span-12 bg-night/5">Imagen</div>
      </div>
    </div>
  );
}
