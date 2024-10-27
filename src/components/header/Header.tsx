'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {
    const currentPath = usePathname();
    const [drawer, setDrawer] = useState(false)

    useEffect(() => {
        setDrawer(false)
    }, [currentPath])


    return (
        <nav className="flex justify-start md:justify-center items-center bg-primary py-2 sm:py-4 gap-2">
            <button className="sm:hidden" onClick={() => setDrawer(true)}>
                <MdMenu size={24}/>
            </button>
            <ul className="flex gap-4" tabIndex={drawer ? -1 : undefined}>
                <li className="my-1">
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

            
            <div
                data-open={drawer} 
                onClick={() => setDrawer(false)}
                className="bg-gradient-to-r from-background fixed top-0 left-0 right-0 bottom-0 transition-transform data-[open=false]:-translate-x-full" >
                <ul 
                onClick={e => e.stopPropagation()}
                tabIndex={drawer ? undefined : -1}
                className="flex flex-col p-4 w-60 gap-2 bg-background h-full">
                    <li className="">
                        <Link href={'/'} data-active={currentPath === '/'} className="data-[active=true]:underline">
                            Página inicial
                        </Link>
                    </li>
                    <li className="">
                        <Link href={'/cursos'} data-active={currentPath === '/cursos'} className="data-[active=true]:underline">
                            Cursos
                        </Link>
                    </li>
                    <li className="">
                        <Link href={'https://blog.codarse.com'} target="_blank" className="flex items-center gap-1">
                            Blog
                            <MdOpenInNew/>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};