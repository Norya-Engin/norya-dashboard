// app/page.tsx
import { redirect } from 'next/navigation';

export default function Page() {
  // Redirige immédiatement la racine vers /login
  redirect('/login');
}
