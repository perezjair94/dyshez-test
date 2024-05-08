'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Input from './input';
import { authenticate } from '@/app/lib/actions';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  if (errorMessage) toast.error(errorMessage);

  return (
    <form action={dispatch}>
      <div className="mb-[40px] flex flex-col gap-[1rem]">
        <Input name="email" placeholder="Correo o teléfono" type="email" />
        <Input name="password" placeholder="Contraseña" type="password" />
      </div>
      <LoginButton />
      <p className="mt-[14px] text-center font-hauora text-[13px] font-semibold leading-[17px] text-night/50">
        ¿Cambiaste tu teléfono?
      </p>
      <Toaster />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="mx-auto flex items-center justify-center gap-[6px] rounded-full bg-dogwoose-rose p-[14px] px-[24px] font-hauora text-[14px] font-bold text-white hover:bg-opacity-85"
      aria-disabled={pending}
    >
      {pending ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          Cargando...
        </>
      ) : (
        <>
          Continuar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </>
      )}
    </button>
  );
}
