import Image from 'next/image';
import NavLinks from './nav-links';

export default function Sidenav() {
  return (
    <div className="fixed bottom-0 z-50 flex h-[45px] w-full flex-row-reverse items-center justify-center border-t border-night/10 bg-white lg:sticky lg:top-0 lg:inline-block lg:h-screen lg:w-[56px] lg:border-r lg:border-t-0 lg:py-[20px]">
      <div className="absolute right-2 h-[30px] w-[30px] rounded-full lg:relative lg:right-0 lg:mx-auto lg:mb-[40px] lg:h-[40px] lg:w-[40px]">
        <Image src="/avatar.png" fill alt="avatar" />
      </div>
      <nav className="flex flex-1 justify-center gap-[10px] lg:block lg:w-[56px]">
        <NavLinks />
      </nav>
    </div>
  );
}
