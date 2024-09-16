import React from 'react'
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { WebsiteIcon } from '@/components/svg/social-icon/website-icon';
import { GithubIcon } from '@/components/svg/social-icon/github-icon';
import { Link } from '@/i18n/routing';

function GameHub() {
    const t = useTranslations('GameHub');

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center w-full max-w-2xl bg-neutral-900 border border-sky-950 rounded-lg'>
                <Image
                    className="rounded-t-lg"
                    src="/gamehub.webp"
                    alt="GameHub logo"
                    layout="responsive"
                    width={100}
                    height={50}
                    draggable={false}
                />
                <div className='p-8'>
                    <h1 className='text-3xl text-blue-400 text-center'><b>{t('title')}</b></h1>
                    <div className='flex justify-center items-center mt-4 mb-6 space-x-8'>
                        <Link className='flex items-center text-base transition-transform hover:scale-110' href="https://gamehubbacklog.vercel.app" target="_blank">
                            <WebsiteIcon className="fill-white mr-2" />
                            {t('live')}
                        </Link>
                        <Link className='flex items-center text-base transition-transform hover:scale-110' href="https://github.com/goncalojbsousa/gamehub-backlog" target="_blank">
                            <GithubIcon className="fill-white mr-2" />
                            {t('sourceCode')}
                        </Link>
                    </div>
                    <p className="text-base">{t('text')}</p>

                    <h2 className='text-xl mt-8 mb-2'>{t('featuresTitle')}</h2>
                    <ul className='text-base list-disc list-inside space-y-1'>
                        <li>{t('feature1')}</li>
                        <li>{t('feature2')}</li>
                        <li>{t('feature3')}</li>
                        <li>{t('feature4')}</li>
                        <li>{t('feature5')}</li>
                        <li>{t('feature6')}</li>
                        <li>{t('feature7')}</li>
                    </ul>

                    <div className='text-base mt-8'>
                    <h1 className='text-xl mb-4'>{t('technologiesTitle')}</h1>
                        <div className='flex flex-wrap justify-center items-center gap-4'>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>TypeScript</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>React</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>Next.js</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>PostgreSQL</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>Prisma</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>Tailwind</p>
                        </div>
                    </div>

                    <Image
                        className="mt-8"
                        src="/gamehub/gamehub-main.png"
                        alt="GameHub main page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8"
                        src="/gamehub/gamehub-gamepage.png"
                        alt="GameHub game page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8"
                        src="/gamehub/gamehub-profile.png"
                        alt="GameHub profile page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8"
                        src="/gamehub/gamehub-search.png"
                        alt="GameHub search page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                </div>

            </div>
        </div>
    )
}

export default GameHub;