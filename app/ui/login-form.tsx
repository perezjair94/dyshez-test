import Input from './input';

export default function LoginForm() {
  return (
    <form action="">
      <div className="mb-[40px] flex flex-col gap-[1rem]">
        <Input placeholder="Correo o teléfono" />
        <Input placeholder="Contraseña" type="password" />
      </div>
      <button
        type="submit"
        className="font-hauora mx-auto flex items-center gap-[6px] rounded-full bg-dogwoose-rose p-[14px] px-[24px] text-[14px] font-bold text-white hover:bg-opacity-85"
      >
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
      </button>
      <p className="font-hauora mt-[14px] text-center text-[13px] font-semibold leading-[17px] text-night/50">
        ¿Cambiaste tu teléfono?
      </p>
    </form>
  );
}
