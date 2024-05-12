import Logo from '@/app/ui/logo';
import LoginForm from '@/app/ui/login-form';
import { AppleLogo } from '@/app/ui/social-logos';
import Image from 'next/image';
import { LoginWithFacebook, LoginWithGoogle } from '@/app/ui/social-auth';

export default function Page() {
  return (
    <div className="bg-white p-[20px] md:px-[3.938rem] md:py-[3.75rem]">
      <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-0">
        <div>
          <Logo className="mx-auto mb-[10px] h-[2.5rem] w-[10rem] md:mb-[1.678rem] md:h-[2.947rem] md:w-[12.125rem] lg:m-0" />
          <h2 className="text-center text-[1.125rem] font-bold leading-[1.25] text-dogwoose-rose lg:text-left">
            ¡Bienvenido de vuelta!
          </h2>
        </div>
        <aside className="flex w-full bg-night/5 shadow-[0px_8px_28px_0px_#0000001A] md:h-screen lg:ml-auto lg:max-w-[57.5rem]">
          <div className="flex h-full w-full flex-col bg-white p-[2rem] md:min-w-[25rem] md:p-[2.5rem]">
            <div className="mb-[40px] flex justify-between">
              <span className="border-b-[4px] pb-[10px] text-[1.2rem] font-bold capitalize md:text-[1.5rem]">
                Login
              </span>
              <span className="text-[1.2rem] font-bold capitalize opacity-40 md:text-[1.5rem]">
                Register
              </span>
            </div>
            <p className="mx-auto mb-[20px] max-w-[20rem] text-center font-hauora text-[0.8rem] font-semibold leading-[15px] md:text-[1rem] md:leading-[25px]">
              Ingresa con tu correo electrónico o tu número de teléfono
            </p>
            <div className="mt-auto">
              <LoginForm />
            </div>
            <div className="mt-auto grid grid-cols-3 gap-[14px]">
              <div className="flex items-center justify-center rounded-full bg-night/5 p-[14px]">
                <AppleLogo />
              </div>
              <LoginWithGoogle />
              <LoginWithFacebook />
            </div>
          </div>
          <div className="relative hidden h-full w-full items-center justify-center lg:flex">
            <Image src="/cover-login.png" alt="cover" fill />
          </div>
        </aside>
      </div>
    </div>
  );
}
