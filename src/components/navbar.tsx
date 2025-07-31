'use client'

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Navbar() {
    const pathname = usePathname();
    const t = useTranslations('Navbar');

    return (
        <div className="fixed top-0 left-0 right-0 z-10 bg-neutral-950 bg-opacity-90 text-white border-b border-sky-950">
            <nav className="flex justify-between mx-auto max-w-4xl lg:text-lg">
                <div className="flex items-center p-3">
                    <Link href='/'>
                        <Image
                            className="rounded-full mr-4 border-2 border-blue-400"
                            src="/photo.jpg"
                            alt="Gonçalo Sousa Photo"
                            width={60}
                            height={60}
                            draggable={false}
                        />
                    </Link>
                    <div>
                        <h1><b>Gonçalo Sousa</b></h1>
                        <p>{t('role')}</p>
                    </div>
                </div>
                <ul className="flex space-x-8 items-center p-4">
                    <li>
                        <Link
                            href={"/"}
                            className={`${pathname === '/' ? 'text-blue-400' : ''} hover:text-blue-400 interactive relative group`}
                        >
                            {t('linkAbout')}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/projects"}
                            className={`${pathname === '/projects' ? 'text-blue-400' : ''} hover:text-blue-400 interactive relative group`}
                        >
                            {t('linkProjects')}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;