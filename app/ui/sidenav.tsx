export default function Sidenav() {
  return (
    <div className="border-r  border-night/10 py-[20px]">
      <div className="mx-auto mb-[40px] h-[40px] w-[40px] rounded-full bg-dogwoose-rose" />
      <nav className="h-screen w-[56px]">
        <ul>
          <li className="mb-[10px] flex items-center justify-center">
            <a href="/dashboard" className="p-[10px] text-dogwoose-rose">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-bag"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </a>
          </li>
          <li className="mb-[10px] flex items-center justify-center">
            <a href="/dashboard/orders" className="p-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-night/50"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
