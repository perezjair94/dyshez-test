import NavLinks from './nav-links';

export default function Sidenav() {
  return (
    <div className="border-r  border-night/10 py-[20px]">
      <div className="mx-auto mb-[40px] h-[40px] w-[40px] rounded-full bg-dogwoose-rose" />
      <nav className="h-screen w-[56px]">
        <NavLinks />
      </nav>
    </div>
  );
}
