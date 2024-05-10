import Sidenav from '@/app/ui/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidenav />
      <main className="flex-1">{children}</main>
    </div>
  );
}
