import Image from 'next/image';
import NavLinks from './nav-links';

export default function Sidenav() {
  return (
    <div className="sticky top-0 h-screen w-[56px] border-r border-night/10 bg-white py-[20px]">
      <div className="mx-auto mb-[40px] h-[40px] w-[40px] rounded-full bg-dogwoose-rose/40">
        <Image src="/avatar.png" width={40} height={40} alt="avatar" />
      </div>
      <nav className="w-[56px]">
        <NavLinks />
      </nav>
    </div>
  );
}
