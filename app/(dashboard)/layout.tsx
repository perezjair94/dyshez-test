import Sidenav from '@/app/ui/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="flex">
        <Sidenav />
        {children}
      </main>
    </div>
  );
}
