'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();

    return (
        <div className="fixed top-0 left-0 right-0 z-10 bg-neutral-950 bg-opacity-90 text-white border-b border-sky-950">
            <nav className="flex justify-between mx-auto max-w-4xl lg:text-lg">
                <div className="flex items-center p-4">
                    <Image
                        className="rounded-full mr-4 border-2 border-blue-400"
                        src="/photo.jpeg"
                        alt="Gonçalo Sousa Photo"
                        width={60}
                        height={60}
                        draggable={false}
                    />
                    <div>
                        <h1><b>Gonçalo Sousa</b></h1>
                        <p>Software Developer</p>
                    </div>
                </div>
                <ul className="flex space-x-8 items-center p-4">
                    <li>
                        <Link
                            href={"/"}
                            className={`${pathname === '/' ? 'text-blue-400' : ''} hover:text-blue-400`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/projects"}
                            className={`${pathname === '/projects' ? 'text-blue-400' : ''} hover:text-blue-400`}

                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;