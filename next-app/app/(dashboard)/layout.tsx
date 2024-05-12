import Sidenav from '@/app/ui/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex">
      <Sidenav />
      <main className="md:flex-1">{children}</main>
    </div>
  );
}
