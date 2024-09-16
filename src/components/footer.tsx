'use client'

import { Link, usePathname } from "@/i18n/routing";
import { WebsiteIcon } from "./svg/social-icon/website-icon";
import { LinkedinIcon } from "./svg/social-icon/linkedin-icon";
import { GithubIcon } from "./svg/social-icon/github-icon";
import Image from "next/image";

function Footer() {
    const pathname = usePathname();
    return (
        <div className="bg-neutral-950 text-white border-t border-sky-950 mt-8">
            <footer className="flex justify-between mx-auto max-w-4xl lg:text-lg p-4">
                <div className='space-x-4 flex items-center'>
                    <Link href={pathname} locale='en'>
                        <Image
                            className="rounded-full"
                            src="/us.svg"
                            alt="USA flag"
                            width={30}
                            height={30}
                            draggable={false}
                        />
                    </Link>
                    <Link href={pathname} locale='pt'>
                        <Image
                            className="rounded-full"
                            src="/pt.svg"
                            alt="PT flag"
                            width={30}
                            height={30}
                            draggable={false}
                        />
                    </Link>
                </div>

                <p className="flex items-center">© 2024 Gonçalo Sousa</p>

                <div className="flex space-x-4 items-center">
                    <Link href="https://goncalosousa.netlify.app" target="_blank">
                        <WebsiteIcon className="fill-white transition-transform hover:scale-110" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/goncalojbsousa" target="_blank">
                        <LinkedinIcon className="fill-white transition-transform hover:scale-110" />
                    </Link>
                    <Link href="https://github.com/goncalojbsousa" target="_blank">
                        <GithubIcon className="fill-white transition-transform hover:scale-110" />
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer;