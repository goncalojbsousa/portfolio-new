import { Link } from "@/i18n/routing";
import { WebsiteIcon } from "./svg/social-icon/website-icon";
import { LinkedinIcon } from "./svg/social-icon/linkedin-icon";
import { GithubIcon } from "./svg/social-icon/github-icon";

function Footer() {
    return (
        <div className="bg-neutral-950 text-white border-t border-sky-950">
            <footer className="flex justify-between mx-auto max-w-4xl lg:text-lg p-4">
                <div>
                    Gonçalo Sousa 2024
                </div>
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