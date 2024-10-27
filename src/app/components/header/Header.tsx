'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {
    const currentPath = usePathname();


    return (
        <nav className="flex justify-start md:justify-center px-6 items-center bg-primary py-2 sm:py-4 gap-2">
            <button className="sm:hidden">
                <MdMenu size={24}/>
            </button>
            <ul className="flex gap-2">
                <li className="">
                    <Link href={'/'} className="border-2 rounded-md py-2 px-1 font-bold">
                        CODARSE
                    </Link>
                </li>
                <li className="hidden sm:block">
                    <Link href={'/'} data-active={currentPath === '/'} className="data-[active=true]:underline">
                     Página inicial
                    </Link>
                </li>
                <li className="hidden sm:block">
                    <Link href={'/cursos'} data-active={currentPath === '/cursos'} className="data-[active=true]:underline">
                        Cursos
                    </Link>
                </li>
                <li className="hidden sm:block">
                    <Link href={'https://blog.codarse.com'} target="_blank" className="flex items-center gap-1">
                        Blog
                        <MdOpenInNew/>
                    </Link>
                </li>

                <h1 className="sm:hidden">CodarSe - Página inicial</h1>
            </ul>
        </nav>
    );
};