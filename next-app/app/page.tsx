import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/orders');
  return <main>dyshez</main>;
}
