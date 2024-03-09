import Link from 'next/link';
import { ThemeSwitcher} from "./ThemeSwitch";

export const Navbar = () => {
  return (
      <nav className="bg-bringSecondaryBackground">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <Link href="/">
              Home
            </Link>
            <ThemeSwitcher/>
          </div>
        </div>
      </nav>
    )
}


