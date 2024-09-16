import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Projects() {
    const t = useTranslations('Projects');

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
                <Link href="/projects/gamehub-backlog" className="bg-neutral-900 border border-sky-950 rounded-lg hover:border-blue-400 hover:shadow hover:shadow-blue-400">
                    <Image
                        className="rounded-t-lg"
                        src="/gamehub.webp"
                        alt="Gonçalo Sousa Photo"
                        layout="responsive"
                        width={100}
                        height={50}
                        draggable={false}
                    />
                    <div className="p-4 pt-2">
                        <h1 className="mb-2 text-xl">{t('ghTitle')}</h1>
                        <p className="text-base">{t('ghText')}</p>
                    </div>
                </Link>

                <Link href="/projects/ges-app" className="bg-neutral-900 border border-sky-950 rounded-lg hover:border-blue-400 hover:shadow hover:shadow-blue-400">
                    <Image
                        className="rounded-t-lg"
                        src="/ges-app.webp"
                        alt="Gonçalo Sousa Photo"
                        layout="responsive"
                        width={100}
                        height={50}
                        draggable={false}
                    />
                    <div className="p-4 pt-2">
                        <h1 className="mb-2 text-xl">{t('gesTitle')}</h1>
                        <p className="text-base">{t('gesText')}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Projects;