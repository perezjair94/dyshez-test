import Logo from '@/app/ui/logo';
import LoginForm from '@/app/ui/login-form';
import { AppleLogo, FacebookLogo, GoogleLogo } from '@/app/ui/social-logos';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-white px-[3.938rem] py-[3.75rem]">
      <div className="flex">
        <div>
          <Logo className="mb-[1.678rem] h-[2.947rem] w-[12.125rem]" />
          <h2 className="text-[1.125rem] font-bold leading-[1.25] text-dogwoose-rose">
            ¡Bienvenido de vuelta!
          </h2>
        </div>
        <aside className="ml-auto flex h-screen w-full max-w-[57.5rem] bg-night bg-opacity-5 shadow-[0px_8px_28px_0px_#0000001A]">
          <div className="flex h-full min-w-[25rem] flex-col bg-white p-[2.5rem]">
            <div className="mb-[40px] flex justify-between">
              <span className="border-b-[4px] pb-[10px] text-[1.5rem] font-bold capitalize">
                Login
              </span>
              <span className="text-[1.5rem] font-bold capitalize opacity-40">
                Register
              </span>
            </div>
            <p className="max-w-[20rem] text-center font-hauora text-[1rem] font-semibold leading-[25px]">
              Ingresa con tu correo electrónico o tu número de teléfono
            </p>
            <div className="mt-auto">
              <LoginForm />
            </div>
            <div className="mt-auto grid grid-cols-3 gap-[14px]">
              <div className="flex items-center justify-center rounded-full bg-night/5 p-[14px]">
                <AppleLogo />
              </div>
              <div className="flex items-center justify-center rounded-full bg-night/5 p-[14px]">
                <GoogleLogo />
              </div>
              <div className="flex items-center justify-center rounded-full bg-night/5 p-[14px]">
                <FacebookLogo />
              </div>
            </div>
          </div>
          <div className="relative flex h-[100%] w-full items-center justify-center">
            <Image src="/cover-login.png" alt="cover" fill />
          </div>
        </aside>
      </div>
    </div>
  );
}
